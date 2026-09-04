// File: app/build.gradle.kts (module-level)

plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    // Kotlin 2.0+ ships the Compose compiler as a decoupled Gradle plugin,
    // versioned together with Kotlin — no separate composeCompiler version to match.
    alias(libs.plugins.kotlin.compose)
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

    kotlinOptions {
        jvmTarget = "17"
    }

    buildFeatures {
        // Enables Jetpack Compose. The View-based (AppCompat) screens and the
        // Compose screens coexist through Compose's first-class View interop.
        compose = true
    }

    buildToolsVersion = "36.0.0"
}

dependencies {
    // --- View system (existing login / register / home screens) ---
    implementation(libs.androidx.appcompat)
    implementation(libs.material)
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.constraintlayout)

    // --- Jetpack Compose (multilingual phrase feature) ---
    implementation(libs.androidx.activity.compose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.ui)
    implementation(libs.androidx.ui.graphics)
    implementation(libs.androidx.ui.tooling.preview)
    implementation(libs.androidx.material3)
    implementation(libs.androidx.foundation)
    debugImplementation(libs.androidx.ui.tooling)
}
