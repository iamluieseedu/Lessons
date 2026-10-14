/**
 * ============================================================================
 * 📚 OFFICIAL DIGITAL LIBRARY ATTENDANCE SYSTEM (GOOGLE DRIVE & SHEETS)
 * Version: 3.6 (Production Ready - Specific Drive Folder & Sheet Sync)
 * ============================================================================
 * 
 * SPREADSHEET URL:
 * https://docs.google.com/spreadsheets/d/16ntBPPdctHxaBggT3iK2lZDAVIz63C_hobln0vwkv78/edit
 *
 * GOOGLE DRIVE MEDIA FOLDER URL:
 * https://drive.google.com/drive/folders/1qgy2Dyr_yUFTdNoqzXAsFPQIqXUznUr7
 */

// Iyong Google Sheet ID:
var SPREADSHEET_ID = "16ntBPPdctHxaBggT3iK2lZDAVIz63C_hobln0vwkv78";

// Iyong Google Drive Folder ID para sa lahat ng uploads (Selfies, Book Photos, Signatures, Passes):
var DRIVE_FOLDER_ID = "1qgy2Dyr_yUFTdNoqzXAsFPQIqXUznUr7";

/**
 * Health check & record retrieval endpoint kapag binuksan sa browser o kinuha ng Admin
 */
function doGet(e) {
  try {
    var ss = getSpreadsheet_();
    var folder = getMainDriveFolder_();

    // Check if Admin portal is fetching live records from Google Sheets
    if (e && e.parameter && e.parameter.action === "get_records") {
      var sheet = ss.getSheetByName("Library_Logs");
      if (!sheet) {
        return ContentService.createTextOutput(JSON.stringify({
          status: "success",
          records: []
        })).setMimeType(ContentService.MimeType.JSON);
      }
      var lastRow = sheet.getLastRow();
      if (lastRow <= 1) {
        return ContentService.createTextOutput(JSON.stringify({
          status: "success",
          records: []
        })).setMimeType(ContentService.MimeType.JSON);
      }

      var data = sheet.getRange(2, 1, lastRow - 1, 18).getValues();
      var formulas = sheet.getRange(2, 1, lastRow - 1, 18).getFormulas();
      var records = [];
      for (var i = data.length - 1; i >= 0; i--) {
        var row = data[i];
        var formulaRow = formulas[i] || [];
        var timestamp = row[0];
        var recordId = row[1];
        var studentId = row[2];
        var studentName = row[3];
        var section = row[4];
        var purpose = row[5];
        var bookTitle = row[6];
        var status = (row[7] || "ACTIVE").toString().toLowerCase();
        var timeIn = row[8];
        var timeOut = row[9];
        var duration = row[10];
        var locStatus = row[11];
        var librarian = row[16] || row[13] || "Librarian";

        // Kumuha ng clickable o direct Drive URLs para sa litrato, lagda, at pass
        var selfieUrl = extractUrl_(row[12], formulaRow[12]);
        var bookUrl = extractUrl_(row[13], formulaRow[13]);
        var signatureUrl = extractUrl_(row[14], formulaRow[14]);
        var cardPassUrl = extractUrl_(row[15], formulaRow[15]);

        if (recordId || studentId) {
          records.push({
            id: recordId || ("CARD-" + i),
            studentId: String(studentId),
            studentName: String(studentName),
            gradeSection: String(section),
            purpose: String(purpose || "study"),
            bookTitle: String(bookTitle || "Library Resource"),
            status: status === "completed" ? "completed" : "active",
            timeIn: timeIn ? new Date(timeIn).toISOString() : new Date().toISOString(),
            timeOut: timeOut && timeOut !== "ACTIVE" ? new Date(timeOut).toISOString() : "",
            durationMinutes: parseInt(duration) || 0,
            locationIn: {
              latitude: 14.328171,
              longitude: 121.090469,
              accuracyMeters: 10,
              isWithinGeofence: String(locStatus).toUpperCase().indexOf("VERIFIED") >= 0,
              distanceFromLibraryMeters: 0,
              timestamp: Date.now()
            },
            librarianName: librarian,
            selfiePhotoBase64: toDirectImageUrl_(selfieUrl),
            bookPhotoBase64: toDirectImageUrl_(bookUrl),
            librarianSignatureBase64: toDirectImageUrl_(signatureUrl),
            digitalCardBase64: toDirectImageUrl_(cardPassUrl),
            driveUrls: {
              cardUrl: cardPassUrl,
              bookUrl: bookUrl,
              selfieUrl: selfieUrl,
              signatureUrl: signatureUrl
            }
          });
        }
      }

      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        records: records
      })).setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "online",
      message: "✓ Google Apps Script is LIVE, connected to Google Drive & Sheets!",
      spreadsheetUrl: ss ? ss.getUrl() : ("https://docs.google.com/spreadsheets/d/" + SPREADSHEET_ID + "/edit"),
      driveFolderUrl: folder ? folder.getUrl() : ("https://drive.google.com/drive/folders/" + DRIVE_FOLDER_ID),
      timestamp: new Date().toISOString()
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Pangunahing receiver ng attendance records, selfies, book photos, at e-signatures
 * May Script Lock at Multi-level Deduplication para maiwasan ang duplicate entries sa Google Sheets at Google Drive
 */
