# Mob Dev 1 Practical Exam: CampusVibe Social Media App 📱✨
**Subtitle:** Welcome Splash ➔ Campus Feed ➔ Create Post ➔ Student Profile  
**Target Environment:** Android Studio Arctic Fox (2020.3.1)  
**Language:** Kotlin | **UI:** XML Layouts & Traditional Activities | **Architecture:** Static UI Navigation (Zero Database Required)  
**Package Name:** `com.example.campusvibe`

---

## 🧸 The 3 Golden Rules (Read First!)

Follow this **every single time** you paste code into a file:

1. **Rule 1 (ERASE FIRST):** Open the file, press **`Ctrl + A`** (select all), then press **Backspace / Delete**. The file should be completely empty and white!
2. **Rule 2 (COPY):** Copy the full code block from this manual.
3. **Rule 3 (PASTE):** Press **`Ctrl + V`** to paste. Never paste code inside other code!

> 💡 **Don't Worry About Red Words Yet!**  
> If Android Studio shows red lines under `FeedActivity`, `CreatePostActivity`, or `ProfileActivity`, **do NOT panic!**  
> That is normal until you build those Activities in Steps 3, 4, and 5.

---

## 🗺️ How Our Social Media App Flows (The 4 Screens)

```
[ Screen 1: Welcome Splash ] ─────► [ Screen 2: Campus Feed ] ◄────► [ Screen 3: Create Post ]
              │                               ▲
              ▼                               │
[ Screen 4: Student Profile ] ────────────────┘
```

1. **Welcome Screen (`MainActivity`)**: App vector logo, title, slogan, and buttons to explore feed or view profile.
2. **Campus Feed (`FeedActivity`)**: Scrollable community timeline with trending chips, interactive post cards, and like toasts.
3. **Create Post (`CreatePostActivity`)**: Post composer form with title input, channel selector, and multi-line caption.
4. **Student Profile (`ProfileActivity`)**: Student stats (Posts, Followers, Vibes), badges, bio card, and logout action.

---

## 🛠️ Step 0: Create the Project

1. Open **Android Studio Arctic Fox (2020.3.1)**.
2. Click **New Project** (or `File > New > New Project`).
3. Click **Phone and Tablet**, select **Empty Activity**, and click **Next**.
4. Fill in these exact details:
   - **Name:** `CampusVibe`
   - **Package name:** `com.example.campusvibe`
   - **Language:** **Kotlin** *(do not choose Java!)*
   - **Minimum SDK:** **API 21: Android 5.0 (Lollipop)**
5. Click **Finish**.
6. Wait 1 to 2 minutes until the bottom status bar says **"BUILD SUCCESSFUL"**.

---

## 🎨 Step 1: Set Up Colors, Text, and App Logo

### 1.1 Colors (`colors.xml`)
- **Where to go:** In the left panel, click: `app` ➔ `res` ➔ `values` ➔ double-click **`colors.xml`**
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- CampusVibe Social Media Theme Palette -->
    <color name="primary_indigo">#6366F1</color>
    <color name="primary_indigo_dark">#4F46E5</color>
    <color name="accent_pink">#EC4899</color>
    <color name="accent_emerald">#10B981</color>
    <color name="accent_amber">#F59E0B</color>
    <color name="bg_canvas">#F8FAFC</color>
    <color name="surface_white">#FFFFFF</color>
    <color name="card_subtle">#EEF2FF</color>
    <color name="border_light">#CBD5E1</color>
    <color name="text_headline">#0F172A</color>
    <color name="text_muted">#64748B</color>
    <color name="text_danger">#EF4444</color>
</resources>
```

---

### 1.2 Text Labels (`strings.xml`)
- **Where to go:** Double-click: `app` ➔ `res` ➔ `values` ➔ **`strings.xml`**
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<resources>
    <string name="app_name">CampusVibe</string>
    <string name="welcome_title">CampusVibe</string>
    <string name="welcome_tagline">Connect. Share. Vibe with your campus peers.</string>
    <string name="btn_enter_feed">EXPLORE CAMPUS FEED</string>
    <string name="btn_view_profile">MY STUDENT PROFILE</string>
</resources>
```

---

