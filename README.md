# PopClip Extension - deepL translation

2024-10-10 기준, [PopClip Extensions Directory](https://www.popclip.app/extensions/)의 리스트에 있는 [DeepL Translate](https://www.deepl.com/en/translator) Extension이 제대로 작동하지 않는다.  
해당 확장은 deepL의 App, Website 둘 중 하나를 선택하여 사용할 수 있도록 JS,TS로 동작하게 되어있는데 일단 Website 선택시 해당 페이지로 이동만 할 뿐, 선택된 텍스트가 전달되지 못하는 문제가 있다.    
*(웹만 사용하여 왔기에 **App**의 경우 정상작동 여부에 대해 모른다.)*

기존 Extension이 제대로 동작하지 않는 현재 조건은 다음과 같다. 
- macOS 15.0.1
- PopClip ver 2024.5.2

때문에 이전에 기능하던 기능 중 웹사이트를 통한 기능은 그대로 작동할 수 있도록 Plist파일로 구현하였고,  
아래 링크에서 다운로드 받을 수 있다.

[최신버전 다운로드](https://github.com/inchanS/popclip-deepL-webTranslation/releases/latest)

