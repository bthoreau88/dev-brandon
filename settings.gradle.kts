// File: settings.gradle.kts

pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal() // Required so Kotlin and Android plugins can be resolved
    }
}

dependencyResolutionManagement {
    // Instruct Gradle to only look for dependencies here, not in each build.gradle.kts
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}

rootProject.name = "QuickPhrase"
include(":app")