### 1.3 Rounded Card Shape (`rounded_card.xml`)
- **How to create:** Right-click folder `drawable` (`app` ➔ `res` ➔ `drawable`) ➔ **New** ➔ **Drawable Resource File**.
- **File name:** Type `rounded_card.xml` and click **OK**.
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <solid android:color="@color/surface_white" />
    <stroke android:width="1.5dp" android:color="@color/border_light" />
    <corners android:radius="14dp" />
</shape>
```

---

### 1.4 Input Border Shape (`edit_text_border.xml`)
- **How to create:** Right-click folder `drawable` ➔ **New** ➔ **Drawable Resource File**.
- **File name:** Type `edit_text_border.xml` and click **OK**.
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <solid android:color="@color/surface_white" />
    <stroke android:width="1.5dp" android:color="@color/border_light" />
    <corners android:radius="10dp" />
</shape>
```

---

### 1.5 App Vector Logo (`logo.xml`)
- **How to create:** Right-click folder `drawable` ➔ **New** ➔ **Drawable Resource File**.
- **File name:** Type `logo.xml` and click **OK**.
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="96dp"
    android:height="96dp"
    android:viewportWidth="24"
    android:viewportHeight="24">
    <!-- Modern Social Chat / Spark Bubble Logo -->
    <path
        android:fillColor="#6366F1"
        android:pathData="M20,2H4C2.9,2 2,2.9 2,4V22L6,18H20C21.1,18 22,17.1 22,16V4C22,2.9 21.1,2 20,2M12,6L13.5,9.5L17,11L13.5,12.5L12,16L10.5,12.5L7,11L10.5,9.5L12,6Z" />
</vector>
```

---

## 🏠 Step 2: Screen 1 — Welcome Splash (`MainActivity`)

### 2.1 Layout Design (`activity_main.xml`)
- **Where to go:** Click `app` ➔ `res` ➔ `layout` ➔ double-click **`activity_main.xml`**
- **Action:** Click **Code** or **Split** in the top right. Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="28dp"
    android:background="@color/bg_canvas">

    <ImageView
        android:layout_width="110dp"
        android:layout_height="110dp"
        android:src="@drawable/logo"
        android:contentDescription="CampusVibe Logo" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/welcome_title"
        android:textSize="32sp"
        android:textStyle="bold"
        android:textColor="@color/primary_indigo_dark"
        android:layout_marginTop="16dp" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Mob Dev 1 Practical Exam • Arctic Fox"
        android:textSize="12sp"
        android:textStyle="bold"
        android:textColor="@color/primary_indigo"
        android:background="@color/card_subtle"
        android:paddingStart="12dp"
        android:paddingEnd="12dp"
        android:paddingTop="4dp"
        android:paddingBottom="4dp"
        android:layout_marginTop="8dp" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/welcome_tagline"
        android:textSize="14sp"
        android:textColor="@color/text_muted"
        android:textAlignment="center"
        android:layout_marginTop="14dp"
        android:layout_marginBottom="36dp" />

    <Button
        android:id="@+id/btnEnterFeed"
        android:layout_width="match_parent"
        android:layout_height="56dp"
        android:text="@string/btn_enter_feed"
        android:textSize="14sp"
        android:textStyle="bold"
        android:backgroundTint="@color/primary_indigo"
        android:textColor="@color/surface_white" />

    <Button
        android:id="@+id/btnGoProfile"
        android:layout_width="match_parent"
        android:layout_height="56dp"
        android:text="@string/btn_view_profile"
        android:textSize="14sp"
        android:textStyle="bold"
        android:backgroundTint="@color/surface_white"
        android:textColor="@color/primary_indigo_dark"
        android:layout_marginTop="12dp" />

</LinearLayout>
```

### 2.2 Kotlin Navigation Logic (`MainActivity.kt`)
- **Where to go:** Click `app` ➔ `java` ➔ `com.example.campusvibe` ➔ double-click **`MainActivity.kt`**
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```kotlin
package com.example.campusvibe

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnEnterFeed = findViewById<Button>(R.id.btnEnterFeed)
        val btnGoProfile = findViewById<Button>(R.id.btnGoProfile)

        // 1. Tapping EXPLORE FEED navigates to FeedActivity
        btnEnterFeed.setOnClickListener {
            Toast.makeText(this, "Opening Campus Feed...", Toast.LENGTH_SHORT).show()
            val intent = Intent(this, FeedActivity::class.java)
            startActivity(intent)
        }

        // 2. Tapping MY STUDENT PROFILE navigates to ProfileActivity
        btnGoProfile.setOnClickListener {
            val intent = Intent(this, ProfileActivity::class.java)
            startActivity(intent)
        }
    }
}
```

