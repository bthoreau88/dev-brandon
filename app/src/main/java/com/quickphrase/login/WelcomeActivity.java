package com.quickphrase.login;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.quickphrase.MainActivity;
import com.quickphrase.R;
import com.quickphrase.register.CreateAccountActivity;

public class WelcomeActivity extends AppCompatActivity {

    private EditText etEmail, etPassword;
    private Button btnSignIn, btnCreateAccount;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);

        // Bind UI elements
        etEmail = findViewById(R.id.etEmail);
        etPassword = findViewById(R.id.etPassword);
        btnSignIn = findViewById(R.id.btnSignIn);
        btnCreateAccount = findViewById(R.id.btnCreateAccount);

        // Sign In button listener
        btnSignIn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                attemptLogin();
            }
        });

        // Create Account button listener
        btnCreateAccount.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(WelcomeActivity.this, CreateAccountActivity.class);
                startActivity(intent);
            }
        });
    }

    private void attemptLogin() {
        String email = etEmail.getText().toString().trim();
        String password = etPassword.getText().toString().trim();

        if (TextUtils.isEmpty(email)) {
            etEmail.setError("Email is required");
            etEmail.requestFocus();
            return;
        }
        if (TextUtils.isEmpty(password)) {
            etPassword.setError("Password is required");
            etPassword.requestFocus();
            return;
        }

        // Stubbed login: assume always successful
        Toast.makeText(WelcomeActivity.this, "Login successful", Toast.LENGTH_SHORT).show();

        // Navigate to MainActivity
        Intent goToMain = new Intent(WelcomeActivity.this, MainActivity.class);
        startActivity(goToMain);
        finish();
    }
}
