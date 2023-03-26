# BlogGallery

# 📌 Concept

- 이미지, 글로 이루어진 블로그

# 🔎 Features

- Mock Service Worker (MSW)
- Rendering 최적화
- Loading 최적화

# 🤔 Challenge

- **이미지 최적화**
    - 이미지 요청 시 파라미터로 해상도 조절
        - Thumbnail 120KB → 10KB
        - Main 2MB → 70KB
    - 이미지 프리로드
        - 마우스 오버되면 이미지 프리로드 → 사용자가 상세페이지 접근시 보다 빠른 로딩을 지원
        
- **특정 함수 병목현상**
    - 텍스트의 특수문자를 제거하는 removeSpecialCharacter 최적화
    - Preview에서 쓰이는 내용 모두를 함수에 넣을 필요는 없고 최대 300자까지만 처리하면 됨.
    - 가독성 + 효율성을 높이기위해 정규식으로 변경
        
        
- **코드 스플리팅**
    - cra-bundle-analyzer로 View, List에 불필요한 스크립트가 로드됨을 확인함
    - suspense와 lazy를 이용해서 View와 List를 동적으로 임포트
    
- **폰트 최적화**
    - 폰트 사이즈 줄이기
        - 웹폰트 포맷(woff, woff2)를 지원하는 브라우저에서 사용할 수 있도록 함
        - tff(2.1MB) → woff2(512KB)
    - 폰트 preload
        - 이 사이트는 글이 중요한 사이트이므로 폰트를 미리 다운받는 것이 중요하다고 판단
            - react-app-rewired를 이용하면, CRA로 구성한 프로젝트에서 webpack 설정 파일에 접근하여 커스터마이징함
            - preload-webpack-plugin로 폰트를 preload함
    - 폰트 적용 시점
        - font-display : block;으로 FOIT를 적용함
        - 폰트를 미리 다운로드 받고 폰트가 적용된 글을 보여줌

- **최적화 결과**
    |Before|After|
    |------|------|
    |<img width="350" alt="before_optimizing_1" src="https://user-images.githubusercontent.com/79697414/227763258-10b54760-984f-4a0b-86f9-6c82f7c75129.png">   |<img width="350" alt="Screenshot 2023-03-26 at 4 24 32 PM" src="https://user-images.githubusercontent.com/79697414/227763319-a62658fa-c0e7-4597-8105-b3713687b1a7.png">


    
    
    
    # **🛠 Stacks**
    
    - React, Typescript
    - styled-components
    - MSW
    - cra-bundle-analyzer, react-app-reweird, preload-webpack-plugin
