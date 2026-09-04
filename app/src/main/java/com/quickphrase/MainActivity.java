package com.quickphrase;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

import com.quickphrase.phrase.PhraseActivity;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button openPhrases = findViewById(R.id.btnOpenPhrases);
        openPhrases.setOnClickListener(v ->
                startActivity(new Intent(MainActivity.this, PhraseActivity.class)));
    }
}
