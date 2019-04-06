package com.anyline.react.boilerplate;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {
    public static final String TAG = "kapoor";
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);

      new Handler().postDelayed(new Runnable() {
          @Override
          public void run() {
              Intent i = new Intent(SplashActivity.this,MainActivity.class);
              startActivity(i);
          }
      }, 3000);
  }
}

