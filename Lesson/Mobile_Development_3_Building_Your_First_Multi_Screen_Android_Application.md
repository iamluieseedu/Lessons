# Mobile Development Lab 3: Build Your First Multi-Screen App 📱✨
**Subtitle:** Welcome Screen ➔ Login ➔ Sign Up ➔ Dashboard  
**Made For:** Absolute Beginners & Students (Super Easy 1-2-3 Step Guide!)  
**Target Environment:** Android Studio Arctic Fox (2020.3.1)  
**Language:** Kotlin | **UI:** XML Layouts & Traditional Activities | **Binding:** `findViewById`

---

## 🧸 The 3 Golden Rules of Copy & Pasting (Read First!)

Follow this **every single time** you paste code into a file:

1. **Rule 1 (ERASE FIRST):** Open the file, press **`Ctrl + A`** (select all), then press **Backspace / Delete**. The file should be completely empty and white!
2. **Rule 2 (COPY):** Copy the full code block from this manual.
3. **Rule 3 (PASTE):** Press **`Ctrl + V`** to paste. Never paste code inside other code!

> 💡 **Don't Worry About Red Words Yet!**  
> If Android Studio shows red lines under `DashboardActivity` or `LoginActivity`, **do NOT panic!**  
> That is completely normal because you haven't created those screens yet. The red will disappear once you build them in Steps 3, 4, and 5!

---

## 🗺️ How Our App Flows (The 4 Screens)

```
[ Screen 1: Welcome ] ────► [ Screen 2: Login ] ────► [ Screen 4: Dashboard ]
         │                            ▲                       ▲
         ▼                            │                       │
[ Screen 3: Sign Up ] ────────────────┘───────────────────────┘
```

1. **Welcome Screen (`MainActivity`)**: Has the logo, app title, and buttons to enter or choose a screen.
2. **Login Screen (`LoginActivity`)**: Type username `admin` and password `1234` to enter!
3. **Sign Up Screen (`SignUpActivity`)**: Type your name, email, and password to create an account.
4. **Dashboard (`DashboardActivity`)**: Shows your name greeting ("Welcome, [Name]!") and student cards.

---

## 🛠️ Step 0: Create the Project

1. Open **Android Studio**.
2. Click **New Project** (or `File > New > New Project`).
3. Click **Phone and Tablet**, select **Empty Activity**, and click **Next**.
4. Fill in these exact details:
   - **Name:** `CampusConnect`
   - **Package name:** `com.example.campusconnect`
   - **Language:** **Kotlin** *(do not choose Java!)*
   - **Minimum SDK:** **API 21: Android 5.0 (Lollipop)**
5. Click **Finish**.
6. **Wait 1 to 2 minutes** for Gradle to load until the bottom bar says **"BUILD SUCCESSFUL"**.

---

## 🎨 Step 1: Set Up Colors, Text, and App Logo

### 1.1 Colors (`colors.xml`)
- **Where to go:** In the left panel, click: `app` ➔ `res` ➔ `values` ➔ double-click **`colors.xml`**
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- Beautiful Theme Colors -->
    <color name="primary_blue">#0284C7</color>
    <color name="primary_blue_dark">#0369A1</color>
    <color name="accent_emerald">#10B981</color>
    <color name="bg_canvas">#F8FAFC</color>
    <color name="surface_white">#FFFFFF</color>
    <color name="card_subtle">#F1F5F9</color>
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
    <string name="app_name">CampusConnect</string>
    <string name="welcome_title">CampusConnect</string>
    <string name="welcome_subtitle">Mob Dev 1 Lab • Multi-Screen Learning Portal</string>
    <string name="btn_login_label">LOG IN</string>
    <string name="btn_signup_label">CREATE AN ACCOUNT</string>
</resources>
```

---

### 1.3 Box Outline Shape (`edit_text_border.xml`)
- **How to create:** Right-click the **`drawable`** folder (`app` ➔ `res` ➔ `drawable`) ➔ **New** ➔ **Drawable Resource File**.
- **File name:** Type `edit_text_border.xml` and click **OK**.
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <solid android:color="@color/surface_white" />
    <stroke android:width="1.5dp" android:color="@color/border_light" />
    <corners android:radius="8dp" />
</shape>
```

