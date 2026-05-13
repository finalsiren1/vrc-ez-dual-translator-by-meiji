---
title: AI 및 번역 엔진 구성
sidebar_label: AI 및 번역 엔진 구성
sidebar_position: 2
---

# AI 및 번역 엔진 구성

**AI & Translation Engine (AI 및 번역 엔진)** 섹션은 SyncVRC의 핵심입니다. 텍스트를 번역하는 클라우드 서비스와 음성을 처리하는 로컬 하드웨어를 구성하는 곳입니다.

여기의 설정이 잘못되면 API 오류나 성능 저하가 발생할 수 있으므로 이 가이드를 주의 깊게 따르십시오.

## 번역 엔진

텍스트 번역을 처리할 클라우드 AI 제공업체를 선택합니다.

* **지원되는 엔진:** Google Gemini, DeepL API 및 OpenAI.
* **권장 사항:** **Google Gemini**를 강력히 권장하며 현재 SyncVRC에 완벽하게 최적화되어 믿을 수 없을 정도로 빠른 실시간 응답과 뛰어난 대화 컨텍스트를 제공합니다.

<img 
  src={require('./img/settings-engine.jpg').default} 
  width="900" 
  alt="Settings Engine" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## API 키 관리

클라우드 번역 서비스를 사용하려면 선택한 제공업체의 자체 API 키를 제공해야 합니다.

* **설정 방법:**
  1. 드롭다운에서 선호하는 엔진을 선택합니다.
  2. 비밀 API 키를 **API Key** 입력 필드에 붙여넣습니다.
  3. **Save (저장)**를 클릭합니다.
* **개인 정보 보호 및 스트리머 모드:** 저장되면 텍스트 필드가 잠기고 키가 별표(`********`)로 숨겨집니다. 이렇게 하면 방송이나 화면 공유 중에 실수로 API 키가 유출되는 것을 방지할 수 있습니다.
* **편집 방법:** **Edit (편집)** 버튼을 클릭하여 필드 잠금을 해제하고 새 키를 입력한 다음 다시 저장을 클릭합니다.

<img 
  src={require('./img/settings-apikey.jpg').default} 
  width="900" 
  alt="Settings API Key" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## AI 처리 장치 (음성 텍스트 변환)

이 설정은 오프라인 **Faster-Whisper** 음성 인식 모델을 실행하는 컴퓨터의 하드웨어 구성 요소를 결정합니다.

* **GPU (NVIDIA) - 강력히 권장:** 매우 빠르고 거의 즉각적인 음성 인식을 위해 그래픽 카드를 활용합니다.
  * *요구 사항:* NVIDIA 그래픽 카드가 있고 [NVIDIA CUDA Toolkit 12.x](./../tutorial/initial-setup)가 설치되어 **있어야** 합니다.
* **CPU (대체):** 컴퓨터의 메인 프로세서를 활용합니다.
  * *사용 시기:* AMD 또는 Intel GPU가 있거나 시작 시 CUDA 오류가 발생하는 경우 이 옵션을 선택합니다. CPU 처리는 GPU 처리보다 눈에 띄게 느립니다.

<img 
  src={require('./img/settings-device.jpg').default} 
  width="900" 
  alt="Settings Device" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>

---

## Whisper 모델 선택

SyncVRC를 사용하면 음성 인식에 사용되는 오프라인 Whisper AI 모델의 크기를 선택할 수 있습니다. 이를 통해 컴퓨터의 하드웨어 기능(VRAM) 및 속도와 텍스트 변환 정확도 간의 균형을 맞추고 사용자 지정할 수 있습니다.

* **모델 크기:** **Tiny**(가장 빠름, 가장 낮은 정확도, 약 1GB RAM 사용)부터 **Large-v3**(가장 느림, 가장 높은 정확도, 약 10GB RAM 필요)까지 선택할 수 있습니다. 기본값은 깨끗한 오디오에 대한 전반적인 균형이 가장 좋은 **Medium**입니다.
* **자동 다운로드:** 이전에 사용하지 않은 모델 크기를 선택하면 SyncVRC에서 필요한 파일을 다운로드하라는 메시지를 자동으로 표시합니다.
* **캐시 지우기 (저장소 관리):** 다운로드한 AI 모델은 하드 드라이브 공간을 차지합니다. 디스크 공간이 부족해지면 **Clear Cache(캐시 지우기)** 버튼을 클릭하여 사용하지 않는 모든 모델을 안전하게 삭제하고 저장 공간을 확보할 수 있습니다. *(참고: 기본 'Medium' 모델은 삭제할 수 없습니다.)*

<img 
  src={require('./img/settings-model.jpg').default} 
  width="900" 
  alt="Settings Whisper Model" 
  style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '30px' }} 
/>
