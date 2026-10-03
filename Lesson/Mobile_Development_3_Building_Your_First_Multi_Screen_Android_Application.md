# Mob Dev 1 Lab: Building Your First Multi-Screen Android Application
**Subtitle:** Welcome Page → Login → Sign Up → Dashboard  
**Platform:** [iamlesson.space](https://iamlesson.space) → Higher Education Computing Curriculum  
**Target Environment:** Android Studio Arctic Fox | 2020.3.1 (Official Release 2020.3.1, AGP 7.0.0, Gradle 7.0.2)  
**Language:** Kotlin | **UI:** XML Layouts & Traditional Activities | **Binding:** `findViewById`

---

## 📌 Critical Version & Environment Notice
> **IMPORTANT: Android Studio Arctic Fox (2020.3.1) Specifics**
> This lesson is designed and tested specifically for **Android Studio Arctic Fox | 2020.3.1**.
> - In Arctic Fox, select the project template named **"Empty Activity"** (do NOT look for "Empty Views Activity", which only exists in newer editions).
> - The layout editor view modes (**Code**, **Split**, **Design**) are located in the top-right corner of the layout editor toolbar.
> - Tools menu retains the traditional **Tools → AVD Manager** path for managing virtual devices.
> - The application operates 100% offline using foundational XML layouts, Activities, and explicit Intents. No Jetpack Compose, external database servers, Firebase, or cloud APIs are required.

---

## 🗺️ Application Screen Flow Map

| Screen | Activity & Layout | Purpose & User Actions |
| :--- | :--- | :--- |
| **Screen 1: Welcome** | `MainActivity.kt`<br>`activity_main.xml` | App entry point with logo and title.<br>• **[ENTER DASHBOARD]** → Navigates directly to `DashboardActivity`!<br>• **[VIEW LOGIN SCREEN]** → Opens `LoginActivity`<br>• **[VIEW SIGN UP SCREEN]** → Opens `SignUpActivity` |
| **Screen 2: Dashboard** | `DashboardActivity.kt`<br>`activity_dashboard.xml` | Static student portal hub with Profile, Courses, and Settings cards.<br>• **[RETURN TO WELCOME SCREEN]** → Navigates back to `MainActivity`<br>• **[GO TO LOGIN SCREEN]** → Opens `LoginActivity` |
| **Screen 3: Login** | `LoginActivity.kt`<br>`activity_login.xml` | Static UI design of a login form.<br>• **[LOG IN TO DASHBOARD]** → Navigates directly to `DashboardActivity`!<br>• **[← Back to Welcome]** → Returns to `MainActivity` |
| **Screen 4: Sign Up** | `SignUpActivity.kt`<br>`activity_sign_up.xml` | Static UI design of a registration form.<br>• **[COMPLETE REGISTRATION]** → Navigates directly to `DashboardActivity`!<br>• **[← Back to Welcome]** → Returns to `MainActivity` |

### How Button Click Navigation Works in Android
```kotlin
// 1. Locate the button from your XML layout
val btnEnterDashboard = findViewById<Button>(R.id.btnEnterDashboard)

// 2. Attach the click event
btnEnterDashboard.setOnClickListener {
    // 3. Launch the target Activity!
    val intent = Intent(this, DashboardActivity::class.java)
    startActivity(intent)
}
```


---

## 💡 Conceptual Foundations

### 1. What is an Activity?
An **Activity** represents a single focused screen or task in an Android application.
- **MainActivity:** Serves as the welcoming entry lobby.
- **LoginActivity:** Serves as the credential verification checkpoint.
- **SignUpActivity:** Serves as the student registration form.
- **DashboardActivity:** Serves as the personalized student home base.

### 2. What is an XML Layout?
An **XML Layout** is the visual skeleton and styling blueprint of an Activity. Android decouples UI presentation (XML) from business logic (Kotlin).
- `<TextView>`: Displays read-only or dynamic text labels.
- `<EditText>`: An interactive text box where users enter keyboard input.
- `<Button>`: A clickable trigger for user actions.
- `<ImageView>`: Renders vector graphics and icons.
- `<LinearLayout>`: Arranges visual components in a single column (`vertical`) or row (`horizontal`).
- `<ScrollView>`: Provides vertical scrolling so virtual software keyboards do not block form fields.

---

## 🗂️ "Where Does My Code Go?" Reference Table

| What I Am Creating | Target File | File Location | Language |
| :--- | :--- | :--- | :--- |
| Screen layout & visual blueprint | `activity_*.xml` | `app > src > main > res > layout >` | XML |
| Component styling, margins & sizes | `activity_*.xml` | `app > src > main > res > layout >` | XML |
| Color hex definitions | `colors.xml` | `app > src > main > res > values >` | XML |
| Centralized string constants | `strings.xml` | `app > src > main > res > values >` | XML |
| Vector graphics & border shapes | `*.xml` | `app > src > main > res > drawable >` | XML |
| Button click behavior | `*Activity.kt` | `app > src > main > java > [package] >` | Kotlin |
| Screen navigation (Intents) | `*Activity.kt` | `app > src > main > java > [package] >` | Kotlin |
| Form input validation | `*Activity.kt` | `app > src > main > java > [package] >` | Kotlin |
| Passing data between screens | `*Activity.kt` | `app > src > main > java > [package] >` | Kotlin |
| Registering activities with Android | `AndroidManifest.xml` | `app > src > main >` | XML |

---

## 🛠️ Step 0: Project Creation in Arctic Fox 2020.3.1

1. Open **Android Studio Arctic Fox | 2020.3.1**.
2. Click **New Project** (or `File > New > New Project...`).
3. Under **Phone and Tablet**, select the **Empty Activity** template. Click **Next**.
4. Configure the project:
   - **Name:** `CampusConnect`
   - **Package name:** `com.example.campusconnect`
   - **Language:** **Kotlin** (do NOT select Java)
   - **Minimum SDK:** **API 21: Android 5.0 (Lollipop)**
   - Leave *"Use legacy android.support libraries"* unchecked.
5. Click **Finish**.
6. **Wait for Gradle Sync to complete.** In the bottom status bar, wait until you see **"BUILD SUCCESSFUL"**.

### Android Studio Project Tree View
```
app
├── manifests
│   └── AndroidManifest.xml
├── java
│   └── com.example.campusconnect
│       └── MainActivity.kt
├── res
│   ├── drawable
│   ├── layout
│   │   └── activity_main.xml
│   ├── mipmap
│   └── values
│       ├── colors.xml
│       ├── strings.xml
│       └── themes.xml
└── Gradle Scripts
    ├── build.gradle (Project: CampusConnect)
    └── build.gradle (Module: CampusConnect.app)
```

---

## 🎨 Step 1: Design Tokens (Colors, Strings & Icon)

### 1.1 Color Palette
- **FILE:** `colors.xml`
- **LOCATION:** `app > src > main > res > values > colors.xml`
- **ACTION:** Replace the existing file contents with:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- Brand Palette -->
    <color name="primary_blue">#0284C7</color>
    <color name="primary_blue_dark">#0369A1</color>
    <color name="accent_emerald">#10B981</color>
    
    <!-- Neutral Background & Surface Tones -->
    <color name="bg_canvas">#F8FAFC</color>
    <color name="surface_white">#FFFFFF</color>
    <color name="card_subtle">#F1F5F9</color>
    <color name="border_light">#CBD5E1</color>
    
    <!-- Text Colors -->
    <color name="text_headline">#0F172A</color>
    <color name="text_muted">#64748B</color>
    <color name="text_danger">#EF4444</color>
</resources>
```
*DO NOT PUT THIS CODE IN:* Any `.kt` Kotlin file.

---

### 1.2 String Constants
- **FILE:** `strings.xml`
- **LOCATION:** `app > src > main > res > values > strings.xml`
- **ACTION:** Replace the existing file contents with:

```xml
<resources>
    <string name="app_name">CampusConnect</string>
    <string name="welcome_title">CampusConnect</string>
    <string name="welcome_subtitle">Mob Dev 1 Lab Multi-Screen Learning Portal</string>
    <string name="btn_login_label">LOG IN</string>
    <string name="btn_signup_label">CREATE AN ACCOUNT</string>
</resources>
```

---

### 1.3 How to Add an Image (PNG / JPG) to `res/drawable`
Instead of coding a vector, you can use any real image file (logo or illustration) from your computer:

1. **Prepare your image:** Save an image on your computer as `logo.png` (or `.jpg`).
   > ⚠️ **Android Resource Naming Rule:** File names in `res/drawable` MUST be strictly **lowercase** with **no spaces** and no special symbols (e.g. `logo.png`, `app_logo.png`).
2. **Copy the file:** Select the image in Windows Explorer and press `Ctrl + C`.
3. **Paste in Android Studio:** In the Project panel, expand `app > src > main > res`. Right-click the **`drawable`** folder and select **Paste** (`Ctrl + V`).
4. **Choose Destination:** If prompted, select the standard `.../res/drawable` directory (do NOT select `drawable-v24`) and click **OK**.
5. **Display in XML:** Reference it inside `<ImageView>` using `android:src="@drawable/logo"`.

---

### 1.4 Input Field Border Shape
- **FILE:** `edit_text_border.xml`
- **LOCATION:** `app > src > main > res > drawable > edit_text_border.xml`
- **HOW TO CREATE:** Right-click `drawable` → **New** → **Drawable Resource File** → Name: `edit_text_border.xml`.
- **ACTION:** Replace contents with:

```xml
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <solid android:color="@color/surface_white" />
    <stroke android:width="1.5dp" android:color="@color/border_light" />
    <corners android:radius="8dp" />
</shape>
```

---

## 📱 Step 2: Part 1 — Welcome Page (MainActivity)

### 2.1 Welcome Page XML Layout
- **FILE:** `activity_main.xml`
- **LOCATION:** `app > src > main > res > layout > activity_main.xml`
- **HOW TO OPEN:** Double-click `activity_main.xml` in the Project tree. In the top-right corner of the editor, click **Split** to see both the code and preview.
- **ACTION:** Select all existing text (`Ctrl + A`) and replace with:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="28dp"
    android:background="@color/bg_canvas">

    <!-- App Graphic Logo -->
    <ImageView
        android:id="@+id/ivWelcomeLogo"
        android:layout_width="100dp"
        android:layout_height="100dp"
        android:src="@drawable/ic_app_logo"
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

    <!-- Short Description -->
    <TextView
        android:id="@+id/tvWelcomeSubtitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Mob Dev 1 Lab • Multi-Screen Portal"
        android:textSize="14sp"
        android:textColor="@color/text_muted"
        android:gravity="center"
        android:layout_marginBottom="48dp" />

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
        android:layout_marginBottom="14dp" />

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

#### What this XML does:
- Encloses content inside a vertically oriented `<LinearLayout>` centered on screen.
- Associates unique IDs (`@+id/btnLogin`, `@+id/btnSignUp`) so Kotlin can bind click handlers.
- Sets standard 48-52dp height for mobile touch targets adhering to Android ergonomic standards.

---

### 2.2 Welcome Page Kotlin Logic
- **FILE:** `MainActivity.kt`
- **LOCATION:** `app > src > main > java > com.example.campusconnect > MainActivity.kt`
- **ACTION:** Replace all contents with:

```kotlin
package com.example.campusconnect

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // 1. Inflate the XML layout onto the device window
        setContentView(R.layout.activity_main)

        // 2. Bind buttons by their XML IDs
        val btnLogin = findViewById<Button>(R.id.btnLogin)
        val btnSignUp = findViewById<Button>(R.id.btnSignUp)

        // 3. Set click listener to navigate to LoginActivity
        btnLogin.setOnClickListener {
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
        }

        // 4. Set click listener to navigate to SignUpActivity
        btnSignUp.setOnClickListener {
            val intent = Intent(this, SignUpActivity::class.java)
            startActivity(intent)
        }
    }
}
```

> **Note on Red Highlights:** In Arctic Fox, `LoginActivity::class.java` and `SignUpActivity::class.java` will highlight in red until you create those Activity files in the next two steps.

---

## 🔐 Step 3: Part 2 — Login Screen (LoginActivity)

### 3.1 Creating the Activity in Arctic Fox
1. In the Project window, expand `app > java`.
2. **Right-click** on the package folder: `com.example.campusconnect`.
3. Select **New → Activity → Empty Activity**.
4. Set **Activity Name:** `LoginActivity`.
5. Ensure **Layout Name** is `activity_login` and **Source Language** is **Kotlin**.
6. Leave **Launcher Activity** **UNCHECKED**.
7. Click **Finish**.

---

### 3.2 Login XML Layout
- **FILE:** `activity_login.xml`
- **LOCATION:** `app > src > main > res > layout > activity_login.xml`
- **ACTION:** Replace with:

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
        android:text="Enter your classroom credentials to continue"
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
        android:text="LOG IN"
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

### 3.3 Login Kotlin Logic
- **FILE:** `LoginActivity.kt`
- **LOCATION:** `app > src > main > java > com.example.campusconnect > LoginActivity.kt`
- **ACTION:** Replace with:

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

        // Handle Login button tap
        btnLogin.setOnClickListener {
            val username = etUsername.text.toString().trim()
            val password = etPassword.text.toString().trim()

            // 1. Validate empty inputs
            if (username.isEmpty() || password.isEmpty()) {
                Toast.makeText(this, "Please enter both username and password", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // 2. Educational Demo Authentication: admin / 1234
            // WARNING: FOR CLASSROOM PURPOSES ONLY. NOT PRODUCTION AUTHENTICATION.
            if (username == "admin" && password == "1234") {
                Toast.makeText(this, "Login successful! Welcome, Admin.", Toast.LENGTH_SHORT).show()

                val intent = Intent(this, DashboardActivity::class.java)
                intent.putExtra("USER_NAME", "Administrator")
                startActivity(intent)
                finish() // Prevents returning to login via the back button
            } else {
                Toast.makeText(this, "Invalid credentials. Use: admin / 1234", Toast.LENGTH_LONG).show()
            }
        }

        // Navigate to Sign Up screen
        btnGoToSignUp.setOnClickListener {
            val intent = Intent(this, SignUpActivity::class.java)
            startActivity(intent)
            finish()
        }

        // Return to Welcome screen
        btnBackToWelcome.setOnClickListener {
            finish()
        }
    }
}
```