---

## 📰 Step 3: Screen 2 — Campus Social Feed (`FeedActivity`)

### 3.1 Create Activity
- In the left panel, right-click `com.example.campusvibe` ➔ **New** ➔ **Activity** ➔ **Empty Activity**.
- Activity Name: `FeedActivity`.
- Click **Finish**.

### 3.2 Layout Design (`activity_feed.xml`)
- **Where to go:** Double-click `app` ➔ `res` ➔ `layout` ➔ **`activity_feed.xml`**
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/bg_canvas">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="18dp">

        <!-- Top Header Bar -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:gravity="center_vertical"
            android:layout_marginBottom="16dp">

            <LinearLayout
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_weight="1"
                android:orientation="vertical">

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="CampusVibe Feed"
                    android:textSize="22sp"
                    android:textStyle="bold"
                    android:textColor="@color/primary_indigo_dark" />

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="Latest stories and updates"
                    android:textSize="12sp"
                    android:textColor="@color/text_muted" />
            </LinearLayout>

            <Button
                android:id="@+id/btnHeaderNewPost"
                android:layout_width="wrap_content"
                android:layout_height="40dp"
                android:text="+ POST"
                android:textSize="12sp"
                android:textStyle="bold"
                android:backgroundTint="@color/accent_pink"
                android:textColor="@color/surface_white" />
        </LinearLayout>

        <!-- Trending Topics Chips -->
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="TRENDING TOPICS"
            android:textSize="11sp"
            android:textStyle="bold"
            android:textColor="@color/text_muted"
            android:layout_marginBottom="8dp" />

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:layout_marginBottom="18dp">

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="#Hackathon2026"
                android:textSize="12sp"
                android:textStyle="bold"
                android:textColor="@color/primary_indigo"
                android:background="@drawable/rounded_card"
                android:paddingStart="12dp"
                android:paddingEnd="12dp"
                android:paddingTop="6dp"
                android:paddingBottom="6dp"
                android:layout_marginEnd="8dp" />

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="#TechExpo"
                android:textSize="12sp"
                android:textStyle="bold"
                android:textColor="@color/accent_pink"
                android:background="@drawable/rounded_card"
                android:paddingStart="12dp"
                android:paddingEnd="12dp"
                android:paddingTop="6dp"
                android:paddingBottom="6dp"
                android:layout_marginEnd="8dp" />

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="#CS_Club"
                android:textSize="12sp"
                android:textStyle="bold"
                android:textColor="@color/accent_emerald"
                android:background="@drawable/rounded_card"
                android:paddingStart="12dp"
                android:paddingEnd="12dp"
                android:paddingTop="6dp"
                android:paddingBottom="6dp" />
        </LinearLayout>

        <!-- POST CARD 1 -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:background="@drawable/rounded_card"
            android:padding="16dp"
            android:layout_marginBottom="14dp">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:gravity="center_vertical"
                android:layout_marginBottom="10dp">

                <TextView
                    android:layout_width="40dp"
                    android:layout_height="40dp"
                    android:text="ML"
                    android:gravity="center"
                    android:textStyle="bold"
                    android:textColor="@color/surface_white"
                    android:background="@color/primary_indigo" />

                <LinearLayout
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:orientation="vertical"
                    android:layout_marginStart="10dp">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Maya Lin"
                        android:textStyle="bold"
                        android:textColor="@color/text_headline"
                        android:textSize="14sp" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="BSCS • 15m ago"
                        android:textColor="@color/text_muted"
                        android:textSize="11sp" />
                </LinearLayout>
            </LinearLayout>

            <TextView
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="Just finished our 2D Godot &amp; Android prototype for the University Tech Expo! 🎮🚀 Who wants to playtest and give feedback?"
                android:textColor="@color/text_body"
                android:textSize="13sp"
                android:lineSpacingExtra="3dp"
                android:layout_marginBottom="12dp" />

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal">

                <Button
                    android:id="@+id/btnLikePost1"
                    android:layout_width="0dp"
                    android:layout_height="38dp"
                    android:layout_weight="1"
                    android:text="❤️ LIKE (24)"
                    android:textSize="11sp"
                    android:textStyle="bold"
                    android:backgroundTint="@color/card_subtle"
                    android:textColor="@color/primary_indigo_dark"
                    android:layout_marginEnd="6dp" />

                <Button
                    android:id="@+id/btnCommentPost1"
                    android:layout_width="0dp"
                    android:layout_height="38dp"
                    android:layout_weight="1"
                    android:text="💬 COMMENT"
                    android:textSize="11sp"
                    android:textStyle="bold"
                    android:backgroundTint="@color/card_subtle"
                    android:textColor="@color/text_muted" />
            </LinearLayout>
        </LinearLayout>

        <!-- POST CARD 2 -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:background="@drawable/rounded_card"
            android:padding="16dp"
            android:layout_marginBottom="24dp">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:gravity="center_vertical"
                android:layout_marginBottom="10dp">

                <TextView
                    android:layout_width="40dp"
                    android:layout_height="40dp"
                    android:text="DK"
                    android:gravity="center"
                    android:textStyle="bold"
                    android:textColor="@color/surface_white"
                    android:background="@color/accent_pink" />

                <LinearLayout
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:orientation="vertical"
                    android:layout_marginStart="10dp">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Dave K."
                        android:textStyle="bold"
                        android:textColor="@color/text_headline"
                        android:textSize="14sp" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="BSIT • 1 hour ago"
                        android:textColor="@color/text_muted"
                        android:textSize="11sp" />
                </LinearLayout>
            </LinearLayout>

            <TextView
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="Friendly reminder: The Android Studio Arctic Fox Practical Exam is happening today! Make sure your Kotlin layouts compile with zero errors. Good luck everyone! 💻⚡"
                android:textColor="@color/text_body"
                android:textSize="13sp"
                android:lineSpacingExtra="3dp"
                android:layout_marginBottom="12dp" />

            <Button
                android:id="@+id/btnLikePost2"
                android:layout_width="match_parent"
                android:layout_height="38dp"
                android:text="❤️ LIKE (58)"
                android:textSize="11sp"
                android:textStyle="bold"
                android:backgroundTint="@color/card_subtle"
                android:textColor="@color/primary_indigo_dark" />
        </LinearLayout>

        <!-- Bottom Navigation Buttons -->
        <Button
            android:id="@+id/btnOpenProfile"
            android:layout_width="match_parent"
            android:layout_height="50dp"
            android:text="VIEW MY STUDENT PROFILE"
            android:textSize="13sp"
            android:textStyle="bold"
            android:backgroundTint="@color/primary_indigo"
            android:textColor="@color/surface_white"
            android:layout_marginBottom="10dp" />

        <Button
            android:id="@+id/btnBackToWelcome"
            android:layout_width="match_parent"
            android:layout_height="48dp"
            android:text="← BACK TO WELCOME SCREEN"
            android:textSize="12sp"
            android:textStyle="bold"
            android:backgroundTint="@color/surface_white"
            android:textColor="@color/text_muted" />

    </LinearLayout>