function doPost(e) {
  // 1. Script Lock - strictly serialize requests across all devices to prevent concurrent race conditions
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000); // Maghintay ng hanggang 30 segundo
  } catch (lockErr) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "busy",
      message: "Server busy processing another device. Please retry in a few seconds."
    })).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Walang post data na natanggap."
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      data = e.parameter;
    }

    var ss = getSpreadsheet_();
    var sheet = ss.getSheetByName("Library_Logs");

    // =========================================================================
    // ACTION 1: TIME OUT (I-update ang umiiral na row, HUWAG GUMAWA NG BAGONG ROW)
    // =========================================================================
    var isTimeOutAction = data && (data.action === "time_out" || (data.status && data.status.toString().toLowerCase() === "completed" && data.timeOut));
    if (isTimeOutAction) {
      if (!sheet) {
        return ContentService.createTextOutput(JSON.stringify({
          status: "error",
          message: "Library_Logs sheet not found for Time Out."
        })).setMimeType(ContentService.MimeType.JSON);
      }

      var targetRow = -1;
      var dataIdClean = (data.id || "").toString().trim().toLowerCase();
      var dataStudentClean = (data.studentId || "").toString().trim().toLowerCase();

      // Scan up to 3 attempts with brief pauses in case Time In was still writing to sheet
      for (var attempt = 0; attempt < 3; attempt++) {
        var lastRow = sheet.getLastRow();
        if (lastRow > 1) {
          // Col 2 (Record ID), Col 3 (Student ID), ..., Col 8 (Status)
          var values = sheet.getRange(2, 2, lastRow - 1, 7).getValues();
          for (var i = values.length - 1; i >= 0; i--) {
            var recId = (values[i][0] || "").toString().trim().toLowerCase();
            var sId = (values[i][1] || "").toString().trim().toLowerCase();
            var rowStat = (values[i][6] || "").toString().trim().toUpperCase();

            // Match by exact Record ID OR match by student ID where record was not completed
            if ((dataIdClean && recId === dataIdClean) ||
                (dataStudentClean && sId === dataStudentClean && rowStat !== "COMPLETED")) {
              targetRow = i + 2;
              break;
            }
          }
        }
        if (targetRow > 0) break;
        Utilities.sleep(1000);
      }

      var timeOutFormatted = data.timeOut ? new Date(data.timeOut).toLocaleString() : new Date().toLocaleString();
      var durationFormatted = (data.durationMinutes || 0) + " mins";

      if (targetRow > 0) {
        // Update Status (col 8), Time Out (col 10), Duration (col 11)
        sheet.getRange(targetRow, 8).setValue("COMPLETED");
        sheet.getRange(targetRow, 10).setValue(timeOutFormatted);
        sheet.getRange(targetRow, 11).setValue(durationFormatted);

        // If updated digital card pass is provided, update Drive pass and Col 16 hyperlink
        if (data.digitalCardBase64) {
          try {
            var mainFolder = getMainDriveFolder_();
            var todayStr = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || "GMT+8", "yyyy-MM-dd");
            var todayFolder = getOrCreateFolder_(todayStr, mainFolder);
            var cardFolder = getOrCreateFolder_("Digital_Cards", todayFolder);
            var prefixTimeout = (data.id || (dataStudentClean + "_" + todayStr)).toString().replace(/[^a-zA-Z0-9_-]/g, "_");
            // Deduplication: I-trash ang lumang active pass para 1 file lang ang manatili sa Digital_Cards folder
            var oldCards = cardFolder.getFilesByName(prefixTimeout + "_card_pass.png");
            while (oldCards.hasNext()) {
              oldCards.next().setTrashed(true);
            }
            var cardUrl = saveBase64Image_(cardFolder, data.digitalCardBase64, prefixTimeout + "_card_pass.png", "image/png");
            if (cardUrl) {
              sheet.getRange(targetRow, 16).setValue('=HYPERLINK("' + cardUrl + '", "🪪 View Card Pass (Completed)")');
            }
          } catch (cardErr) {
            console.error("Card update error during timeout: " + cardErr);
          }
        }

        return ContentService.createTextOutput(JSON.stringify({
          status: "success",
          message: "Student Time Out successfully recorded in Google Sheets!",
          updatedRow: targetRow
        })).setMimeType(ContentService.MimeType.JSON);
      } else {
        // STRICT SAFETY GUARD: Time Out MUST NEVER create a new row or re-upload files!
        return ContentService.createTextOutput(JSON.stringify({
          status: "warning",
          message: "Time Out record not found in Google Sheets. Duplicate row creation prevented."
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }

    // =========================================================================
    // ACTION 2: TIME IN (DEDUPLICATION CHECK - HUWAG MAG-UPLOAD KUNG NANDOON NA)
    // =========================================================================
    if (sheet && data) {
      var lastRowCheck = sheet.getLastRow();
      if (lastRowCheck > 1) {
        var existingData = sheet.getRange(2, 1, lastRowCheck - 1, 8).getValues(); // col 1 (Timestamp) to col 8 (Status)
        var checkId = (data.id || "").toString().trim().toLowerCase();
        var checkStudent = (data.studentId || "").toString().trim().toLowerCase();
        var nowMs = new Date().getTime();

        for (var k = existingData.length - 1; k >= 0; k--) {
          var rowTs = new Date(existingData[k][0]).getTime();
          var rowRecordId = (existingData[k][1] || "").toString().trim().toLowerCase(); // Col 2: Record ID
          var rowStudentId = (existingData[k][2] || "").toString().trim().toLowerCase(); // Col 3: Student ID
          var rowStatus = (existingData[k][7] || "").toString().trim().toUpperCase(); // Col 8: Status

          // 1. Exact Record ID match -> ALREADY LOGGED!
          if (checkId && rowRecordId === checkId) {
            return ContentService.createTextOutput(JSON.stringify({
              status: "success",
              message: "Record already logged in Google Sheets (Double entry prevented).",
              alreadyExists: true,
              existingRow: k + 2
            })).setMimeType(ContentService.MimeType.JSON);
          }

          // 2. Student already ACTIVE in library -> ALREADY LOGGED!
          if (checkStudent && rowStudentId === checkStudent && rowStatus === "ACTIVE") {
            return ContentService.createTextOutput(JSON.stringify({
              status: "warning",
              message: "Student already has an ACTIVE session in Google Sheets. Double entry prevented.",
              alreadyExists: true,
              existingRow: k + 2
            })).setMimeType(ContentService.MimeType.JSON);
          }

          // 3. Same student submitted within the last 45 seconds (Rapid double-click / network retry guard)
          if (checkStudent && rowStudentId === checkStudent && !isNaN(rowTs) && (nowMs - rowTs < 45000)) {
            return ContentService.createTextOutput(JSON.stringify({
              status: "success",
              message: "Duplicate entry within 45s prevented for student.",
              alreadyExists: true,
              existingRow: k + 2
            })).setMimeType(ContentService.MimeType.JSON);
          }
        }
      }
    }

    // 1. Kumuha o mag-set up ng Google Sheet Tab kung bago pa
    if (!sheet) {
      sheet = ss.insertSheet("Library_Logs");
      var headers = [
        "Timestamp",
        "Record ID",
        "Student ID",
        "Student Name",
        "Section",
        "Purpose",
        "Book Title / Material",
        "Status",
        "Time In",
        "Time Out",
        "Duration",
        "Location Verification",
        "Student Selfie (Drive)",
        "Book Photo (Drive)",
        "Librarian Signature (Drive)",
        "Official Card Pass (Drive)",
        "Librarian In-Charge",
        "Client IP Address"
      ];
      sheet.appendRow(headers);

      // Pro Styling sa Headers
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold")
        .setBackground("#1e40af")
        .setFontColor("#ffffff")
        .setFontSize(10)
        .setHorizontalAlignment("center")
        .setVerticalAlignment("middle");
      sheet.setRowHeight(1, 35);
      sheet.setFrozenRows(1);
    }

    // 2. I-set up ang Organised Folders sa loob ng itinalagang Google Drive Folder
    var mainFolder = getMainDriveFolder_();
    var todayStr = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || "GMT+8", "yyyy-MM-dd");
    var todayFolder = getOrCreateFolder_(todayStr, mainFolder);

    var selfieFolder = getOrCreateFolder_("Selfies", todayFolder);
    var bookFolder = getOrCreateFolder_("Book_Photos", todayFolder);
    var sigFolder = getOrCreateFolder_("Signatures", todayFolder);
    var cardFolder = getOrCreateFolder_("Digital_Cards", todayFolder);

    var studentClean = (data.studentId || "student").toString().replace(/[^a-zA-Z0-9_-]/g, "_");
    var timestampId = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || "GMT+8", "HHmmss");
    var recordClean = (data.id || (studentClean + "_" + timestampId)).toString().replace(/[^a-zA-Z0-9_-]/g, "_");
    var prefix = recordClean;

    // 3. I-save ang mga Litrato at Lagda sa Google Drive (Deduplication enabled gamit ang Record ID prefix)
    var selfieUrl = saveBase64Image_(selfieFolder, data.selfiePhotoBase64, prefix + "_selfie.jpg", "image/jpeg");
    var bookUrl = saveBase64Image_(bookFolder, data.bookPhotoBase64, prefix + "_book.jpg", "image/jpeg");
    var signatureUrl = saveBase64Image_(sigFolder, data.librarianSignatureBase64, prefix + "_signature.png", "image/png");
    var cardUrl = saveBase64Image_(cardFolder, data.digitalCardBase64, prefix + "_card_pass.png", "image/png");

    // 4. I-format ang Clickable Links para sa Google Sheet
    var selfieCell = selfieUrl ? '=HYPERLINK("' + selfieUrl + '", "📸 View Selfie")' : "None";
    var bookCell = bookUrl ? '=HYPERLINK("' + bookUrl + '", "📖 View Book")' : "None";
    var sigCell = signatureUrl ? '=HYPERLINK("' + signatureUrl + '", "✍️ View Signature")' : "None";
    var cardCell = cardUrl ? '=HYPERLINK("' + cardUrl + '", "🪪 View Card Pass")' : "None";

    var isTimeOutProvided = data.timeOut && data.timeOut.trim() !== "";
    var currentStatus = data.status ? data.status.toString().toUpperCase() : (isTimeOutProvided ? "COMPLETED" : "ACTIVE");
    var timeInFormatted = data.timeIn ? new Date(data.timeIn).toLocaleString() : new Date().toLocaleString();
    var timeOutVal = isTimeOutProvided ? new Date(data.timeOut).toLocaleString() : "ACTIVE (In Library)";
    var durationVal = data.durationMinutes ? (data.durationMinutes + " mins") : "In Progress";

    // 5. I-record ang Row sa Google Sheet
    var newRow = [
      new Date(),
      data.id || ("CARD-" + timestampId),
      data.studentId || "",
      data.studentName || "",
      data.gradeSection || data.section || "",
      (data.purpose || "borrow").toString().toUpperCase(),
      data.bookTitle || "",
      currentStatus,
      timeInFormatted,
      timeOutVal,
      durationVal,
      data.locationStatus || "Campus Library Verified",
      selfieCell,
      bookCell,
      sigCell,
      cardCell,
      data.librarianName || "Head Librarian",
      data.ipAddress || ""
    ];

    sheet.appendRow(newRow);

    // I-format ang bagong row
    var lastRow = sheet.getLastRow();
    var rowRange = sheet.getRange(lastRow, 1, 1, newRow.length);
    rowRange.setVerticalAlignment("middle").setFontSize(9);
    sheet.setRowHeight(lastRow, 28);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Attendance and media successfully saved to Google Sheet & Google Drive!",
      spreadsheetUrl: ss ? ss.getUrl() : ("https://docs.google.com/spreadsheets/d/" + SPREADSHEET_ID + "/edit"),
      driveFolderUrl: mainFolder ? mainFolder.getUrl() : ("https://drive.google.com/drive/folders/" + DRIVE_FOLDER_ID),
      cardUrl: cardUrl,
      selfieUrl: selfieUrl,
      bookUrl: bookUrl,
      signatureUrl: signatureUrl
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    try {
      lock.releaseLock();
    } catch (eLock) {}
  }
}