---

## 📝 Step 4: Part 3 — Registration Screen (SignUpActivity)

### 4.1 Creating the Activity in Arctic Fox
1. Right-click package `com.example.campusconnect` → **New → Activity → Empty Activity**.
2. **Activity Name:** `SignUpActivity`.
3. Leave Launcher Activity unchecked. Click **Finish**.

---

### 4.2 Sign Up XML Layout
- **FILE:** `activity_sign_up.xml`
- **LOCATION:** `app > src > main > res > layout > activity_sign_up.xml`
- **ACTION:** Replace with:

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
            android:text="Register to access your student dashboard"
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
            android:hint="e.g. Juan Dela Cruz"
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
            android:text="Password (min. 6 characters)"
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

        <!-- Link to Login -->
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

### 4.3 Sign Up Kotlin Logic
- **FILE:** `SignUpActivity.kt`
- **LOCATION:** `app > src > main > java > com.example.campusconnect > SignUpActivity.kt`
- **ACTION:** Replace with:

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

            // 1. Empty field validation
            if (fullName.isEmpty() || email.isEmpty() || password.isEmpty() || confirmPassword.isEmpty()) {
                Toast.makeText(this, "Error: All fields are required!", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // 2. Email format validation
            if (!email.contains("@") || !email.contains(".")) {
                Toast.makeText(this, "Please enter a valid email address", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // 3. Minimum password length
            if (password.length < 6) {
                Toast.makeText(this, "Password must be at least 6 characters", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // 4. Password matching verification
            if (password != confirmPassword) {
                Toast.makeText(this, "Passwords do not match! Please check again.", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // 5. Successful registration: Pass user name to Dashboard
            Toast.makeText(this, "Account created successfully!", Toast.LENGTH_SHORT).show()

            val intent = Intent(this, DashboardActivity::class.java)
            intent.putExtra("USER_NAME", fullName) // Attach the real typed name!
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

## 🚀 Step 5: Part 4 & 5 — Dashboard Screen (DashboardActivity)

### 5.1 Creating the Activity in Arctic Fox
1. Right-click package `com.example.campusconnect` → **New → Activity → Empty Activity**.
2. **Activity Name:** `DashboardActivity`.
3. Leave Launcher Activity unchecked. Click **Finish**.

---

### 5.2 Dashboard XML Layout
- **FILE:** `activity_dashboard.xml`
- **LOCATION:** `app > src > main > res > layout > activity_dashboard.xml`
- **ACTION:** Replace with:

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

        <!-- Header Tag -->
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

        <!-- Dynamic Personalized Greeting -->
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
                android:text="View your academic record, enrollment status, and student credentials."
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
                android:text="4 Active Courses: Mobile Dev 3, Event-Driven Prog, Database Sys, Web Dev."
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
                android:text="Configure notification alerts, dark theme, and offline storage."
                android:textSize="13sp"
                android:textColor="@color/text_muted" />
        </LinearLayout>

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

### 5.3 Dashboard Kotlin Logic (Extracting Extra & Logout)
- **FILE:** `DashboardActivity.kt`
- **LOCATION:** `app > src > main > java > com.example.campusconnect > DashboardActivity.kt`
- **ACTION:** Replace with:

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
        val btnLogout = findViewById<Button>(R.id.btnLogout)

        // PART 4: Read the string passed across the Intent boundary
        val passedUserName = intent.getStringExtra("USER_NAME")
        val displayName = if (!passedUserName.isNullOrEmpty()) passedUserName else "Student"
        tvGreeting.text = "Welcome, $displayName!"

        // Classroom card interaction feedback
        cardProfile.setOnClickListener {
            Toast.makeText(this, "Profile: Logged in as $displayName", Toast.LENGTH_SHORT).show()
        }

        cardCourses.setOnClickListener {
            Toast.makeText(this, "Enrolled: Mobile Development 3 (Arctic Fox)", Toast.LENGTH_SHORT).show()
        }

        cardSettings.setOnClickListener {
            Toast.makeText(this, "Settings: System running Android API 21+ compatible", Toast.LENGTH_SHORT).show()
        }

        // PART 6: Safe Logout with Back Stack Clearing
        btnLogout.setOnClickListener {
            Toast.makeText(this, "You have been logged out", Toast.LENGTH_SHORT).show()

            val intent = Intent(this, MainActivity::class.java)
            // Clear all activities on top of MainActivity so back button cannot re-enter
            intent.flags = Intent.FLAG_ACTIVITY_CLEAR_TOP or Intent.FLAG_ACTIVITY_NEW_TASK
            startActivity(intent)
            finish()
        }
    }
}
```

---

## 📜 Step 6: Verify AndroidManifest.xml

Open `app > src > main > AndroidManifest.xml`. Verify that Arctic Fox successfully declared all four activities:

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

        <!-- 1. The Launcher Screen: MainActivity opens on app startup -->
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <!-- 2. Subordinate screens (exported=false for internal app security) -->
        <activity
            android:name=".LoginActivity"
            android:exported="false" />

        <activity
            android:name=".SignUpActivity"
            android:exported="false" />

        <activity
            android:name=".DashboardActivity"
            android:exported="false" />

    </application>

</manifest>
```

---

## 🏃 Incremental Build & Testing Guide

Do not wait until the entire application is finished before running tests! Execute incremental verification in your emulator:

### Testing Cycle:
1. **Welcome Page Test:**
   - Click the green **Run 'app'** button (`Shift + F10`).
   - Expected: Welcome page appears with logo, title, and both buttons centered.
2. **Login Navigation Test:**
   - Tap **LOG IN**.
   - Expected: Screen transitions smoothly to the Login form.
   - Enter `admin` and `wrongpass` → Observe *"Invalid credentials"* Toast.
   - Enter `admin` and `1234` → Observe success Toast and transition to Dashboard with *"Welcome, Administrator!"*.
3. **Sign Up & Data Passing Test:**
   - Tap **CREATE AN ACCOUNT** from Welcome Page.
   - Leave fields blank and tap Register → Observe *"Error: All fields are required!"*.
   - Type mismatched passwords → Observe *"Passwords do not match!"*.
   - Type Full Name: `Maria Santos`, Email: `maria@campus.edu`, Password: `secret123` (matching).
   - Tap Submit → Observe transition to Dashboard with greeting: **"Welcome, Maria Santos!"**.
4. **Logout Test:**
   - Tap **LOG OUT**.
   - Expected: Screen transitions back to Welcome Page.
   - Press the Android hardware **Back Button** on the emulator navigation bar.
   - Expected: The emulator exits the app to the home screen—it does **NOT** reopen the dashboard!

---

## 🔧 Top 8 Beginner Errors & How to Fix Them

### ❌ Error 1: Button does nothing when clicked
- **Cause:** Missing `setOnClickListener` in Kotlin or wrong ID in `findViewById`.
- **Fix:** Verify the XML `android:id="@+id/btnLogin"` matches `findViewById<Button>(R.id.btnLogin)`.

### ❌ Error 2: Application crashes when clicking a navigation button
- **Cause:** `android.content.ActivityNotFoundException: Unable to find explicit activity class`.
- **Fix:** Open `AndroidManifest.xml` and ensure `<activity android:name=".LoginActivity" />` is declared inside `<application>`.

### ❌ Error 3: XML shows red lines: "Unclosed tag" or "Missing namespace"
- **Cause:** Typo in closing tag (e.g., omitted `/>`) or missing `xmlns:android="..."` attribute on the root tag.
- **Fix:** Check every element's closing slash. Ensure root container includes `xmlns:android="http://schemas.android.com/apk/res/android"`.

### ❌ Error 4: "Unresolved reference: R"
- **Cause:** Android Studio accidentally imported `android.R` instead of your project's R file.
- **Fix:** Inspect the top of your `.kt` file. If you see `import android.R`, delete that line. Then select **Build → Clean Project** and **Build → Rebuild Project**.

### ❌ Error 5: Class not found or red highlight on Activity names
- **Cause:** Package mismatch or case-sensitivity discrepancy (`loginactivity` vs `LoginActivity`).
- **Fix:** Ensure class names are capitalized in PascalCase and package declaration on line 1 matches `package com.example.campusconnect`.

### ❌ Error 6: Password appears as normal readable text
- **Cause:** Missing `android:inputType="textPassword"`.
- **Fix:** Add `android:inputType="textPassword"` to your password `<EditText>` fields.

### ❌ Error 7: Dashboard displays "Welcome, Student!" instead of user's name
- **Cause:** Intent Extra key mismatch between sender and receiver.
- **Fix:** Ensure both files use the exact same key string:
  - Sender: `intent.putExtra("USER_NAME", fullName)`
  - Receiver: `intent.getStringExtra("USER_NAME")`

### ❌ Error 8: Gradle sync or build stuck
- **Cause:** Background index lock or interrupted download.
- **Fix:** Select `File > Sync Project with Gradle Files`. If problem persists, select `File > Invalidate Caches / Restart...` → click **Invalidate and Restart**.

---

## 🏆 Classroom Exercise & Submission Rubric

### Exercise: Build & Personalize Your First Multi-Screen App
**Requirements:**
1. Maintain the 4-screen flow (Welcome → Login → Sign Up → Dashboard).
2. Personalize the application identity: Change app name, colors, and welcome slogan to match a custom project concept (e.g., *CampusFitness*, *StudentWallet*, *CodeLocker*).
3. Customize the 3 action cards on the Dashboard to fit your app's theme.
4. Enforce input validation and dynamic greeting display.

### 📸 Prove It: Verification Checklist
Submit screenshots or a screen recording demonstrating:
- [ ] **Screenshot 1:** Welcome Page running in emulator.
- [ ] **Screenshot 2:** Login page with invalid credential warning.
- [ ] **Screenshot 3:** Sign Up page displaying empty field error.
- [ ] **Screenshot 4:** Sign Up page displaying password mismatch error.
- [ ] **Screenshot 5:** Dashboard showing customized student name greeting.
- [ ] **Screenshot 6:** Successful logout returning to Welcome Page.

---

## 🧠 10-Question Knowledge Check Assessment

1. **What is an Activity in Android?**  
   *Answer:* A single focused screen or user interaction point in an Android application.

2. **Which method binds XML visual elements to Kotlin variables?**  
   *Answer:* `findViewById<T>(R.id.*)`.

3. **Which attribute masks passwords in an EditText?**  
   *Answer:* `android:inputType="textPassword"`.

4. **Which method is used to attach data to an Intent?**  
   *Answer:* `intent.putExtra(key, value)`.

5. **Which method retrieves a string from an Intent in the destination Activity?**  
   *Answer:* `intent.getStringExtra(key)`.

6. **What exception occurs if an Activity is omitted from AndroidManifest.xml?**  
   *Answer:* `android.content.ActivityNotFoundException`.

7. **What is the purpose of `<ScrollView>` in registration layouts?**  
   *Answer:* Allows the layout to scroll vertically when the soft virtual keyboard opens and covers inputs.

8. **What does calling `finish()` on an Activity do?**  
   *Answer:* Destroys the current Activity instance and removes it from the task's Back Stack.

9. **In Arctic Fox layout editor, which view mode shows code and preview side-by-side?**  
   *Answer:* **Split** mode (top-right corner).

10. **Why do we use `.trim()` on text extracted from an EditText?**  
    *Answer:* To remove accidental leading and trailing whitespace characters.

---

## 🌟 Android Fun Fact: Why "Arctic Fox"?
Starting in 2020 with version 2020.3.1, Google replaced dessert-themed release names with alphabetical wildlife names! **Arctic Fox (A)** was the premier release in this naming convention, followed by **Bumblebee (B)**, **Chipmunk (C)**, and **Dolphin (D)**.

---

## ⚠️ Academic Notice: Educational vs. Production Authentication
The hardcoded authentication demonstration (`admin` / `1234`) in this lesson is crafted strictly for classroom instructional purposes to teach UI event handling, input validation, and screen transitions without requiring external servers. Real-world applications require salted password hashing (bcrypt/Argon2), HTTPS REST APIs, OAuth2/JWT tokens, and secure hardware storage (Android Keystore).
