## Unsplash Image API를 활용한 이미지 검색 사이트 만들기

## 💻 개발환경
1. 프로젝트 환경설정(vite를 활용한 React 프로젝트) 설치 : 	`npm install vite@latest` <br/>
2. React 중앙집중식 상태관리 Recoil 설치 : `npm install recoil` <br/>
3. 외부 오픈 API 통신을 위한 라이브러리 axios 설치 : `npm install axios` <br/>
4. CSS 스타일링을 위한 SASS/SCSS 설치 : `npm install -D sass` <br/>
5. React Router 설치 : `npm install react-router-dom lacalforage match-sorter sort-by` <br/>
6. Typescript에서 Node.js 모듈을 쓸 수 있도록 도와주는 환경 구축 : `npm install @types/node` <br/>
7. React Toast Popup 모듈 설치 : `npm install react-simple-toasts` <br/>

## 📌 브랜치 전략

> 강의 기반 학습 프로젝트에서 기능 단위 및 시간 단위로 관리할 수 있도록 브랜치를 구분합니다.
> 

### 🏷️ main

- 최종 메인 브랜치
- 모든 강의 내용을 통합하여 정리된 버전

### 🧪 develop

- 강의 단위로 개발 기능들을 통합하는 중간 브랜치

### 📅 day/{날짜}

- 하루 동안 수강한 강의 내용을 정리하는 브랜치
- 예 : `day/0413`
- PR 용도로 사용, `develop` 브랜치를 대상으로 병합 요청

### 📘 lecture/{강의차수-기능명}

- 각 강의 단위로 브랜치 생성
- 예 : `lecture/05-header`
- 강의 수강 후 `day` 브랜치를 대상으로 병합 요청

### 🛠️ feature/{기능명}

- 강의 외 추가 기능을 개발할 때 사용할 브랜치
- 예 : `feature/router`
- 작업 완료 후 day 브랜치 생성 → PR
---
📺 [2024 React Full Course (feat. Recoil) React Basic 강의](https://youtu.be/Yv5tSNr4h2c?si=cIBt-N91Y3j-zKzE)