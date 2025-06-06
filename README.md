# PopClip Extension - deepL translation
![GitHub stars](https://img.shields.io/github/stars/inchans/popclip-deepL-webTranslation?style=flat&logo=apachespark)
![GitHub all releases](https://img.shields.io/github/downloads/inchanS/popclip-deepL-webTranslation/total?logo=github) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/inchanS/popclip-deepL-webTranslation?logo=rocket)  [![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)



2024-10-10 기준, [PopClip Extensions Directory](https://www.popclip.app/extensions/)의 리스트에 있는 [DeepL Translate](https://www.deepl.com/en/translator) Extension이 제대로 작동하지 않는다.  
해당 확장은 deepL의 App, Website 둘 중 하나를 선택하여 사용할 수 있도록 JS,TS로 동작하게 되어있는데 일단 Website 선택시 해당 페이지로 이동만 할 뿐, 선택된 텍스트가 전달되지 못하는 문제가 있다.    

기존 Extension이 제대로 동작하지 않는 현재 조건은 다음과 같다. 
- macOS 15.0.1
- PopClip ver 2024.5.2

### 문제
1. **Website** 사용의 경우 전달 URL의 해시값과 관련된 API가 변경된듯 보인다.
2. **APP** 사용의 경우 앱 호출이 안된다. 

### Official Extension과의 차이점
이 extension은 **website로만 연결** 가능합니다.  
1. 웹사이트를 통한 기능은 그대로 작동할 수 있도록 url 해시 부분만 수정
2. APP 또는 Website를 고를 수 있는 Option 제거(target Language 선택창은 그대로)
3. 불필요한 APP 작동 코드 제거 
4. Default language 값을 한국어로 변경 

아래 링크에서 다운로드 받을 수 있다.



[최신버전 다운로드](https://github.com/inchanS/popclip-deepL-webTranslation/releases/latest)