/**
 * Helper para mag-save ng Base64 Image papuntang Google Drive File
 * May Drive-level deduplication para hindi gumawa ng dobleng files sa folder
 */
function saveBase64Image_(folder, base64Data, filename, mimeType) {
  if (!base64Data || typeof base64Data !== 'string' || base64Data.length < 30) {
    return "";
  }
  try {
    // DRIVE DEDUPLICATION: Kung may kaparehong filename na sa folder, gamitin ang umiiral na file URL
    var existingFiles = folder.getFilesByName(filename);
    if (existingFiles.hasNext()) {
      var existingFile = existingFiles.next();
      return existingFile.getUrl();
    }

    var raw = base64Data;
    if (raw.indexOf(",") > -1) {
      raw = raw.split(",")[1];
    }
    raw = raw.replace(/\s/g, ''); // linisin ang whitespace
    var decoded = Utilities.base64Decode(raw);
    var blob = Utilities.newBlob(decoded, mimeType || "image/jpeg", filename);
    var file = folder.createFile(blob);
    try {
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    } catch (shareErr) {}
    return file.getUrl();
  } catch (err) {
    Logger.log("Error saving " + filename + ": " + err.toString());
    return "";
  }
}

/**
 * Helper para mag-extract ng URL mula sa formula na =HYPERLINK("url", "text") o plain text cell
 */