</ScrollView>
```

### 3.3 Kotlin Navigation Logic (`FeedActivity.kt`)
- **Where to go:** Double-click `FeedActivity.kt`
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```kotlin
package com.example.campusvibe

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class FeedActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_feed)

        val btnHeaderNewPost = findViewById<Button>(R.id.btnHeaderNewPost)
        val btnLikePost1 = findViewById<Button>(R.id.btnLikePost1)
        val btnCommentPost1 = findViewById<Button>(R.id.btnCommentPost1)
        val btnLikePost2 = findViewById<Button>(R.id.btnLikePost2)
        val btnOpenProfile = findViewById<Button>(R.id.btnOpenProfile)
        val btnBackToWelcome = findViewById<Button>(R.id.btnBackToWelcome)

        // 1. Tapping + POST opens CreatePostActivity
        btnHeaderNewPost.setOnClickListener {
            val intent = Intent(this, CreatePostActivity::class.java)
            startActivity(intent)
        }

        // 2. Interactive like button toasts
        btnLikePost1.setOnClickListener {
            Toast.makeText(this, "Liked Maya's project post! ❤️", Toast.LENGTH_SHORT).show()
        }

        btnCommentPost1.setOnClickListener {
            Toast.makeText(this, "Comments section opened", Toast.LENGTH_SHORT).show()
        }

        btnLikePost2.setOnClickListener {
            Toast.makeText(this, "Liked exam reminder! 💻", Toast.LENGTH_SHORT).show()
        }

        // 3. Tapping VIEW MY STUDENT PROFILE navigates to ProfileActivity
        btnOpenProfile.setOnClickListener {
            val intent = Intent(this, ProfileActivity::class.java)
            startActivity(intent)
        }

        // 4. Return to Welcome Screen
        btnBackToWelcome.setOnClickListener {
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
            finish()
        }
    }
}
```

---

## 📝 Step 4: Screen 3 — Create Post (`CreatePostActivity`)

### 4.1 Create Activity
- Right-click `com.example.campusvibe` ➔ **New** ➔ **Activity** ➔ **Empty Activity**.
- Activity Name: `CreatePostActivity`.
- Click **Finish**.

### 4.2 Layout Design (`activity_create_post.xml`)
- **Where to go:** Double-click `activity_create_post.xml`
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/bg_canvas">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="24dp">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Share to CampusVibe"
            android:textSize="24sp"
            android:textStyle="bold"
            android:textColor="@color/primary_indigo_dark" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Post an announcement, question, or campus vibe"
            android:textSize="13sp"
            android:textColor="@color/text_muted"
            android:layout_marginBottom="24dp" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="POST TITLE"
            android:textSize="12sp"
            android:textStyle="bold"
            android:textColor="@color/text_headline"
            android:layout_marginBottom="6dp" />

        <EditText
            android:id="@+id/etPostTitle"
            android:layout_width="match_parent"
            android:layout_height="50dp"
            android:hint="e.g., Hackathon Team Recruitment"
            android:textSize="14sp"
            android:padding="12dp"
            android:background="@drawable/edit_text_border"
            android:layout_marginBottom="16dp" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="SELECT CHANNEL"
            android:textSize="12sp"
            android:textStyle="bold"
            android:textColor="@color/text_headline"
            android:layout_marginBottom="6dp" />

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:layout_marginBottom="16dp">

            <Button
                android:layout_width="0dp"
                android:layout_height="38dp"
                android:layout_weight="1"
                android:text="🎓 ACADEMIC"
                android:textSize="10sp"
                android:textStyle="bold"
                android:backgroundTint="@color/primary_indigo"
                android:textColor="@color/surface_white"
                android:layout_marginEnd="6dp" />

            <Button
                android:layout_width="0dp"
                android:layout_height="38dp"
                android:layout_weight="1"
                android:text="🏆 EVENTS"
                android:textSize="10sp"
                android:textStyle="bold"
                android:backgroundTint="@color/card_subtle"
                android:textColor="@color/text_muted"
                android:layout_marginEnd="6dp" />

            <Button
                android:layout_width="0dp"
                android:layout_height="38dp"
                android:layout_weight="1"
                android:text="💬 SOCIAL"
                android:textSize="10sp"
                android:textStyle="bold"
                android:backgroundTint="@color/card_subtle"
                android:textColor="@color/text_muted" />
        </LinearLayout>

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="WHAT'S ON YOUR MIND?"
            android:textSize="12sp"
            android:textStyle="bold"
            android:textColor="@color/text_headline"
            android:layout_marginBottom="6dp" />

        <EditText
            android:id="@+id/etPostContent"
            android:layout_width="match_parent"
            android:layout_height="120dp"
            android:hint="Type your message, questions, or ideas here..."
            android:gravity="top|start"
            android:textSize="14sp"
            android:padding="12dp"
            android:background="@drawable/edit_text_border"
            android:layout_marginBottom="28dp" />

        <Button
            android:id="@+id/btnPublishPost"
            android:layout_width="match_parent"
            android:layout_height="54dp"
            android:text="PUBLISH TO CAMPUS FEED"
            android:textSize="14sp"
            android:textStyle="bold"
            android:backgroundTint="@color/accent_pink"
            android:textColor="@color/surface_white"
            android:layout_marginBottom="12dp" />

        <Button
            android:id="@+id/btnCancelPost"
            android:layout_width="match_parent"
            android:layout_height="48dp"
            android:text="CANCEL &amp; DISCARD"
            android:textSize="13sp"
            android:textStyle="bold"
            android:backgroundTint="@color/surface_white"
            android:textColor="@color/text_danger" />

    </LinearLayout>
</ScrollView>
```

