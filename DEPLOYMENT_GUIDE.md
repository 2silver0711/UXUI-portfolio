# GitHub Pages 배포 가이드

이 가이드는 포트폴리오를 GitHub와 VS Code로 관리하고 GitHub Pages에 배포하는 방법을 설명합니다.

## 📋 사전 준비

1. **Git 설치** (아직 설치하지 않았다면)
   - Windows: https://git-scm.com/download/win
   - Mac: `brew install git` 또는 https://git-scm.com/download/mac

2. **VS Code 설치**
   - https://code.visualstudio.com/

3. **Node.js 설치** (v18 이상)
   - https://nodejs.org/

4. **pnpm 설치**
   ```bash
   npm install -g pnpm
   ```

## 🚀 Step 1: GitHub 저장소 설정

### 1-1. 로컬에서 Git 초기화

터미널이나 VS Code의 터미널을 열고 프로젝트 폴더로 이동:

```bash
# 현재 Figma Make에서 작업한 프로젝트 폴더로 이동
cd /path/to/your/portfolio

# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Portfolio website"
```

### 1-2. GitHub에 저장소 생성

1. https://github.com 로그인
2. 우측 상단 `+` 버튼 클릭 > "New repository"
3. Repository name: `UXUI-portfolio`
4. Public으로 설정
5. README, .gitignore, license는 **추가하지 않음** (이미 있음)
6. "Create repository" 클릭

### 1-3. GitHub 저장소와 연결

GitHub에서 생성한 저장소 페이지에 나오는 명령어 사용:

```bash
# GitHub 저장소 연결
git remote add origin https://github.com/2silver0711/UXUI-portfolio.git

# main 브랜치로 이름 변경 (필요한 경우)
git branch -M main

# GitHub에 푸시
git push -u origin main
```

## 🌐 Step 2: GitHub Pages 설정

1. GitHub 저장소 페이지에서 **Settings** 탭 클릭
2. 왼쪽 메뉴에서 **Pages** 클릭
3. **Source** 섹션에서:
   - "Deploy from a branch" 대신 **"GitHub Actions"** 선택
4. 저장 (자동 저장됨)

## 🔧 Step 3: VS Code에서 프로젝트 열기

### 3-1. 프로젝트 폴더 열기

VS Code에서:
1. File > Open Folder
2. 프로젝트 폴더 선택

또는 터미널에서:
```bash
code .
```

### 3-2. 추천 확장 프로그램 설치

VS Code에서 다음 확장 프로그램 설치:
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Auto Rename Tag**
- **Prettier - Code formatter**

### 3-3. 의존성 설치

VS Code 터미널에서:
```bash
pnpm install
```

### 3-4. 로컬 개발 서버 실행

```bash
pnpm run dev
```

브라우저에서 `http://localhost:5173/UXUI-portfolio/` 접속하여 확인

## 📤 Step 4: 코드 변경 및 배포

### 일반적인 작업 흐름

1. **VS Code에서 파일 수정**

2. **로컬에서 테스트**
   ```bash
   pnpm run dev
   ```

3. **변경사항 확인 및 커밋**
   ```bash
   # 변경된 파일 확인
   git status
   
   # 모든 변경사항 스테이징
   git add .
   
   # 커밋 (의미있는 메시지 작성)
   git commit -m "프로젝트 이미지 추가"
   ```

4. **GitHub에 푸시**
   ```bash
   git push
   ```

5. **자동 배포 확인**
   - GitHub 저장소의 **Actions** 탭에서 배포 진행 상황 확인
   - 녹색 체크마크가 뜨면 배포 완료
   - `https://2silver0711.github.io/UXUI-portfolio/` 에서 확인

## 💡 VS Code에서의 Git 사용 (GUI 방식)

VS Code에는 내장 Git 기능이 있어 터미널 없이도 사용 가능:

1. **변경사항 확인**: 왼쪽 사이드바의 Source Control 아이콘 (3번째)
2. **파일 스테이징**: 파일 옆 `+` 버튼 클릭
3. **커밋**: 상단 메시지 입력 후 ✓ 버튼
4. **푸시**: `...` 메뉴 > Push

## 🔍 주요 파일 설명

### 프로젝트 데이터 수정
- **`src/app/data/projects.ts`** - 프로젝트 정보 추가/수정

### 페이지 수정
- **`src/app/pages/Home.tsx`** - 홈페이지
- **`src/app/pages/Profile.tsx`** - 프로필 페이지
- **`src/app/pages/Projects.tsx`** - 프로젝트 목록
- **`src/app/pages/ProjectDetail.tsx`** - 프로젝트 상세

### 스타일 수정
- **`src/styles/theme.css`** - 색상, 폰트 등
- **`src/styles/fonts.css`** - 폰트 import

### 설정 파일
- **`vite.config.ts`** - Vite 설정 (base 경로 등)
- **`.github/workflows/deploy.yml`** - GitHub Actions 자동 배포

## 🐛 문제 해결

### 1. 이미지가 안 보일 때

`vite.config.ts`에서 base 경로 확인:
```typescript
base: '/UXUI-portfolio/',
```

### 2. 빌드 에러

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules
pnpm install

# 캐시 클리어
rm -rf .vite
pnpm run build
```

### 3. 로컬에서는 되는데 배포하면 안될 때

- 대소문자 구분 확인 (GitHub은 대소문자 구분)
- import 경로 확인
- `pnpm run build`로 로컬에서 빌드 테스트

### 4. GitHub Actions 배포 실패

- Actions 탭에서 에러 로그 확인
- Settings > Pages에서 Source가 "GitHub Actions"인지 확인
- 저장소가 Public인지 확인

## 📱 모바일에서 테스트

로컬 네트워크에서 모바일 기기로 테스트:

```bash
pnpm run dev -- --host
```

터미널에 나오는 Network 주소로 모바일에서 접속

## 🎯 다음 단계

1. **커스텀 도메인 연결** (선택사항)
   - GitHub Pages Settings에서 Custom domain 설정
   - DNS 레코드 추가

2. **Google Analytics 추가** (선택사항)
   - `index.html`에 Google Analytics 스크립트 추가

3. **SEO 최적화**
   - `index.html`의 meta 태그 수정
   - Open Graph 태그 추가

## 📞 도움이 필요하면

- GitHub Issues: https://github.com/2silver0711/UXUI-portfolio/issues
- VS Code 도움말: Help > Welcome
- Git 기초: https://git-scm.com/book/ko/v2