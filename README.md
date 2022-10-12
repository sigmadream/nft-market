# NFT Market

## Step0

> `next.js` 프로젝트 설정 및 코드 퀄리티(`ESLint`)를 위한 환경 설정

* 설치

```
$ npm install
$ npm run dev
```

## Step1

> [https://tailwindcss.com/](https://tailwindcss.com/)를 활용한 Layout 구성

## Step2

* [polygon](https://polygon.technology/)
* [Hardhat](https://hardhat.org/)

```
$ npx hardhat
$ npm install --save-dev "hardhat@^2.10.2" "@nomicfoundation/hardhat-toolbox@^1.0.1"
$ npx hardhat help
$ npx hardhat test
$ GAS_REPORT=true npx hardhat test
$ npx hardhat node
$ npx hardhat run scripts/deploy.js
```

* [Metamask](https://metamask.io/)
    * 가입 후 테스트 네트워크 활성화
    * Localhost 8546 -> 키 내보내기 -> `.secrect` 생성

* VSCode 확장 중 [solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) 설치
