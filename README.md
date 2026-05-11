<div align="center">
  <img src="icon.png" alt="SyncVRC Logo" width="120" />
  <h1>🌐 SyncVRC</h1>
  <p><b>Break the Language Barrier in VRChat. Lightning-Fast, Context-Aware Voice Translation Powered by Faster-Whisper & Advanced AI.</b></p>

  ![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)
  ![Python](https://img.shields.io/badge/python-3.10%2B-brightgreen.svg)
  ![NVIDIA](https://img.shields.io/badge/GPU-NVIDIA%20Required-green.svg)

  <b>☕ Buy me a snack to support my work!</b><br>
  <a href="https://ko-fi.com/meijivrc" target="_blank"><img src="https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white" alt="Ko-fi"></a>
  <a href="https://www.patreon.com/meijino" target="_blank"><img src="https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white" alt="Patreon"></a>
  <br><br>
</div>

---

<div align="center">
  <h3>📖 <a href="https://finalsiren1.github.io/SyncVRC/" target="_blank">Official Documentation & Manual</a></h3>
  <p>For Setup Guides, Usage Instructions, and feature deep-dives, please visit our official website.</p>
</div>

---

## 🌍 Read in Your Language

<details>
<summary><b>🇯🇵 [JP] 日本語で読む (Japanese)</b></summary>

### 🚀 SyncVRCへようこそ
SyncVRCは、VRChat向けに特化して開発された次世代のリアルタイム音声翻訳ツールです。Faster-Whisperによる高精度な音声認識と、高度なAI（Gemini, DeepL, OpenAI等）の圧倒的な文脈理解力を組み合わせることで、言語の壁を感じさせないスムーズなコミュニケーションを実現します。

### ✨ 主な機能とメリット
* **🎙️ 完璧な双方向翻訳:** あなたの声を翻訳してVRChatのチャットボックスに送信する「送信(Outgoing)」と、他人の声を聞き取って自国語に翻訳する「受信(Incoming)」の両方をサポート。
* **🧠 スマート VRC Mute Sync:** VRChat内でマイクをミュートすると（OSC経由）、アプリの翻訳も自動的に一時停止します。プライバシーを守り、APIの無駄な消費を防ぎます。
* **⚡ 完全自動アップデート:** アプリ内に自動アップデーターを搭載。常にワンクリックで最新の機能とバグ修正を利用できます。
* **🔒 完全なプライバシー保護:** あなたのAPIキーはPC内にローカル保存（`config.json`）されます。アプリは各公式APIおよびVRChat（ローカルOSC）と直接通信するだけで、私たちがあなたのキーや音声データを収集・保存することは一切ありません。
* **🎛️ プロレベルのオーディオ制御:** AIの認識精度（Beam Size）、無音待機時間、最大録音時間を細かく調整し、あなたのプレイスタイルに最適化できます。
* **🗣️ 対応言語:** 日本語、英語、中国語、韓国語に完全対応。

### ⚠️ 既知の制限事項（ご購入/ご利用の前に）
私たちは完璧ではありません。以下の点にご注意ください：
* **クラウドAPIの依存:** クラウドAPIを使用しているため、ネットワークの遅延や、各APIのレート制限（特に無料枠の場合）により翻訳が遅れたりスキップされたりすることがあります。
* **騒音下でのAIの限界:** Whisper AIは非常に優秀ですが、複数の人が同時に話している状況、大きなBGM、または強いスラングがある場合、言葉を聞き違えたり「幻覚（存在しない言葉を出力）」を見たりすることがあります。完璧な字幕ではなく、会話の「ニュアンスを掴む」目的でご活用ください。
</details>

<details>
<summary><b>🇨🇳 [ZH] 阅读中文版 (Chinese)</b></summary>

### 🚀 欢迎使用 SyncVRC
SyncVRC 是一款专为 VRChat 打造的新一代实时语音翻译工具。结合了 Faster-Whisper 的高精度语音识别与先进云端 AI (Gemini, DeepL, OpenAI 等) 强大的上下文理解能力，让您在虚拟现实中畅通无阻地与世界各地的玩家交流。

### ✨ 核心功能与优势
* **🎙️ 双向无缝翻译:** 同时支持“输出 (Outgoing)”（将您的声音翻译并发送至 VRChat 聊天框）和“输入 (Incoming)”（将他人的声音翻译到应用界面）。
* **🧠 智能 VRC 静音同步:** 当您在 VRChat 中静音麦克风时（通过 OSC），翻译会自动暂停。保护您的隐私，同时节省 API 配额。
* **⚡ 全自动更新:** 内置自动更新系统，告别繁琐的手动下载，一键应用最新版本。
* **🔒 绝对的隐私保护:** 您的 API 密钥仅保存在本地（`config.json`）。应用程序严格只与官方 API 和本地 VRChat 通信。我们绝不收集或存储您的密钥与语音数据。
* **🎛️ 专业级音频控制:** 自由调整 AI 准确度 (Beam Size)、静音超时和最大录音时间，完美适应您的说话节奏。
* **🗣️ 支持语言:** 全面支持中文、英文、日文和韩文。

### ⚠️ 已知限制（真诚提示）
我们力求完美，但仍有局限：
* **依赖云端 API:** 翻译速度取决于网络状态和云端 API 的响应。如果您使用的是免费层 (Free Tier)，可能会遇到频率限制导致的延迟或跳字。
* **嘈杂环境下的 AI 幻觉:** Whisper AI 听力极佳，但在多人同时说话、BGM 很大或使用重度俚语时，AI 可能会听错或产生“幻觉（无中生有）”。请将本工具作为获取对话“大意”的辅助，而非 100% 完美的字幕。
</details>

<details>
<summary><b>🇰🇷 [KO] 한국어로 읽기 (Korean)</b></summary>

### 🚀 SyncVRC에 오신 것을 환영합니다
SyncVRC는 VRChat 사용자를 위해 특별히 제작된 차세대 실시간 음성 번역 도구입니다. Faster-Whisper의 강력한 음성 인식과 고급 클라우드 AI(Gemini, DeepL, OpenAI 등)의 문맥 이해 능력을 결합하여 VR에서 언어의 장벽을 허물어줍니다.

### ✨ 주요 기능 및 장점
* **🎙️ 완벽한 양방향 번역:** 내 목소리를 번역해 VRChat 챗박스에 띄우는 송신(Outgoing)과 다른 사람의 목소리를 번역해 보여주는 수신(Incoming)을 모두 지원합니다.
* **🧠 스마트 VRC 음소거 동기화:** VRChat에서 마이크를 음소거하면(OSC 경유) 번역도 자동으로 일시 중지됩니다. 사생활을 보호하고 API 할당량 낭비를 막아줍니다.
* **⚡ 전자동 업데이트:** 번거로운 수동 패치 없이 클릭 한 번으로 최신 버전을 유지하는 내장 자동 업데이터.
* **🔒 완벽한 프라이버시 보장:** 귀하의 API 키는 PC에 로컬로 저장됩니다(`config.json`). 이 앱은 오직 공식 API 및 로컬 VRChat과만 통신하며, 어떠한 음성 데이터나 키도 수집하거나 저장하지 않습니다.
* **🎛️ 전문가급 오디오 설정:** AI 정확도(Beam Size), 무음 대기 시간, 최대 녹음 시간을 내 플레이 스타일에 맞게 직접 세팅할 수 있습니다.
* **🗣️ 지원 언어:** 한국어, 영어, 일본어, 중국어를 완벽 지원합니다.

### ⚠️ 알려진 한계 (사용 전 주의사항)
SyncVRC는 완벽하지 않으며 다음과 같은 한계가 있습니다:
* **클라우드 API 의존성:** 클라우드 API를 사용하므로, 네트워크 지연이나 API 호출 제한(특히 무료 등급의 경우)에 의해 번역이 지연되거나 건너뛸 수 있습니다.
* **소음 환경에서의 AI 환각:** Whisper 모델은 뛰어나지만, 여러 명이 동시에 말하거나 BGM이 클 때, 혹은 은어가 많을 때 잘못 듣거나 '환각(없는 말을 지어냄)'을 일으킬 수 있습니다. 100% 완벽한 자막보다는 대화의 '뉘앙스를 파악'하는 용도로 사용해주세요.
</details>

---

### 🚀 Welcome to SyncVRC
SyncVRC is a next-generation, real-time voice translation tool purpose-built for VRChat. By combining the offline processing power of **Faster-Whisper** for hyper-accurate speech recognition with the advanced contextual understanding of **Cloud AI (Gemini, DeepL, OpenAI)**, we’ve created a seamless bridge across language barriers in virtual reality.

### ✨ Key Features & Benefits

* **🎙️ Seamless Dual-Way Translation**
  Run both Outgoing (translating your microphone to the VRChat Chatbox) and Incoming (translating others' voices to your screen via desktop audio loopback) systems simultaneously.
* **🧠 Smart VRC Mute Sync**
  Privacy first. SyncVRC natively reads your VRChat OSC parameters. When you mute your microphone in-game, your outgoing translation automatically pauses, protecting your privacy and saving your API quota.
* **⚡ Full-Auto Updater**
  Never worry about downloading ZIP files and replacing folders again. SyncVRC features a built-in, one-click automatic updater that patches the software gracefully in the background.
* **🔒 Absolute Privacy Guarantee**
  Your API Keys are saved strictly locally on your machine (`config.json`). The application only communicates directly with official API endpoints and your local VRChat client via OSC. **We do not collect, process, or store your API keys or voice data.**
* **🎛️ Pro-Level Audio Control**
  Take full control of the AI. Adjust the Beam Size (Accuracy vs. Speed), Silence Timeout, and Max Recording durations to perfectly match your speaking cadence.
* **🗣️ Fully Supported Languages:** English, Japanese, Chinese, and Korean.

### ⚠️ Honest Limitations (Please Read)
We want you to have the right expectations. SyncVRC is powerful, but not magic:
* **Cloud API Dependency:** Translation relies on Cloud APIs. If you are on a free API tier, you may experience delays, pausing, or skipped sentences due to rate limits. Network instability will also affect translation speed.
* **AI Hallucinations in Noise:** The Whisper AI model is highly sensitive. However, in heavily crowded worlds, with loud background music, or when multiple people talk over each other, the AI might mishear words or generate "hallucinations" (text that wasn't spoken). Please use this tool to grasp the **"gist"** of the conversation, rather than expecting 100% flawless subtitles.

---

## ❓ FAQ & Troubleshooting

<details>
<summary><b>🇺🇸 [EN] English FAQ</b></summary>

* **Q: Why isn't the app typing in VRChat?**
  * A: Ensure you have enabled OSC in VRChat's radial menu. Also, check if your Windows Firewall or Antivirus is blocking Port 9000 (Default VRChat OSC Port).
* **Q: The translation is slow, pausing, or suddenly stops working.**
  * A: If you are using a free API tier (e.g., Gemini Free Tier), you might have hit the rate limit (too many requests per minute). Please wait a moment or upgrade your API plan for an uninterrupted experience.
* **Q: The app crashes immediately upon clicking Start.**
  * A: Make sure you have installed the **NVIDIA CUDA Toolkit 12.x**. If you just installed it, **you MUST restart your PC** before running the app for the GPU processing to work.
</details>

<details>
<summary><b>🇯🇵 [JP] 日本語 FAQ</b></summary>

* **Q: VRChatに文字が入力されません。**
  * A: VRChatのリングメニューでOSCが有効になっているか確認してください。また、Windowsファイアウォールやセキュリティソフトがポート9000をブロックしていないか確認してください。
* **Q: 翻訳が遅い、途切れる、または突然動かなくなりました。**
  * A: 各APIの無料枠をご利用の場合、制限（レートリミット）に達した可能性があります。少し待つか、スムーズに利用するために有料枠への切り替えをご検討ください。
* **Q: Startボタンを押すとアプリがクラッシュ（強制終了）します。**
  * A: NVIDIA CUDA Toolkit 12.x がインストールされているか確認してください。インストール直後の場合は、アプリを起動する前に**必ずPCを再起動**してください。
</details>

<details>
<summary><b>🇨🇳 [ZH] 中文 FAQ</b></summary>

* **Q: 为什么应用无法在 VRChat 中打字？**
  * A: 请确保您已在 VRChat 的轮盘菜单中启用了 OSC。同时检查您的 Windows 防火墙或杀毒软件是否拦截了 9000 端口。
* **Q: 翻译很慢、经常暂停或突然停止工作。**
  * A: 如果您使用的是免费 API 额度，可能是触发了频率限制。请稍等片刻，或升级您的 API 计划以获得无缝体验。
* **Q: 点击开始后应用程序立即崩溃。**
  * A: 请确保您已安装 **NVIDIA CUDA Toolkit 12.x**。如果您刚刚安装，**必须重启电脑**后才能正常运行。
</details>

<details>
<summary><b>🇰🇷 [KO] 한국어 FAQ</b></summary>

* **Q: VRChat에 텍스트가 입력되지 않습니다.**
  * A: VRChat의 방사형 메뉴에서 OSC가 활성화되어 있는지 확인하세요. 또한 Windows 방화벽이나 백신 프로그램이 포트 9000번을 차단하고 있지 않은지 확인하세요.
* **Q: 번역이 느리거나, 일시 중지되거나, 갑자기 작동을 멈춥니다.**
  * A: 무료 API 등급을 사용하는 경우 한도(분당 요청 수 제한)에 도달했을 수 있습니다. 잠시 기다리시거나, 원활한 사용을 위해 요금제를 업그레이드하는 것을 고려해보세요.
* **Q: 시작 버튼을 누르면 앱이 즉시 크래시(종료)됩니다.**
  * A: **NVIDIA CUDA Toolkit 12.x**가 설치되어 있는지 확인하세요. 방금 설치했다면 앱을 실행하기 전에 **반드시 PC를 재부팅**해야 GPU 처리가 정상 작동합니다.
</details>

---

<div align="center">
  <p><i>Created by Meiji ღ</i></p>
</div>