function extractUrl_(cellValue, cellFormula) {
  if (cellFormula && typeof cellFormula === 'string') {
    var match = cellFormula.match(/HYPERLINK\("([^"]+)"/i);
    if (match && match[1]) {
      return match[1].trim();
    }
  }
  if (cellValue && typeof cellValue === 'string') {
    var str = cellValue.trim();
    if (str.indexOf("http://") === 0 || str.indexOf("https://") === 0) {
      return str;
    }
  }
  return "";
}

/**
 * Helper para i-convert ang Google Drive view link papuntang direct image thumbnail URL
 * Gumagana ito nang direkta sa <img> tags sa browser nang walang login popup
 */
function toDirectImageUrl_(url) {
  if (!url || typeof url !== 'string') return "";
  var trimmed = url.trim();
  var fileIdMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    var fileId = fileIdMatch[1];
    return "https://drive.google.com/thumbnail?id=" + fileId + "&sz=w1000";
  }
  return trimmed;
}

/**
 * Helper para buksan o hanapin ang Google Sheet
 */
function getSpreadsheet_() {
  if (typeof SPREADSHEET_ID === "string" && SPREADSHEET_ID.trim() !== "") {
    try {
      return SpreadsheetApp.openById(SPREADSHEET_ID.trim());
    } catch (e) {
      Logger.log("Error openById: " + e.toString());
    }
  }

  try {
    var active = SpreadsheetApp.getActiveSpreadsheet();
    if (active) return active;
  } catch (e) {}

  var files = DriveApp.getFilesByName("Campus_Library_Attendance");
  if (files.hasNext()) {
    return SpreadsheetApp.open(files.next());
  }

  return SpreadsheetApp.create("Campus_Library_Attendance");
}