---

### 1.4 Instant App Logo (`logo.xml`)
> 💡 *No image downloading required! This vector icon creates an instant blue graduation cap logo.*

- **How to create:** Right-click the **`drawable`** folder (`app` ➔ `res` ➔ `drawable`) ➔ **New** ➔ **Drawable Resource File**.
- **File name:** Type `logo.xml` and click **OK**.
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="96dp"
    android:height="96dp"
    android:viewportWidth="24"
    android:viewportHeight="24">
    <!-- Graduation Cap / Student Icon -->
    <path
        android:fillColor="#0284C7"
        android:pathData="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18C5,19.39 8.13,21.18 12,21.18C15.87,21.18 19,19.39 19,17.18V13.18L12,17L5,13.18Z" />
</vector>
```

---

## 🏠 Step 2: Screen 1 — Welcome Screen (`MainActivity`)

### 2.1 Design Layout (`activity_main.xml`)
- **Where to go:** Click `app` ➔ `res` ➔ `layout` ➔ double-click **`activity_main.xml`**
- **Switch to Code View:** Click **Split** or **Code** in the top-right corner.
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="28dp"
    android:background="@color/bg_canvas">

    <!-- App Logo -->
    <ImageView
        android:id="@+id/ivWelcomeLogo"
        android:layout_width="96dp"
        android:layout_height="96dp"
        android:src="@drawable/logo"
        android:contentDescription="CampusConnect Logo"
        android:layout_marginBottom="20dp" />

    <!-- App Title -->
    <TextView
        android:id="@+id/tvWelcomeTitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="CampusConnect"
        android:textSize="28sp"
        android:textStyle="bold"
        android:textColor="@color/text_headline"
        android:layout_marginBottom="8dp" />

    <!-- Subtitle -->
    <TextView
        android:id="@+id/tvWelcomeSubtitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Mob Dev 1 Lab • Multi-Screen Portal"
        android:textSize="14sp"
        android:textColor="@color/text_muted"
        android:gravity="center"
        android:layout_marginBottom="36dp" />

    <!-- Direct Dashboard Button -->
    <Button
        android:id="@+id/btnEnterDashboard"
        android:layout_width="match_parent"
        android:layout_height="52dp"
        android:text="ENTER DASHBOARD"
        android:textSize="14sp"
        android:textStyle="bold"
        android:textColor="@color/surface_white"
        android:backgroundTint="@color/accent_emerald"
        android:layout_marginBottom="12dp" />

    <!-- Login Button -->
    <Button
        android:id="@+id/btnLogin"
        android:layout_width="match_parent"
        android:layout_height="52dp"
        android:text="LOG IN"
        android:textSize="15sp"
        android:textStyle="bold"
        android:textColor="@color/surface_white"
        android:backgroundTint="@color/primary_blue"
        android:layout_marginBottom="12dp" />

    <!-- Sign Up Button -->
    <Button
        android:id="@+id/btnSignUp"
        android:layout_width="match_parent"
        android:layout_height="52dp"
        android:text="CREATE AN ACCOUNT"
        android:textSize="14sp"
        android:textStyle="bold"
        android:textColor="@color/primary_blue"
        android:backgroundTint="@color/surface_white" />

</LinearLayout>
```

---

### 2.2 Brain / Logic Code (`MainActivity.kt`)
- **Where to go:** Click `app` ➔ `java` ➔ `com.example.campusconnect` ➔ double-click **`MainActivity.kt`**
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```kotlin
package com.example.campusconnect

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Find the 3 buttons
        val btnEnterDashboard = findViewById<Button>(R.id.btnEnterDashboard)
        val btnLogin = findViewById<Button>(R.id.btnLogin)
        val btnSignUp = findViewById<Button>(R.id.btnSignUp)

        // 1. Click to go to Dashboard directly
        btnEnterDashboard.setOnClickListener {
            val intent = Intent(this, DashboardActivity::class.java)
            intent.putExtra("USER_NAME", "Guest Student")
            startActivity(intent)
        }

        // 2. Click to open Login screen
        btnLogin.setOnClickListener {
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
        }

        // 3. Click to open Sign Up screen
        btnSignUp.setOnClickListener {
            val intent = Intent(this, SignUpActivity::class.java)
            startActivity(intent)
        }
    }
}
```

