// File: build.gradle.kts (root-level)

// We declare plugin versions here (but do NOT apply them).
plugins {
    // 1) Android Application plugin, version 8.2.0
    id("com.android.application") version "8.10.1" apply false

    // 2) Kotlin Android plugin, version 1.9.10 (Android plugin needs this under the hood)
    id("org.jetbrains.kotlin.android") version "1.9.10" apply false
}