/**
 * Helper para buksan o kumuha ng main target folder sa Google Drive
 */
function getMainDriveFolder_() {
  if (typeof DRIVE_FOLDER_ID === "string" && DRIVE_FOLDER_ID.trim() !== "") {
    try {
      return DriveApp.getFolderById(DRIVE_FOLDER_ID.trim());
    } catch (e) {
      Logger.log("Error getFolderById: " + e.toString());
    }
  }
  return getOrCreateFolder_("Campus_Library_Records", DriveApp.getRootFolder());
}

/**
 * Helper para kumuha o gumawa ng subfolder sa Google Drive
 */
function getOrCreateFolder_(folderName, parentFolder) {
  var parent = parentFolder || getMainDriveFolder_();
  var folders = parent.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next();
  }
  return parent.createFolder(folderName);
}

/**
 * Pindutin ang RUN para i-test ang buong flow (Drive Folders + Sheet Row + Hyperlinks)
 */
function testSave() {
  // 1x1 transparent dummy PNG para ma-test ang pag-save ng image sa Drive
  var dummyPixel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

  var mockPayload = {
    postData: {
      contents: JSON.stringify({
        id: "CARD-DEMO-001",
        studentId: "2024-00123",
        studentName: "Juan Dela Cruz (Demo)",
        gradeSection: "BSIT 3A",
        purpose: "borrow",
        bookTitle: "Data Structures and Algorithms",
        timeIn: new Date().toISOString(),
        locationStatus: "Campus Verified",
        librarianName: "Head Librarian",
        ipAddress: "192.168.30.158",
        selfiePhotoBase64: dummyPixel,
        bookPhotoBase64: dummyPixel,
        librarianSignatureBase64: dummyPixel,
        digitalCardBase64: dummyPixel
      })
    }
  };

  var res = doPost(mockPayload);
  Logger.log("Test Result: " + res.getContent());
}

