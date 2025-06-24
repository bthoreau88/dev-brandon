// File: app/build.gradle.kts (module-level)

plugins {
    // 1) Apply the Android application plugin (version is inherited from root build.gradle.kts)
    id("com.android.application")

    // 2) Apply the Kotlin Android plugin (Android plugin needs it—even if your code is Java)
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.quickphrase"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.quickphrase"
        minSdk = 21
        targetSdk = 35
        versionCode = 1
        versionName = "1.0"
    }

    buildTypes {
        getByName("release") {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    // Optional: if you have any Kotlin code (or if the Android plugin expects it)
    kotlinOptions {
        jvmTarget = "17"
    }
    buildToolsVersion = "36.0.0"
}

dependencies {
    // Required for AppCompatActivity, Intent, Toast, findViewById, etc.
    implementation("androidx.appcompat:appcompat:1.7.1")

    // Material Components (optional, for Material-styled Buttons, etc.)
    implementation("com.google.android.material:material:1.10.0")

    // Android core-ktx (optional but harmless if you don’t write Kotlin)
    implementation("androidx.core:core-ktx:1.12.0")

    // ConstraintLayout (optional; remove if you only use LinearLayout/FrameLayout)
    implementation("androidx.constraintlayout:constraintlayout:2.1.4")
    implementation(libs.androidx.ui.graphics.android)
    implementation(libs.androidx.foundation.android)
}
