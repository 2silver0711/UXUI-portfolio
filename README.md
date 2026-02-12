# UX/UI Designer Portfolio

React 기반의 UX/UI 디자이너 포트폴리오 웹사이트입니다.

## 🎯 시작하기

**처음 시작하시나요?** → [`START_HERE.md`](START_HERE.md) 파일을 먼저 읽어주세요!

- **Figma Make에서 다운로드**: [`DOWNLOAD_GUIDE.md`](DOWNLOAD_GUIDE.md)
- **빠른 시작 가이드**: [`QUICK_START.md`](QUICK_START.md)
- **상세 배포 가이드**: [`DEPLOYMENT_GUIDE.md`](DEPLOYMENT_GUIDE.md)

## 🚀 기술 스택

- **React 18** - UI 라이브러리
- **React Router** - 다중 페이지 라우팅
- **Tailwind CSS v4** - 스타일링
- **Vite** - 빌드 도구
- **TypeScript** - 타입 안정성
- **GitHub Pages** - 호스팅

## 📦 프로젝트 구조

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/     # 재사용 가능한 컴포넌트
│   │   ├── data/          # 프로젝트 데이터
│   │   ├── pages/         # 페이지 컴포넌트
│   │   ├── App.tsx        # 메인 앱 컴포넌트
│   │   └── routes.ts      # 라우팅 설정
│   ├── assets/            # 이미지 및 정적 파일
│   ├── imports/           # SVG 파일
│   ├── styles/            # 글로벌 스타일
│   └── main.tsx          # 앱 엔트리 포인트
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions 배포 설정
└── vite.config.ts         # Vite 설정
```

## 🛠️ 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/2silver0711/UXUI-portfolio.git
cd UXUI-portfolio
```

### 2. 의존성 설치

이 프로젝트는 `pnpm`을 사용합니다:

```bash
# pnpm이 설치되어 있지 않다면
npm install -g pnpm

# 의존성 설치
pnpm install
```

### 3. 개발 서버 실행

```bash
pnpm run dev
```

브라우저에서 `http://localhost:5173`으로 접속하여 확인할 수 있습니다.

### 4. 프로덕션 빌드

```bash
pnpm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

## 🌐 배포

### GitHub Pages 자동 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 배포됩니다.

1. **GitHub 저장소 설정**
   - 저장소의 Settings > Pages로 이동
   - Source를 "GitHub Actions"로 선택

2. **자동 배포**
   - `main` 브랜치에 push하면 자동으로 빌드 및 배포됩니다
   - Actions 탭에서 배포 진행 상황을 확인할 수 있습니다

3. **배포 URL**
   - `https://2silver0711.github.io/UXUI-portfolio/`

## 📝 프로젝트 수정 방법

### 새로운 프로젝트 추가하기

1. **이미지 준비**
   - 프로젝트 이미지를 `src/assets/` 폴더에 추가

2. **데이터 파일 수정**
   - `src/app/data/projects.ts` 파일 열기
   - 이미지 import 추가
   - `projects` 배열에 새 프로젝트 객체 추가

```typescript
// 예시
import newProjectImg from "figma:asset/이미지파일명.png";

export const projects: Project[] = [
  {
    id: 'new-project',
    category: 'service', // 또는 'uxui', 'product'
    title: '프로젝트 이름',
    period: '2024.01 ~ 02',
    description: '프로젝트 설명',
    thumbnail: newProjectImg,
    // ... 나머지 필드
  },
  // ... 기존 프로젝트들
];
```

### 스타일 수정

- **전역 스타일**: `src/styles/theme.css` 수정
- **폰트**: `src/styles/fonts.css`에서 관리
- **Tailwind 설정**: Tailwind v4를 사용하므로 `tailwind.config.js` 없이 CSS로 관리

## 🎨 디자인 시스템

- **색상**: 검정, 화이트, 그레이, 붉은 톤
- **폰트**: EB Garamond, Suisse Int'l, Pretendard
- **스타일**: 글래스모피즘, 그라데이션 배경
- **반응형**: 1440px 표준 사이즈 기준

## 📄 페이지 구조

- **Home (`/`)** - 랜딩 페이지
- **Profile (`/profile`)** - 프로필 및 경력
- **Projects (`/projects`)** - 프로젝트 목록
- **Project Detail (`/projects/:id`)** - 프로젝트 상세 페이지

## 🔧 VS Code 추천 확장 프로그램

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Path Intellisense

## 📮 문의

궁금한 점이 있으시면 이슈를 남겨주세요!