---
title: AI & 翻译引擎配置
sidebar_label: AI & 翻译引擎配置
sidebar_position: 2
---

# AI & 翻译引擎配置

**AI & Translation Engine (AI 与翻译引擎)** 部分是 SyncVRC 的核心。您可以在此处配置翻译文本的云服务以及处理您声音的本地硬件。

此处设置不正确可能导致 API 错误或性能下降，因此请仔细遵循本指南。

## 翻译引擎

选择将处理文本翻译的云 AI 提供商。

* **支持的引擎:** Google Gemini、DeepL API 和 OpenAI。
* **建议:** 强烈推荐 **Google Gemini**，并且目前针对 SyncVRC 进行了全面优化，提供令人难以置信的快速实时响应和出色的对话上下文。

<img 
  src={require('./img/settings-engine.jpg').default} 
  width="900" 
  alt="Settings Engine" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## API 密钥管理

要使用云翻译服务，您必须提供您选择的提供商的 API 密钥。

* **如何设置:**
  1. 从下拉菜单中选择您首选的引擎。
  2. 将您的秘密 API 密钥粘贴到 **API Key** 输入字段中。
  3. 点击 **Save (保存)**。
* **隐私与主播模式:** 保存后，文本字段将被锁定，您的密钥将被隐藏为星号 (`********`)。这可以防止您在直播或屏幕共享时意外泄露您的 API 密钥。
* **如何编辑:** 点击 **Edit (编辑)** 按钮解锁该字段，输入您的新密钥，然后再次点击保存。

<img 
  src={require('./img/settings-apikey.jpg').default} 
  width="900" 
  alt="Settings API Key" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## AI 处理设备 (语音转文本)

此设置决定了您计算机上的哪个硬件组件运行离线 **Faster-Whisper** 语音识别模型。

* **GPU (NVIDIA) - 强烈推荐:** 利用您的显卡实现极速、近乎即时的语音识别。
  * *要求:* 您**必须**拥有 NVIDIA 显卡并安装了 [NVIDIA CUDA Toolkit 12.x](./../tutorial/initial-setup)。
* **CPU (回退):** 利用您计算机的主处理器。
  * *何时使用:* 如果您拥有 AMD 或 Intel GPU，或者如果在启动时遇到 CUDA 错误，请选择此项。请注意，CPU 处理明显慢于 GPU 处理。

<img 
  src={require('./img/settings-device.jpg').default} 
  width="900" 
  alt="Settings Device" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## Whisper 模型选择

SyncVRC 允许您选择用于语音识别的离线 Whisper AI 模型的大小。这让您可以根据计算机的硬件功能 (VRAM) 和速度来自定义和平衡转录准确性。

* **模型大小:** 您可以从 **Tiny**（速度最快，准确度最低，占用约 1GB 内存）到 **Large-v3**（速度最慢，准确度最高，需要约 10GB 内存）之间进行选择。默认值为 **Medium**，它为清晰的音频提供了最佳的整体平衡。
* **自动下载:** 如果您选择了以前未使用的模型大小，SyncVRC 将自动提示您下载所需的文件。
* **清除缓存 (存储管理):** 下载的 AI 模型会占用硬盘空间。如果您的磁盘空间不足，可以点击 **Clear Cache (清除缓存)** 按钮来安全地删除所有未使用的模型并回收存储空间。*（注意：基础的 'Medium' 模型无法删除。）*

<img 
  src={require('./img/settings-model.jpg').default} 
  width="900" 
  alt="Settings Whisper Model" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>