/**
 * 🧹 CLEAN / WIPE FUNCTION (1-CLICK RESET)
 * Piliin ang function na ito sa dropdown sa itaas at pindutin ang "Run":
 * 1. Buburahin ang lahat ng test rows sa Google Sheet (mananatili ang Header).
 * 2. Ililipat sa Trash ang lahat ng laman ng iyong Google Drive Folder.
 */
function cleanAllDriveAndSheet() {
  // 1. Linisin at i-setup ang Google Sheet na may modern Section at In/Out headers
  try {
    var ss = getSpreadsheet_();
    var sheet = ss.getSheetByName("Library_Logs");
    if (sheet) {
      sheet.clear();
      var headers = [
        "Timestamp",
        "Record ID",
        "Student ID",
        "Student Name",
        "Section",
        "Purpose",
        "Book Title / Material",
        "Status",
        "Time In",
        "Time Out",
        "Duration",
        "Location Verification",
        "Student Selfie (Drive)",
        "Book Photo (Drive)",
        "Librarian Signature (Drive)",
        "Official Card Pass (Drive)",
        "Librarian In-Charge",
        "Client IP Address"
      ];
      sheet.appendRow(headers);
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold")
        .setBackground("#1e40af")
        .setFontColor("#ffffff")
        .setFontSize(10)
        .setHorizontalAlignment("center")
        .setVerticalAlignment("middle");
      sheet.setRowHeight(1, 35);
      sheet.setFrozenRows(1);
      Logger.log("✓ Google Sheet: Cleared and refreshed with clean headers (Section & Time In/Out).");
    }
  } catch (sheetErr) {
    Logger.log("Error cleaning sheet: " + sheetErr.toString());
  }

  // 2. Linisin ang Google Drive Folder
  try {
    var mainFolder = getMainDriveFolder_();
    if (mainFolder) {
      // Burahin ang mga subfolder sa loob
      var subfolders = mainFolder.getFolders();
      var folderCount = 0;
      while (subfolders.hasNext()) {
        var sub = subfolders.next();
        sub.setTrashed(true);
        folderCount++;
      }

      // Burahin ang anumang files sa loob
      var files = mainFolder.getFiles();
      var fileCount = 0;
      while (files.hasNext()) {
        var f = files.next();
        f.setTrashed(true);
        fileCount++;
      }
      Logger.log("✓ Google Drive: " + folderCount + " folder(s) and " + fileCount + " file(s) moved to trash.");
    }
  } catch (driveErr) {
    Logger.log("Error cleaning drive: " + driveErr.toString());
  }

  Logger.log("🎉 ALL DRIVE MEDIA AND SHEET ROWS HAVE BEEN COMPLETELY CLEANED!");
}
