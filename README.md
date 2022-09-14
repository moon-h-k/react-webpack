# react-webpack

> react, webpack, babel 환경설정 처음부터 끝까지 만들어보는 프로젝트 연습장소

## 기본 지식
#### Node.js 란?
-  Node.js는 브라우저 밖에서도 자바스크립트를 실행할 수 있는 환경을 의미합니다. 
-  NPM(Node Package Manager)는 명령어로 자바스크립트 라이브러리를 설치하고 관리할 수 있는 패키지 매니저입니다.
   -  NPM 로컬 설치: 프로젝트내부 node_modules 폴더에 생성
   -  NPM 전역 설치: 전역 설치 경로에 위치 (mac: /usr/local/lib/node_modules)
   -  NPM 지역 설치를 할 때는 해당 라이브러리가 배포용(dependencies)인지 개발용(devDependencies)인지 꼭 구분해주어야 합니다

#### 모듈 시스템: CommonJS, AMD, UMD, ES6
- CommonJS
  - 서버사이드 및 데스크탑 어플리케이션에서 지원하기 위해 만든 방식으로 Node.js에서 사용 가능하다.
  - require, module.exports를 사용하는 방식이다. 
  - module.exports의 module은 예약어이며 현재 모듈에 대한 정보를 가지고 있는 객체이다.
- AMD(Asynchronous Module Definition)
  - 비동기 모듈에 대한 표준안.
  - 모듈 로딩이 다 될때까지 동기로 기다릴 수 없기 때문에 비동기 모듈방식이 브라우저쪽에서 더 큰 효과를 발휘한다.
  - define(), require()를 사용하는 방식이다.
  - 모듈로더로는 RequireJS를 추천한다.
- UMD
  - CommonJS, AMD를 통합하기 위한 하나의 패턴.
- ES6(ES2015) 방식
  - import, export 방식을 사용한다.
  - 모든 브라우저가 지원하지 않기 때문에 Babel의 @babel/plugin-transform-modules-commonjs을 통해 컴파일한다.
  - export하는 방식에 따라 import해서 사용하는 방식이 달라진다.

## 실행 순서

1. Package.json 생성

```
- npm init
```

2. react, react-router-dom install

> [참고] <br/>
> react-router - 웹&앱 <br/>
> react-router-dom - 웹 <br/>
> react-router-native -앱 

```
- npm install reat react-router-dom 
```

3. webpack install
   
> [참고]<br/>
>> webpack-cli는 터미널에서 webpack 커맨드를 실행할 수 있게 해주는 커맨드라인 도구입니다. 

```
- npm install --save-dev webpack webpack-cli
```