> ⚠️ **Note:** `DashboardActivity`, `LoginActivity`, and `SignUpActivity` may show red for a moment. They will turn normal as soon as you create them in Steps 3, 4, and 5!

---

## 🔐 Step 3: Screen 2 — Login Screen (`LoginActivity`)

### 3.1 Create the New Activity in Android Studio
1. In the left panel, find the folder: `app` ➔ `java` ➔ `com.example.campusconnect`.
2. **Right-click** on `com.example.campusconnect`.
3. Choose **New** ➔ **Activity** ➔ **Empty Activity**.
4. Type **Activity Name:** `LoginActivity`.
5. Make sure Language is **Kotlin**. Leave "Launcher Activity" unchecked.
6. Click **Finish**.

---

### 3.2 Design Layout (`activity_login.xml`)
- **Where to go:** `app` ➔ `res` ➔ `layout` ➔ **`activity_login.xml`**
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center_vertical"
    android:padding="28dp"
    android:background="@color/bg_canvas">

    <!-- Screen Title -->
    <TextView
        android:id="@+id/tvLoginTitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Welcome Back"
        android:textSize="26sp"
        android:textStyle="bold"
        android:textColor="@color/text_headline"
        android:layout_marginBottom="6dp" />

    <TextView
        android:id="@+id/tvLoginSubtitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Enter credentials to enter your Dashboard"
        android:textSize="14sp"
        android:textColor="@color/text_muted"
        android:layout_marginBottom="32dp" />

    <!-- Username Input -->
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Username / Email"
        android:textSize="13sp"
        android:textStyle="bold"
        android:textColor="@color/text_headline"
        android:layout_marginBottom="6dp" />

    <EditText
        android:id="@+id/etLoginUsername"
        android:layout_width="match_parent"
        android:layout_height="48dp"
        android:hint="Type 'admin'"
        android:inputType="text"
        android:textSize="14sp"
        android:paddingHorizontal="14dp"
        android:background="@drawable/edit_text_border"
        android:layout_marginBottom="18dp" />

    <!-- Password Input -->
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Password"
        android:textSize="13sp"
        android:textStyle="bold"
        android:textColor="@color/text_headline"
        android:layout_marginBottom="6dp" />

    <EditText
        android:id="@+id/etLoginPassword"
        android:layout_width="match_parent"
        android:layout_height="48dp"
        android:hint="Type '1234'"
        android:inputType="textPassword"
        android:textSize="14sp"
        android:paddingHorizontal="14dp"
        android:background="@drawable/edit_text_border"
        android:layout_marginBottom="28dp" />

    <!-- Login Button -->
    <Button
        android:id="@+id/btnPerformLogin"
        android:layout_width="match_parent"
        android:layout_height="52dp"
        android:text="LOG IN TO DASHBOARD"
        android:textStyle="bold"
        android:textColor="@color/surface_white"
        android:backgroundTint="@color/primary_blue"
        android:layout_marginBottom="16dp" />

    <!-- Switch to Sign Up -->
    <Button
        android:id="@+id/btnGoToSignUp"
        android:layout_width="match_parent"
        android:layout_height="44dp"
        android:text="Don't have an account? Sign Up"
        android:textSize="13sp"
        android:textColor="@color/primary_blue"
        android:backgroundTint="@color/surface_white"
        android:layout_marginBottom="12dp" />

    <!-- Back to Welcome -->
    <Button
        android:id="@+id/btnBackToWelcome"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_horizontal"
        android:text="← Back to Welcome"
        android:textSize="12sp"
        android:textColor="@color/text_muted"
        android:backgroundTint="@android:color/transparent" />

