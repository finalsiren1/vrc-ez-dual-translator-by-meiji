---
title: General Settings
sidebar_label: General Settings
sidebar_position: 1
---

# General Settings

The **General Settings** section allows you to customize the visual appearance, language, and background behavior of the SyncVRC application.

## UI Language

This setting changes the language of the entire application interface. 

* **Supported Languages:** English, Japanese (日本語), Chinese (中文), Korean (한국어), Spanish (Español), Russian (Русский), French (Français), German (Deutsch), Portuguese (Português), and Thai (ไทย).
* **How it works:** Simply select your preferred language from the dropdown menu. The interface will update instantly without needing a restart, and your preference will be saved automatically for future sessions.

<img 
  src={require('./img/settings-lang.jpg').default} 
  width="900" 
  alt="Settings Lang" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## Appearance (Dark Mode)

You can toggle between Dark Mode and Light Mode at any time to suit your visual preference and reduce eye strain.

<img 
  src={require('./img/settings-theme.jpg').default} 
  width="900" 
  alt="Settings Theme" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## Telemetry (Crash Reports)

This option helps us improve SyncVRC by automatically sending anonymous crash reports if the application encounters an error.

* **What is collected:** Only technical error logs and stack traces (the specific line of code that caused the crash) are sent to our secure Sentry server.
* **What is NOT collected:** **Absolutely no voice data, translated text, API keys, or personal identifying information is collected.** Your privacy is fully guaranteed.
* **Recommendation:** We highly recommend leaving this enabled to help us identify and fix bugs quickly, but you are completely free to opt-out at any time by unchecking the box.

<img 
  src={require('./img/settings-telemetry.jpg').default} 
  width="900" 
  alt="Settings Telemetry" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>