### 4.3 Kotlin Navigation Logic (`CreatePostActivity.kt`)
- **Where to go:** Double-click `CreatePostActivity.kt`
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```kotlin
package com.example.campusvibe

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class CreatePostActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create_post)

        val btnPublish = findViewById<Button>(R.id.btnPublishPost)
        val btnCancel = findViewById<Button>(R.id.btnCancelPost)

        // 1. Tapping PUBLISH shows toast and returns to Feed
        btnPublish.setOnClickListener {
            Toast.makeText(this, "Post published to CampusVibe! 🎉", Toast.LENGTH_SHORT).show()
            val intent = Intent(this, FeedActivity::class.java)
            startActivity(intent)
            finish()
        }

        // 2. Tapping CANCEL returns to Feed
        btnCancel.setOnClickListener {
            Toast.makeText(this, "Post discarded", Toast.LENGTH_SHORT).show()
            val intent = Intent(this, FeedActivity::class.java)
            startActivity(intent)
            finish()
        }
    }
}
```

---

## 👤 Step 5: Screen 4 — Student Profile (`ProfileActivity`)

### 5.1 Create Activity
- Right-click `com.example.campusvibe` ➔ **New** ➔ **Activity** ➔ **Empty Activity**.
- Activity Name: `ProfileActivity`.
- Click **Finish**.

