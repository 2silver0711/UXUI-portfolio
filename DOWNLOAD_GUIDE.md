# 📥 Figma Make 프로젝트 다운로드 가이드

## ⚠️ 중요: 먼저 읽어주세요!

Figma Make는 **온라인 환경**이고, VS Code는 **로컬 환경**입니다.
따라서 VS Code에서 작업하려면 **반드시 Figma Make에서 프로젝트를 다운로드**해야 합니다!

---

## 🔽 Step 1: Figma Make에서 프로젝트 다운로드

### 방법 1: 내보내기 버튼 사용 (권장)

1. **Figma Make 화면 우측 상단**에서 다운로드/내보내기 버튼 찾기
2. **"Download project"** 또는 **"Export"** 클릭
3. ZIP 파일이 다운로드됩니다
4. ZIP 파일을 압축 해제

### 방법 2: 파일 복사 (대안)

만약 다운로드 버튼이 없다면:
1. Figma Make의 모든 파일 내용을 복사
2. 로컬 컴퓨터에 같은 구조로 폴더 생성
3. 각 파일을 수동으로 생성 및 붙여넣기

---

## 📂 Step 2: 다운로드한 파일 확인

압축 해제 후 다음과 같은 구조여야 합니다:

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── routes.ts
│   ├── assets/          # 이미지 파일들
│   ├── imports/         # SVG 파일들
│   ├── styles/
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
├── .gitignore
├── README.md
├── DEPLOYMENT_GUIDE.md
├── QUICK_START.md
└── DOWNLOAD_GUIDE.md (이 파일)
```

### 중요 파일 체크리스트:
- [ ] `package.json` - 의존성 정보
- [ ] `vite.config.ts` - Vite 설정
- [ ] `src/app/data/projects.ts` - 프로젝트 데이터
- [ ] `src/assets/` - Budget Buddy 이미지 11개 포함
- [ ] `.github/workflows/deploy.yml` - 배포 설정

---

## 💻 Step 3: VS Code로 프로젝트 열기

### Windows:
1. 다운로드한 폴더를 원하는 위치로 이동 (예: `C:\Users\YourName\Projects\portfolio`)
2. VS Code 실행
3. `File` > `Open Folder` 클릭
4. 프로젝트 폴더 선택

### Mac:
1. 다운로드한 폴더를 원하는 위치로 이동 (예: `~/Projects/portfolio`)
2. VS Code 실행
3. `File` > `Open...` 클릭
4. 프로젝트 폴더 선택

### 터미널 사용:
```bash
# 프로젝트 폴더로 이동
cd /path/to/downloaded/portfolio

# VS Code로 열기
code .
```

---

## 🛠️ Step 4: 의존성 설치

VS Code에서 프로젝트를 연 후, **반드시** 의존성을 설치해야 합니다:

### VS Code 터미널 열기:
- Windows/Linux: `Ctrl + ~` 또는 `Ctrl + Shift + `` ` ``
- Mac: `Cmd + ~` 또는 `Cmd + Shift + `` ` ``

### 명령어 실행:
```bash
# 1. pnpm이 설치되어 있는지 확인
pnpm --version

# 설치 안 되어 있다면
npm install -g pnpm

# 2. 프로젝트 의존성 설치
pnpm install
```

이 작업은 `node_modules/` 폴더를 생성하고 필요한 모든 패키지를 설치합니다.

---

## ✅ Step 5: 로컬에서 실행 테스트

```bash
# 개발 서버 실행
pnpm run dev
```

브라우저에서 자동으로 열리거나, 터미널에 나오는 주소로 접속:
- `http://localhost:5173/UXUI-portfolio/`

### 확인 사항:
- [ ] 페이지가 정상적으로 로드되는가?
- [ ] 모든 이미지가 보이는가?
- [ ] 페이지 간 이동이 되는가?
- [ ] Budget Buddy 프로젝트가 정상적으로 표시되는가?

---

## 🔄 Step 6: GitHub에 업로드

이제 `QUICK_START.md`의 **3단계**부터 진행하세요:

```bash
# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: UXUI Portfolio"

# GitHub 저장소 연결
git remote add origin https://github.com/2silver0711/UXUI-portfolio.git

# 브랜치 설정
git branch -M main

# 업로드
git push -u origin main
```

---

## 🆘 문제 해결

### "pnpm: command not found"
```bash
npm install -g pnpm
```

### 다운로드한 파일에 node_modules가 포함되어 있다면?
- `node_modules/` 폴더는 **삭제**하세요
- `.gitignore`에 이미 포함되어 있어 Git에 커밋되지 않습니다
- `pnpm install`로 새로 설치하세요

### 이미지가 안 보인다면?
1. `src/assets/` 폴더에 이미지 파일들이 있는지 확인
2. Budget Buddy 이미지 11개가 모두 있는지 확인
3. `src/app/data/projects.ts`의 import 경로 확인

### VS Code에서 TypeScript 에러가 많이 보인다면?
- 정상입니다! `pnpm install`이 완료되면 사라집니다
- 설치 후에도 남아있다면 VS Code를 재시작하세요

---

## 📋 전체 프로세스 요약

1. ✅ **Figma Make에서 프로젝트 다운로드** (ZIP 파일)
2. ✅ **압축 해제** 및 적절한 위치로 이동
3. ✅ **VS Code로 폴더 열기**
4. ✅ **pnpm install** 실행
5. ✅ **pnpm run dev**로 로컬 테스트
6. ✅ **GitHub 저장소 생성** (UXUI-portfolio)
7. ✅ **Git 초기화 및 푸시**
8. ✅ **GitHub Pages 설정** (Source: GitHub Actions)
9. ✅ **배포 완료!** (https://2silver0711.github.io/UXUI-portfolio/)

---

## 💡 팁

### 백업 추천:
- Figma Make 프로젝트를 다운로드한 ZIP 파일은 백업용으로 보관하세요
- 클라우드 저장소(Google Drive, Dropbox 등)에도 복사해두면 안전합니다

### Git 사용 전 확인:
- `.gitignore` 파일이 있는지 확인
- `node_modules/`가 Git에 포함되지 않도록 주의

---

다음 단계: `QUICK_START.md` 파일을 열어서 GitHub 업로드 및 배포를 진행하세요!