</LinearLayout>
```

---

### 3.3 Brain / Logic Code (`LoginActivity.kt`)
- **Where to go:** `app` ➔ `java` ➔ `com.example.campusconnect` ➔ **`LoginActivity.kt`**
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```kotlin
package com.example.campusconnect

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class LoginActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        val etUsername = findViewById<EditText>(R.id.etLoginUsername)
        val etPassword = findViewById<EditText>(R.id.etLoginPassword)
        val btnLogin = findViewById<Button>(R.id.btnPerformLogin)
        val btnGoToSignUp = findViewById<Button>(R.id.btnGoToSignUp)
        val btnBackToWelcome = findViewById<Button>(R.id.btnBackToWelcome)

        // Login button clicked
        btnLogin.setOnClickListener {
            val username = etUsername.text.toString().trim()
            val password = etPassword.text.toString().trim()

            // 1. Check if empty
            if (username.isEmpty() || password.isEmpty()) {
                Toast.makeText(this, "Please enter both username and password!", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // 2. Demo credentials: admin / 1234
            if (username == "admin" && password == "1234") {
                Toast.makeText(this, "Login successful! Welcome Admin.", Toast.LENGTH_SHORT).show()

                val intent = Intent(this, DashboardActivity::class.java)
                intent.putExtra("USER_NAME", "Administrator")
                startActivity(intent)
                finish()
            } else {
                Toast.makeText(this, "Invalid login! Use: admin and 1234", Toast.LENGTH_LONG).show()
            }
        }

        // Switch to Sign Up
        btnGoToSignUp.setOnClickListener {
            val intent = Intent(this, SignUpActivity::class.java)
            startActivity(intent)
            finish()
        }

        // Back button
        btnBackToWelcome.setOnClickListener {
            finish()
        }
    }
}
```

---

## 📝 Step 4: Screen 3 — Sign Up Screen (`SignUpActivity`)

### 4.1 Create the New Activity in Android Studio
1. Right-click folder `com.example.campusconnect` (`app` ➔ `java` ➔ `com.example.campusconnect`).
2. Select **New** ➔ **Activity** ➔ **Empty Activity**.
3. Name it: `SignUpActivity`.
4. Click **Finish**.

---

### 4.2 Design Layout (`activity_sign_up.xml`)
- **Where to go:** `app` ➔ `res` ➔ `layout` ➔ **`activity_sign_up.xml`**
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fillViewport="true"
    android:background="@color/bg_canvas">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:gravity="center_vertical"
        android:padding="28dp">

        <TextView
            android:id="@+id/tvSignUpTitle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Create Account"
            android:textSize="26sp"
            android:textStyle="bold"
            android:textColor="@color/text_headline"
            android:layout_marginBottom="6dp" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Fill in fields to open your personal Dashboard"
            android:textSize="14sp"
            android:textColor="@color/text_muted"
            android:layout_marginBottom="28dp" />

        <!-- Full Name -->
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Full Name"
            android:textSize="13sp"
            android:textStyle="bold"
            android:textColor="@color/text_headline"
            android:layout_marginBottom="6dp" />

        <EditText
            android:id="@+id/etSignUpFullName"
            android:layout_width="match_parent"
            android:layout_height="48dp"
            android:hint="e.g. Maria Santos"
            android:inputType="textPersonName"
            android:textSize="14sp"
            android:paddingHorizontal="14dp"
            android:background="@drawable/edit_text_border"
            android:layout_marginBottom="16dp" />

        <!-- Email -->
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Email Address"
            android:textSize="13sp"
            android:textStyle="bold"
            android:textColor="@color/text_headline"
            android:layout_marginBottom="6dp" />

        <EditText
            android:id="@+id/etSignUpEmail"
            android:layout_width="match_parent"
            android:layout_height="48dp"
            android:hint="student@campus.edu"
            android:inputType="textEmailAddress"
            android:textSize="14sp"
            android:paddingHorizontal="14dp"
            android:background="@drawable/edit_text_border"
            android:layout_marginBottom="16dp" />

        <!-- Password -->
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Password (at least 6 characters)"
            android:textSize="13sp"
            android:textStyle="bold"
            android:textColor="@color/text_headline"
            android:layout_marginBottom="6dp" />

        <EditText
            android:id="@+id/etSignUpPassword"
            android:layout_width="match_parent"
            android:layout_height="48dp"
            android:hint="Create a password"
            android:inputType="textPassword"
            android:textSize="14sp"
            android:paddingHorizontal="14dp"
            android:background="@drawable/edit_text_border"
            android:layout_marginBottom="16dp" />

        <!-- Confirm Password -->
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Confirm Password"
            android:textSize="13sp"
            android:textStyle="bold"
            android:textColor="@color/text_headline"
            android:layout_marginBottom="6dp" />

        <EditText
            android:id="@+id/etSignUpConfirmPassword"
            android:layout_width="match_parent"
            android:layout_height="48dp"
            android:hint="Re-type password"
            android:inputType="textPassword"
            android:textSize="14sp"
            android:paddingHorizontal="14dp"
            android:background="@drawable/edit_text_border"
            android:layout_marginBottom="24dp" />

        <!-- Submit Button -->
        <Button
            android:id="@+id/btnPerformSignUp"
            android:layout_width="match_parent"
            android:layout_height="52dp"
            android:text="COMPLETE REGISTRATION"
            android:textStyle="bold"
            android:textColor="@color/surface_white"
            android:backgroundTint="@color/accent_emerald"
            android:layout_marginBottom="14dp" />

        <!-- Go to Login -->
        <Button
            android:id="@+id/btnGoToLogin"
            android:layout_width="match_parent"
            android:layout_height="44dp"
            android:text="Already have an account? Log In"
            android:textSize="13sp"
            android:textColor="@color/primary_blue"
            android:backgroundTint="@color/surface_white"
            android:layout_marginBottom="8dp" />

        <!-- Back to Welcome -->
        <Button
            android:id="@+id/btnBackFromSignUp"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_gravity="center_horizontal"
            android:text="← Back to Welcome"
            android:textSize="12sp"
            android:textColor="@color/text_muted"
            android:backgroundTint="@android:color/transparent" />

    </LinearLayout>
</ScrollView>
```

