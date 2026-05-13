---
title: AI & 翻訳エンジン構成
sidebar_label: AI & 翻訳エンジン構成
sidebar_position: 2
---

# AI & 翻訳エンジン構成

**AI & Translation Engine（AIと翻訳エンジン）**セクションはSyncVRCの核です。ここで、テキストを翻訳するクラウドサービスと、音声を処理するローカルハードウェアを設定します。

ここの設定が正しくないと、APIエラーが発生したりパフォーマンスが低下したりする可能性があるため、このガイドに注意深く従ってください。

## Translation Engine（翻訳エンジン）

テキストの翻訳を処理するクラウドAIプロバイダーを選択します。

* **サポートされているエンジン:** Google Gemini、DeepL API、およびOpenAI。
* **推奨:** **Google Gemini**は強く推奨されており、現在SyncVRC用に完全に最適化されており、信じられないほど高速なリアルタイムの応答と優れた会話のコンテキストを提供します。

<img 
  src={require('./img/settings-engine.jpg').default} 
  width="900" 
  alt="Settings Engine" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## APIキーの管理

クラウド翻訳サービスを使用するには、選択したプロバイダーの独自のAPIキーを提供する必要があります。

* **設定方法:**
  1. ドロップダウンからお好みのエンジンを選択します。
  2. シークレットAPIキーを**API Key**入力フィールドに貼り付けます。
  3. **Save（保存）**をクリックします。
* **プライバシーとストリーマーモード:** 保存すると、テキストフィールドがロックされ、キーはアスタリスク（`********`）として隠されます。これにより、配信中や画面共有中に誤ってAPIキーが漏洩するのを防ぎます。
* **編集方法:** **Edit（編集）**ボタンをクリックしてフィールドのロックを解除し、新しいキーを入力して再度「Save」をクリックします。

<img 
  src={require('./img/settings-apikey.jpg').default} 
  width="900" 
  alt="Settings API Key" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## AI処理デバイス (音声認識)

この設定は、コンピューターのどのハードウェアコンポーネントがオフラインの**Faster-Whisper**音声認識モデルを実行するかを決定します。

* **GPU (NVIDIA) - 強く推奨:** グラフィックカードを利用して、超高速のほぼ瞬時の音声認識を実現します。
  * *要件:* NVIDIAグラフィックカードを搭載し、[NVIDIA CUDA Toolkit 12.x](./../tutorial/initial-setup)がインストールされている**必要があります**。
* **CPU (フォールバック):** コンピューターのメインプロセッサを利用します。
  * *使用する場合:* AMDまたはIntelのGPUを使用している場合、または起動時にCUDAエラーが発生した場合は、これを選択します。CPUの処理はGPUの処理よりも著しく遅いことに注意してください。

<img 
  src={require('./img/settings-device.jpg').default} 
  width="900" 
  alt="Settings Device" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## Whisperモデルの選択

SyncVRCでは、音声認識に使用するオフラインのWhisper AIモデルのサイズを選択できます。これにより、文字起こしの精度と、コンピューターのハードウェア機能（VRAM）および速度のバランスをカスタマイズできます。

* **モデルサイズ:** **Tiny**（最速、精度は最も低い、約1GBのRAMを使用）から**Large-v3**（最も遅い、精度は最も高い、約10GBのRAMが必要）まで選択できます。デフォルトは**Medium**で、クリアな音声に対する全体的なバランスが最も優れています。
* **自動ダウンロード:** 以前に使用したことがないモデルサイズを選択した場合、SyncVRCは必要なファイルをダウンロードするように自動的に促します。
* **キャッシュをクリア (ストレージ管理):** ダウンロードされたAIモデルはハードドライブのスペースを消費します。ディスクがいっぱいになってきた場合は、**Clear Cache（キャッシュをクリア）**ボタンをクリックして、使用されていないすべてのモデルを安全に削除し、ストレージスペースを解放することができます。*（注意：基本の 'Medium' モデルは削除できません。）*

<img 
  src={require('./img/settings-model.jpg').default} 
  width="900" 
  alt="Settings Whisper Model" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>
