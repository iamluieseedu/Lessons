/**
 * ============================================================================
 * 📚 OFFICIAL DIGITAL LIBRARY ATTENDANCE SYSTEM (GOOGLE DRIVE & SHEETS)
 * Version: 3.5 (Production Ready - Full Media Drive Sync & Clickable Links)
 * ============================================================================
 * 
 * SPREADSHEET URL:
 * https://docs.google.com/spreadsheets/d/16ntBPPdctHxaBggT3iK2lZDAVIz63C_hobln0vwkv78/edit
 */

// Iyong Google Sheet ID:
var SPREADSHEET_ID = "16ntBPPdctHxaBggT3iK2lZDAVIz63C_hobln0vwkv78";

/**
 * Health check endpoint kapag binuksan sa browser o sinubukan ng system
 */
function doGet(e) {
  try {
    var ss = getSpreadsheet_();
    return ContentService.createTextOutput(JSON.stringify({
      status: "online",
      message: "✓ Google Apps Script is LIVE, connected to Google Drive & Sheets!",
      spreadsheetUrl: ss.getUrl(),
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
 */
function doPost(e) {
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

    // 1. Kumuha o mag-set up ng Google Sheet Tab
    var ss = getSpreadsheet_();
    var sheet = ss.getSheetByName("Library_Logs");
    if (!sheet) {
      sheet = ss.insertSheet("Library_Logs");
      var headers = [
        "Timestamp",
        "Record ID",
        "Student ID",
        "Student Name",
        "Grade & Section",
        "Purpose",
        "Book Title / Material",
        "Time In",
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

    // 2. I-set up ang Organised Folders sa Google Drive
    var mainFolder = getOrCreateFolder_("Campus_Library_Records");
    var todayStr = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || "GMT+8", "yyyy-MM-dd");
    var todayFolder = getOrCreateFolder_(todayStr, mainFolder);

    var selfieFolder = getOrCreateFolder_("Selfies", todayFolder);
    var bookFolder = getOrCreateFolder_("Book_Photos", todayFolder);
    var sigFolder = getOrCreateFolder_("Signatures", todayFolder);
    var cardFolder = getOrCreateFolder_("Digital_Cards", todayFolder);

    var studentClean = (data.studentId || "student").toString().replace(/[^a-zA-Z0-9_-]/g, "_");
    var timestampId = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || "GMT+8", "HHmmss");
    var prefix = studentClean + "_" + timestampId;

    // 3. I-save ang mga Litrato at Lagda sa Google Drive
    var selfieUrl = saveBase64Image_(selfieFolder, data.selfiePhotoBase64, prefix + "_selfie.jpg", "image/jpeg");
    var bookUrl = saveBase64Image_(bookFolder, data.bookPhotoBase64, prefix + "_book.jpg", "image/jpeg");
    var signatureUrl = saveBase64Image_(sigFolder, data.librarianSignatureBase64, prefix + "_signature.png", "image/png");
    var cardUrl = saveBase64Image_(cardFolder, data.digitalCardBase64, prefix + "_card_pass.png", "image/png");

    // 4. I-format ang Clickable Links para sa Google Sheet
    var selfieCell = selfieUrl ? '=HYPERLINK("' + selfieUrl + '", "📸 View Selfie")' : "None";
    var bookCell = bookUrl ? '=HYPERLINK("' + bookUrl + '", "📖 View Book")' : "None";
    var sigCell = signatureUrl ? '=HYPERLINK("' + signatureUrl + '", "✍️ View Signature")' : "None";
    var cardCell = cardUrl ? '=HYPERLINK("' + cardUrl + '", "🪪 View Card Pass")' : "None";

    // 5. I-record ang Row sa Google Sheet
    var newRow = [
      new Date(),
      data.id || ("CARD-" + timestampId),
      data.studentId || "",
      data.studentName || "",
      data.gradeSection || "",
      (data.purpose || "borrow").toString().toUpperCase(),
      data.bookTitle || "",
      data.timeIn ? new Date(data.timeIn).toLocaleString() : new Date().toLocaleString(),
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
      spreadsheetUrl: ss.getUrl(),
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
  }
}

/**
 * Helper para mag-save ng Base64 Image papuntang Google Drive File
 */
function saveBase64Image_(folder, base64Data, filename, mimeType) {
  if (!base64Data || typeof base64Data !== 'string' || base64Data.length < 30) {
    return "";
  }
  try {
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
 * Helper para kumuha o gumawa ng subfolder sa Google Drive
 */
function getOrCreateFolder_(folderName, parentFolder) {
  var parent = parentFolder || DriveApp.getRootFolder();
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