---

### 4.3 Brain / Logic Code (`SignUpActivity.kt`)
- **Where to go:** `app` ➔ `java` ➔ `com.example.campusconnect` ➔ **`SignUpActivity.kt`**
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```kotlin
package com.example.campusconnect

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class SignUpActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sign_up)

        val etFullName = findViewById<EditText>(R.id.etSignUpFullName)
        val etEmail = findViewById<EditText>(R.id.etSignUpEmail)
        val etPassword = findViewById<EditText>(R.id.etSignUpPassword)
        val etConfirmPassword = findViewById<EditText>(R.id.etSignUpConfirmPassword)
        val btnSignUp = findViewById<Button>(R.id.btnPerformSignUp)
        val btnGoToLogin = findViewById<Button>(R.id.btnGoToLogin)
        val btnBack = findViewById<Button>(R.id.btnBackFromSignUp)

        btnSignUp.setOnClickListener {
            val fullName = etFullName.text.toString().trim()
            val email = etEmail.text.toString().trim()
            val password = etPassword.text.toString().trim()
            val confirmPassword = etConfirmPassword.text.toString().trim()

            // 1. Check empty boxes
            if (fullName.isEmpty() || email.isEmpty() || password.isEmpty() || confirmPassword.isEmpty()) {
                Toast.makeText(this, "All fields are required!", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // 2. Check valid email
            if (!email.contains("@") || !email.contains(".")) {
                Toast.makeText(this, "Please enter a valid email address!", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // 3. Password length
            if (password.length < 6) {
                Toast.makeText(this, "Password must have at least 6 characters!", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // 4. Password match check
            if (password != confirmPassword) {
                Toast.makeText(this, "Passwords do not match!", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // 5. Success! Pass name to Dashboard
            Toast.makeText(this, "Account created successfully!", Toast.LENGTH_SHORT).show()

            val intent = Intent(this, DashboardActivity::class.java)
            intent.putExtra("USER_NAME", fullName)
            startActivity(intent)
            finish()
        }

        btnGoToLogin.setOnClickListener {
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
            finish()
        }

        btnBack.setOnClickListener {
            finish()
        }
    }
}
```

---

## 🚀 Step 5: Screen 4 — Student Dashboard (`DashboardActivity`)