### 5.2 Layout Design (`activity_profile.xml`)
- **Where to go:** Double-click `activity_profile.xml`
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/bg_canvas">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="20dp">

        <!-- Profile Header Card -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:gravity="center"
            android:background="@drawable/rounded_card"
            android:padding="24dp"
            android:layout_marginBottom="18dp">

            <TextView
                android:layout_width="72dp"
                android:layout_height="72dp"
                android:text="AR"
                android:textSize="24sp"
                android:textStyle="bold"
                android:textColor="@color/surface_white"
                android:gravity="center"
                android:background="@color/primary_indigo"
                android:layout_marginBottom="12dp" />

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Alex Rivera"
                android:textSize="20sp"
                android:textStyle="bold"
                android:textColor="@color/text_headline" />

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="BS Information Technology • 3rd Year"
                android:textSize="12sp"
                android:textColor="@color/primary_indigo_dark"
                android:layout_marginTop="2dp" />

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Student ID: 2023-IT-0492"
                android:textSize="11sp"
                android:textColor="@color/text_muted"
                android:layout_marginTop="2dp"
                android:layout_marginBottom="14dp" />

            <!-- Stats Grid -->
            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:background="@color/card_subtle"
                android:padding="12dp"
                android:gravity="center">

                <LinearLayout
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:gravity="center"
                    android:orientation="vertical">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="18"
                        android:textSize="16sp"
                        android:textStyle="bold"
                        android:textColor="@color/text_headline" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="POSTS"
                        android:textSize="10sp"
                        android:textColor="@color/text_muted" />
                </LinearLayout>

                <LinearLayout
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:gravity="center"
                    android:orientation="vertical">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="342"
                        android:textSize="16sp"
                        android:textStyle="bold"
                        android:textColor="@color/text_headline" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="FOLLOWERS"
                        android:textSize="10sp"
                        android:textColor="@color/text_muted" />
                </LinearLayout>

                <LinearLayout
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:gravity="center"
                    android:orientation="vertical">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="1.2k"
                        android:textSize="16sp"
                        android:textStyle="bold"
                        android:textColor="@color/accent_pink" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="VIBES"
                        android:textSize="10sp"
                        android:textColor="@color/text_muted" />
                </LinearLayout>
            </LinearLayout>
        </LinearLayout>

        <!-- Student Bio Card -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:background="@drawable/rounded_card"
            android:padding="18dp"
            android:layout_marginBottom="18dp">

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="ABOUT ME"
                android:textSize="12sp"
                android:textStyle="bold"
                android:textColor="@color/text_headline"
                android:layout_marginBottom="6dp" />

            <TextView
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="Passionate student programmer exploring native Kotlin in Android Studio Arctic Fox. Always ready for hackathons and coffee! ☕💻"
                android:textSize="13sp"
                android:textColor="@color/text_body"
                android:lineSpacingExtra="3dp" />
        </LinearLayout>

        <!-- Action Buttons -->
        <Button
            android:id="@+id/btnBackToFeed"
            android:layout_width="match_parent"
            android:layout_height="52dp"
            android:text="BACK TO CAMPUS FEED"
            android:textSize="13sp"
            android:textStyle="bold"
            android:backgroundTint="@color/primary_indigo"
            android:textColor="@color/surface_white"
            android:layout_marginBottom="10dp" />

        <Button
            android:id="@+id/btnEditProfile"
            android:layout_width="match_parent"
            android:layout_height="48dp"
            android:text="EDIT PROFILE SETTINGS"
            android:textSize="12sp"
            android:textStyle="bold"
            android:backgroundTint="@color/surface_white"
            android:textColor="@color/primary_indigo_dark"
            android:layout_marginBottom="10dp" />

        <Button
            android:id="@+id/btnLogoutProfile"
            android:layout_width="match_parent"
            android:layout_height="48dp"
            android:text="LOG OUT &amp; EXIT"
            android:textSize="12sp"
            android:textStyle="bold"
            android:backgroundTint="@color/surface_white"
            android:textColor="@color/text_danger" />

    </LinearLayout>
