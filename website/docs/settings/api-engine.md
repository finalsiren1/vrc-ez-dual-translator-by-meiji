---
title: AI & Translation Engine
sidebar_label: AI & Engine
sidebar_position: 2
---

# AI & Translation Engine Configuration

The **AI & Translation Engine** section is the core of SyncVRC. This is where you configure the cloud services that translate your text and the local hardware that processes your voice.

Incorrect settings here may result in API errors or degraded performance, so please follow this guide carefully.

## Translation Engine

Choose the cloud AI provider that will handle the text translation.

* **Supported Engines:** Google Gemini, DeepL API, and OpenAI.
* **Recommendation:** **Google Gemini** is highly recommended and currently fully optimized for SyncVRC, offering incredibly fast real-time responses and excellent conversational context.

<img 
  src={require('./img/settings-engine.jpg').default} 
  width="900" 
  alt="Settings Engine" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## API Key Management

To use the cloud translation services, you must provide your own API key from your selected provider.

* **How to Setup:** 1. Select your preferred engine from the dropdown.
  2. Paste your secret API key into the **API Key** input field.
  3. Click **Save**. 
* **Privacy & Streamer Mode:** Once saved, the text field will be locked and your key will be hidden as asterisks (`********`). This prevents you from accidentally leaking your API key while streaming or screen sharing.
* **How to Edit:** Click the **Edit** button to unlock the field, enter your new key, and click Save again.

<img 
  src={require('./img/settings-apikey.jpg').default} 
  width="900" 
  alt="Settings API Key" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## AI Processing Device (Speech-to-Text)

This setting determines which hardware component on your computer runs the offline **Faster-Whisper** speech recognition model.

* **GPU (NVIDIA) - Highly Recommended:** Utilizes your graphics card for blazing-fast, near-instant voice recognition. 
  * *Requirement:* You **MUST** have an NVIDIA graphics card and the [NVIDIA CUDA Toolkit 12.x](./../tutorial/initial-setup) installed.
* **CPU (Fallback):** Utilizes your computer's main processor. 
  * *When to use:* Select this if you have an AMD or Intel GPU, or if you encounter CUDA errors on startup. Note that CPU processing is noticeably slower than GPU processing.

<img 
  src={require('./img/settings-device.jpg').default} 
  width="900" 
  alt="Settings Device" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## Whisper Model Selection

SyncVRC allows you to choose the size of the offline Whisper AI model used for speech recognition. This lets you customize and balance transcription accuracy with your computer's hardware capabilities (VRAM) and speed.

* **Model Sizes:** You can choose from **Tiny** (fastest, lowest accuracy, uses ~1GB RAM) up to **Large-v3** (slowest, highest accuracy, requires ~10GB RAM). The default is **Medium**, which offers the best overall balance for clear audio.
* **Automatic Downloading:** If you select a model size that hasn't been used before, SyncVRC will automatically prompt you to download the necessary files. 
* **Clear Cache (Storage Management):** Downloaded AI models consume hard drive space. If your disk is getting full, you can click the **Clear Cache** button to safely delete all unused models and reclaim storage space. *(Note: The base 'Medium' model cannot be deleted.)*

<img 
  src={require('./img/settings-model.jpg').default} 
  width="900" 
  alt="Settings Whisper Model" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>