### 5.1 Create the New Activity in Android Studio
1. Right-click folder `com.example.campusconnect` (`app` ➔ `java` ➔ `com.example.campusconnect`).
2. Select **New** ➔ **Activity** ➔ **Empty Activity**.
3. Name it: `DashboardActivity`.
4. Click **Finish**.

---

### 5.2 Design Layout (`activity_dashboard.xml`)
- **Where to go:** `app` ➔ `res` ➔ `layout` ➔ **`activity_dashboard.xml`**
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```xml
<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fillViewport="true"
    android:background="@color/bg_canvas">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="24dp">

        <!-- Top Header -->
        <TextView
            android:id="@+id/tvDashboardTitle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Student Portal"
            android:textSize="13sp"
            android:textStyle="bold"
            android:textColor="@color/primary_blue"
            android:textAllCaps="true"
            android:letterSpacing="0.08"
            android:layout_marginBottom="4dp" />

        <!-- Personalized Greeting -->
        <TextView
            android:id="@+id/tvDashboardGreeting"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Welcome, Student!"
            android:textSize="26sp"
            android:textStyle="bold"
            android:textColor="@color/text_headline"
            android:layout_marginBottom="24dp" />

        <!-- CARD 1: My Profile -->
        <LinearLayout
            android:id="@+id/cardProfile"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:background="@drawable/edit_text_border"
            android:padding="18dp"
            android:layout_marginBottom="14dp">

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="👤 Student Profile"
                android:textSize="16sp"
                android:textStyle="bold"
                android:textColor="@color/text_headline"
                android:layout_marginBottom="4dp" />

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Tap to see your student account and records."
                android:textSize="13sp"
                android:textColor="@color/text_muted" />
        </LinearLayout>

        <!-- CARD 2: Active Courses -->
        <LinearLayout
            android:id="@+id/cardCourses"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:background="@drawable/edit_text_border"
            android:padding="18dp"
            android:layout_marginBottom="14dp">

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="📚 Enrolled Subjects"
                android:textSize="16sp"
                android:textStyle="bold"
                android:textColor="@color/text_headline"
                android:layout_marginBottom="4dp" />

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="4 Subjects: Mobile Dev, Event Programming, Database, Web Dev."
                android:textSize="13sp"
                android:textColor="@color/text_muted" />
        </LinearLayout>

        <!-- CARD 3: Settings -->
        <LinearLayout
            android:id="@+id/cardSettings"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:background="@drawable/edit_text_border"
            android:padding="18dp"
            android:layout_marginBottom="32dp">

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="⚙️ App Settings"
                android:textSize="16sp"
                android:textStyle="bold"
                android:textColor="@color/text_headline"
                android:layout_marginBottom="4dp" />

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Configure notification preferences and display theme."
                android:textSize="13sp"
                android:textColor="@color/text_muted" />
        </LinearLayout>

        <!-- Back to Welcome Screen Button -->
        <Button
            android:id="@+id/btnReturnWelcome"
            android:layout_width="match_parent"
            android:layout_height="48dp"
            android:text="RETURN TO WELCOME SCREEN"
            android:textSize="13sp"
            android:textColor="@color/primary_blue"
            android:backgroundTint="@color/surface_white"
            android:layout_marginBottom="12dp" />

        <!-- LOGOUT BUTTON -->
        <Button
            android:id="@+id/btnLogout"
            android:layout_width="match_parent"
            android:layout_height="52dp"
            android:text="LOG OUT"
            android:textStyle="bold"
            android:textColor="@color/surface_white"
            android:backgroundTint="@color/text_danger" />

    </LinearLayout>
</ScrollView>
```

---

### 5.3 Brain / Logic Code (`DashboardActivity.kt`)
- **Where to go:** `app` ➔ `java` ➔ `com.example.campusconnect` ➔ **`DashboardActivity.kt`**
- **Action:** Select all (`Ctrl + A`), delete, and paste:

```kotlin
package com.example.campusconnect

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast

class DashboardActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_dashboard)

        val tvGreeting = findViewById<TextView>(R.id.tvDashboardGreeting)
        val cardProfile = findViewById<LinearLayout>(R.id.cardProfile)
        val cardCourses = findViewById<LinearLayout>(R.id.cardCourses)
        val cardSettings = findViewById<LinearLayout>(R.id.cardSettings)
        val btnReturnWelcome = findViewById<Button>(R.id.btnReturnWelcome)
        val btnLogout = findViewById<Button>(R.id.btnLogout)

        // Read the typed name passed from Login or SignUp!
        val passedUserName = intent.getStringExtra("USER_NAME")
        val displayName = if (!passedUserName.isNullOrEmpty()) passedUserName else "Student"
        tvGreeting.text = "Welcome, $displayName!"

        // Card click toasts
        cardProfile.setOnClickListener {
            Toast.makeText(this, "Profile: Logged in as $displayName", Toast.LENGTH_SHORT).show()
        }

        cardCourses.setOnClickListener {
            Toast.makeText(this, "Enrolled: Mobile Development Lab", Toast.LENGTH_SHORT).show()
        }

        cardSettings.setOnClickListener {
            Toast.makeText(this, "Settings: System running Android API 21+", Toast.LENGTH_SHORT).show()
        }

        // Return button
        btnReturnWelcome.setOnClickListener {
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
            finish()
        }

        // Logout button
        btnLogout.setOnClickListener {
            Toast.makeText(this, "You have been logged out", Toast.LENGTH_SHORT).show()

            val intent = Intent(this, MainActivity::class.java)
            intent.flags = Intent.FLAG_ACTIVITY_CLEAR_TOP or Intent.FLAG_ACTIVITY_NEW_TASK
            startActivity(intent)
            finish()
        }
    }
}
```

---

## 📜 Step 6: Check Your Manifest (`AndroidManifest.xml`)

Open `app` ➔ `manifests` ➔ **`AndroidManifest.xml`**.  
Make sure your file looks like this (it should declare all 4 activities):

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.campusconnect">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.CampusConnect">

        <!-- 1. Screen 1: Launcher -->
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <!-- 2. Screen 2: Login -->
        <activity
            android:name=".LoginActivity"
            android:exported="false" />

        <!-- 3. Screen 3: Sign Up -->
        <activity
            android:name=".SignUpActivity"
            android:exported="false" />

        <!-- 4. Screen 4: Dashboard -->
        <activity
            android:name=".DashboardActivity"
            android:exported="false" />

    </application>

</manifest>
```

---

## 🎮 How to Test Your App (Click the Green Play Button ▶)

1. **Test 1 (Welcome Screen):**  
   - Press the green **Run** button (`Shift + F10`).
   - You should see the logo, title, and buttons!
2. **Test 2 (Direct Dashboard):**  
   - Tap **ENTER DASHBOARD**.
   - You should immediately see the Dashboard saying *"Welcome, Guest Student!"*.
3. **Test 3 (Login Screen):**  
   - Tap **LOG IN** from Welcome.
   - Type username `admin` and password `1234`.
   - Tap Log In ➔ It greets you with *"Welcome, Administrator!"*.
4. **Test 4 (Sign Up Screen):**  
   - Tap **CREATE AN ACCOUNT** from Welcome.
   - Enter your name (e.g. `Maria Santos`), email, and password.
   - Tap Complete Registration ➔ Dashboard opens saying **"Welcome, Maria Santos!"**!
5. **Test 5 (Log Out):**  
   - Tap **LOG OUT** on Dashboard.
   - App returns safely to the Welcome screen!

---

## 🚑 Quick 5-Second Troubleshooting

| Problem | Simple Fix |
| :--- | :--- |
| **A button does nothing when tapped** | Check that `findViewById(R.id.btn...)` in Kotlin matches the XML `android:id`! |
| **App closes immediately when pressing a button** | Check `AndroidManifest.xml` to make sure all 4 activities are listed! |
| **XML has lots of red lines** | Press `Ctrl + A` in that XML file, delete everything, and re-paste the whole code block cleanly. |
| **`DashboardActivity` is underlined in red in MainActivity** | Don't worry! Go do **Step 5** to create `DashboardActivity`. The red line will disappear! |
| **Can't find `logo.png`** | You don't need `logo.png`! Follow **Step 1.4** to create `logo.xml` instead. |