</ScrollView>
```

### 5.3 Kotlin Navigation Logic (`ProfileActivity.kt`)
- **Where to go:** Double-click `ProfileActivity.kt`
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```kotlin
package com.example.campusvibe

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class ProfileActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_profile)

        val btnBackToFeed = findViewById<Button>(R.id.btnBackToFeed)
        val btnEditProfile = findViewById<Button>(R.id.btnEditProfile)
        val btnLogout = findViewById<Button>(R.id.btnLogoutProfile)

        // 1. Tapping BACK TO CAMPUS FEED navigates to FeedActivity
        btnBackToFeed.setOnClickListener {
            val intent = Intent(this, FeedActivity::class.java)
            startActivity(intent)
            finish()
        }

        // 2. Tapping EDIT PROFILE displays simulated action toast
        btnEditProfile.setOnClickListener {
            Toast.makeText(this, "Profile settings clicked", Toast.LENGTH_SHORT).show()
        }

        // 3. Tapping LOG OUT returns to Welcome Splash screen
        btnLogout.setOnClickListener {
            Toast.makeText(this, "Logged out of CampusVibe", Toast.LENGTH_SHORT).show()
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
            finish()
        }
    }
}
```

---

## ⚙️ Step 6: Verify `AndroidManifest.xml`

- **Where to go:** `app` ➔ `manifests` ➔ **`AndroidManifest.xml`**
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.campusvibe">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.CampusVibe">

        <!-- Screen 1: Welcome Splash (Default Launcher) -->
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <!-- Screen 2: Campus Feed -->
        <activity
            android:name=".FeedActivity"
            android:exported="false" />

        <!-- Screen 3: Create Post -->
        <activity
            android:name=".CreatePostActivity"
            android:exported="false" />

        <!-- Screen 4: Student Profile -->
        <activity
            android:name=".ProfileActivity"
            android:exported="false" />

    </application>

</manifest>
```

---

## 🎯 Step 7: Run and Test Your App!

1. Select your target device / emulator in the top toolbar.
2. Click the green **Run** button (<kbd>▶</kbd>) or press **Shift + F10**.
3. Verify navigation between all 4 screens:
   - **Welcome** ➔ Click "EXPLORE CAMPUS FEED" ➔ Opens **Feed**.
   - **Feed** ➔ Click "+ POST" ➔ Opens **Create Post**.
   - **Create Post** ➔ Click "PUBLISH" ➔ Shows Toast & returns to **Feed**.
   - **Feed** ➔ Click "VIEW MY STUDENT PROFILE" ➔ Opens **Profile**.
   - **Profile** ➔ Click "LOG OUT & EXIT" ➔ Returns to **Welcome**.

