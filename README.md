# NFT Market

- 설치

```
$ npm install
$ npm run dev
```

- HardHat 설정

  - `npm run node`

  - [Metamask](https://metamask.io/) 설치 및 가입

    - 설정 > 네트워크 > Localhost 8546 선택
    - Localhost 8546 확인
    - 매뉴 > 계정 세부 정보 > 비공개 키 내보내기 > 복사 후 > .secret 파일에 붙여넣기

  - 이더리움 인터페이스 복사

    - `npx hardhat compile` 실행
    - `artifacts/contracts`에서 `json` 파일을 context 폴더에 복사

  - 마켓 주소 생성

    - `npx hardhat run scripts/deploy.js`
    - `NFTMarketplace deployed to: 0x5000000xx` 출력 결과 확인 후 복사
