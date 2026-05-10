# 🌐 VRC DUAL EZ Translator by Meiji
> **Real-time Dual-way Translation for VRChat using Faster-Whisper & Gemini 2.5**

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.10%2B-brightgreen.svg)
![NVIDIA](https://img.shields.io/badge/GPU-NVIDIA%20Required-green.svg)

---

### 📝 Documentation / マニュアル
*Click on the sections below to expand the information.*

---

## 🛠️ Setup Guides

<details>
<summary><b>🇺🇸 [EN] English Setup Guide</b></summary>

### 1️⃣ Preparation
* **Extract ZIP:** You must **"Extract All"** files from the provided ZIP file. Do not run the `.exe` directly from within the ZIP, as this will cause an error.
* **CUDA Toolkit (CRITICAL):** This AI tool requires CUDA to run. Download and install **NVIDIA CUDA Toolkit 12.x**.
    * 👉 [Download Link](https://developer.nvidia.com/cuda-12-9-1-download-archive)
    * ⚠️ **Reboot required:** You **MUST restart your computer** after installation, or the app will crash.

### 2️⃣ Gemini API Key
Access Google AI Studio to create your free Gemini API Key.
1.  Go to https://aistudio.google.com/ and log in with your Google (Gmail) account.
2.  Open the API Key management page: https://aistudio.google.com/app/api-keys.
3.  Click the **"Create API key"** button.
4.  Select **"Create API key in a new project"**. The system will automatically create it for you.
5.  Click **"Copy"** next to the generated alphanumeric string and paste it into the "Gemini API Key" field at the top of the app.

### 3️⃣ Pricing & Billing
The Gemini API offers two tiers: "Free" and "Pay-as-you-go".

| Feature | Free Tier | Pay-as-you-go (Prepaid) |
| :--- | :--- | :--- |
| **Cost** | 0 Yen (Completely free) | Minimum ~1,500 Yen |
| **Rate Limit** | ~15 translations/minute | Virtually no limits |
| **Experience** | May temporarily pause if you speak too fast | Extremely smooth conversation |

> **Note:** For Pay-as-you-go, you are charged only for what you use, and purchased credits are valid for **1 year**. We recommend trying the Free tier first!

#### 💳 How to Setup Billing (For Pay-as-you-go)
1.  Go to the billing page: https://aistudio.google.com/app/billing.
2.  Click **"Set up billing"** next to your project.
3.  Follow the instructions to create or select a Google Cloud **Billing Account**.
4.  Register your credit or debit card information.
5.  On the "Buy credits" screen, enter your charge amount (Min ~1,500 Yen or $10). *Recommendation: Leave Auto-reload "Off" initially.*

### 4️⃣ Launching the App
* Open your extracted folder and double-click `VRC DUAL EZ Translator.exe`.
* Select your preferred language from the top right settings.

**⚠️ IMPORTANT: First Startup Note**
When you launch the app for the first time, a black console window will appear and seem to freeze. This is because it is downloading a **1.5GB AI model** to your PC. **Absolutely DO NOT close the black screen**; wait until the main screen appears. (Subsequent startups will be instant).
</details>

<details>
<summary><b>🇯🇵 [JP] 日本語のセットアップガイド</b></summary>

### 1️⃣ 準備
* **ZIPの解凍:** 送ったZIPファイルを必ず**「すべて展開(解凍)」**してください。(ZIPファイルの中で直接 `.exe` を開かないでください。エラーになります)
* **CUDA Toolkitのインストール (超重要):** このAIツールを動かすにはCUDAが必要です。以下のリンクからダウンロードしてインストールしてください。
    * 👉 [ダウンロードリンク](https://developer.nvidia.com/cuda-12-9-1-download-archive)
    * ⚠️ インストールが終わったら、**必ずパソコンを再起動**してください。(再起動しないとアプリがクラッシュします)

### 2️⃣ Gemini API キーの取得
Google AI Studio で無料の「Gemini APIキー」を作成してください。
1.  まず、https://aistudio.google.com/ にアクセスして、自分のGoogleアカウント (Gmail) でログインしてください。
2.  ログインが完了したら、管理画面に移動します：https://aistudio.google.com/app/api-keys
3.  画面内にある**「Create API key」**というボタンをクリックします。
4.  **「Create API key in a new project」**という選択肢をクリックしてください。システムが自動的に作成してくれます。
5.  少し待つと長い文字列(APIキー)が表示されます。横にある「Copy」ボタンを押してコピーし、アプリの「Gemini API Key」入力欄に貼り付け(ペースト)すれば完了です!

### 3️⃣ 料金と制限について
Gemini APIには「無料枠」と「有料枠」の2種類があります。

| 項目 | 無料枠 (Free Tier) | 有料枠 (プリペイド方式) |
| :--- | :--- | :--- |
| **費用** | 0円 (完全無料) | 最低約1,500円〜 |
| **制限** | 1分間に約15回まで | 翻訳速度の制限がほぼ無くなる |
| **快適さ** | 早口だと一時的に止まることがあります | 会話が非常にスムーズになります |

> **注意:** 従量課金ですが「一度チャージすれば使い切るまで有効」です。購入したクレジットは**1年間有効**です。まずは無料枠で試すのがおすすめだよ!

#### 💳 お支払い方法 (Billing) の設定手順
APIの制限を解除して有料枠を使うための手順だよ。
1.  お支払いページを開いてね：https://aistudio.google.com/app/billing
2.  使いたいプロジェクトの横にある**「Set up billing」**をクリックしてね。
3.  画面の指示に従って、Google Cloudの「請求先アカウント (Billing Account)」を作成するか選んでね。
4.  クレジットカードまたはデビットカードの情報を登録してね。
5.  「Buy credits」画面でチャージする金額(最低約1,500円または10ドル相当)を入力してね。*念のため最初はAuto-reload(自動補充)を「オフ」にしておくのがおすすめ!*

### 4️⃣ アプリの起動
* 解凍したフォルダの中にある `VRC DUAL EZ Translator.exe` をダブルクリックして起動します。
* 起動後、右上の言語設定จาก「日本語」を選んでね。

**⚠️ 初回起動時の重要な注意 (必ず読んでね)**
初めて起動する時、黒い画面(コンソール)のまましばらくフリーズしたようになります。これは**1.5GBのAIモデル**をPCにダウンロードしているためです。**絶対に黒い画面を閉じずに**、メイン画面が表示されるまで待ってください。(2回目以降はすぐに起動します)
</details>

---

## 🚀 Usage Guides

<details>
<summary><b>🇺🇸 [EN] English Usage & Audio Routing</b></summary>

### 1️⃣ Voice Translation
1.  Launch `VRC DUAL EZ Translator.exe`.
2.  Paste your Gemini API Key at the top.
3.  **Outgoing System (Speak to VRChat):**
    * Select your physical Microphone.
    * Choose your language and the language you want to translate to.
    * Click **Start Outgoing**.
4.  **Incoming System (Listen to others):**
    * Select your Loopback audio device (See *Audio Routing* below).
    * Choose the language you are listening to, and your native language.
    * Click **Start Incoming**.

### 2️⃣ Manual Translation (Type to Send)
If you prefer typing over speaking, use the **Manual Translate** box:
* Type your text into the input field under "Manual Translate (Type and Send)".
* Press **Enter** on your keyboard or click the **Send** button.
* The app will automatically translate your text and send it directly to the VRChat Chatbox.
* *Note: The Outgoing System must be started before using this feature.*

### 🎧 Audio Routing Note (For Incoming System)
To translate other players, the app needs to "hear" your game audio. **You cannot simply select your "Speakers/Headphones" directly in the app.**
* You must use an audio routing method like Windows' built-in **Stereo Mix**, or a Virtual Audio Cable (e.g., VB-Cable, Voicemeeter, Wave Link) to route the game's output into a readable "Input" for the translator.

### ⚠️ Known Limitations
Please understand that this tool operates with real-time AI, which comes with natural limitations:
* **Translation Speed & Bugs:** Translation relies on cloud APIs. You may experience delays, or the app might occasionally skip a sentence if the API rate limit is reached or the network drops.
* **AI Hearing Accuracy:** The Whisper AI model is highly sensitive. However, if multiple people talk at once, if there is loud game BGM, or if people use heavy slang, the AI might mishear words or occasionally "hallucinate" text. Please use this tool to get the "gist" of the conversation rather than expecting 100% flawless subtitles.
</details>

<details>
<summary><b>🇯🇵 [JP] 日本語 使い方と音声設定</b></summary>

### 1️⃣ 音声翻訳の使い方
1.  `VRC DUAL EZ Translator.exe` を起動します。
2.  発行された Gemini API キーを上部の入力欄に貼り付けます。
3.  **送信システム (自分の声をVRChatへ):**
    * 自分のマイクを選択します。
    * 自分の言語と、翻訳したい言語を選びます。
    * **Start Outgoing (送信開始)** をクリックします。
4.  **受信システム (他人の声を翻訳):**
    * ループバックオーディオデバイスを選択します（下記の「音声ルーティング」参照）。
    * 相手の言語と、翻訳先の言語（日本語）を選びます。
    * **Start Incoming (受信開始)** をクリックします。

### 2️⃣ 手動翻訳の使い方 (チャット入力)
声を出さずに文字を打ち込んで翻訳したい場合は、**Manual Translate** 機能を使います。
* 「Manual Translate (Type and Send)」の下にある入力欄にテキストを入力します。
* キーボードの **Enter** キーを押すか、**Send** ボタンをクリックしてください。
* アプリが自動的に翻訳を行い、VRChatのチャットボックスに直接送信します。
* ※この機能を使用するには、送信(Outgoing)システムが開始されている必要があります。

### 🎧 音声ルーティングについて (受信システム用)
他人の声を翻訳するには、ゲーム音声をアプリに「聴かせる」必要があります。**通常の「スピーカー」や「ヘッドフォン」を直接選択することはできません。**
* Windows標準の**「ステレオミキサー (Stereo Mix)」**を使用するか、仮想オーディオケーブル (VB-Cable, Voicemeeter, Wave Linkなど) を使って、デスクトップ音声をマイク入力としてルーティング（迂回）させる必要があります。

### ⚠️ 仕様と制限事項
このツールはリアルタイムAIを使用しているため、以下のような技術的な限界があります。あらかじめご了承ください。
* **翻訳の遅延とバグ:** クラウドAPIを使用しているため、通信状況やAPIの制限により翻訳が遅延したり、一時的に文章がスキップされたりすることがあります。
* **AIの音声認識の限界 (精度について):** Whisper AIは非常に優秀ですが、複数の人が同時に話したり、ゲームのBGMが大きかったり、スラングが多い場合、AIが言葉を聞き間違えたり、幻覚（存在しない言葉を生成）を起こすことがあります。完璧な字幕を求めるのではなく、会話の「ニュアンスを掴む」目的でご活用ください。
</details>

---

<br>

*credit by Meiji ღ*
