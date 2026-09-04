package com.quickphrase.phrase

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import com.quickphrase.model.MultilingualPhrase
import com.quickphrase.model.PhrasePack
import com.quickphrase.ui.TranslatedPhraseScreen
import com.quickphrase.ui.theme.QuickPhraseTheme

/**
 * Hosts the Jetpack Compose multilingual phrase screen.
 *
 * The rest of the app is View-based (AppCompat); this Compose entry point is
 * reached from [com.quickphrase.MainActivity] and demonstrates View <-> Compose
 * interop within a single app.
 */
class PhraseActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            QuickPhraseTheme {
                Surface(color = MaterialTheme.colorScheme.background) {
                    TranslatedPhraseScreen(pack = emergencyPack)
                }
            }
        }
    }

    private companion object {
        val emergencyPack = PhrasePack(
            category = "Emergencies",
            phrases = listOf(
                MultilingualPhrase(
                    "Call the police",
                    "Llame a la policía",
                    "Appelez la police",
                    "Rufen Sie die Polizei"
                ),
                MultilingualPhrase(
                    "Where is the hospital?",
                    "¿Dónde está el hospital?",
                    "Où est l'hôpital?",
                    "Wo ist das Krankenhaus?"
                ),
                MultilingualPhrase(
                    "I'm lost",
                    "Estoy perdido",
                    "Je suis perdu",
                    "Ich habe mich verlaufen"
                ),
                MultilingualPhrase(
                    "I need help",
                    "Necesito ayuda",
                    "J'ai besoin d'aide",
                    "Ich brauche Hilfe"
                )
            )
        )
    }
}
