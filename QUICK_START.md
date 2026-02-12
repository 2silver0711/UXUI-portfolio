# ⚡ 빠른 시작 가이드

## ⚠️ 먼저 읽어주세요!

**VS Code는 로컬 환경입니다.** Figma Make에서 작업한 프로젝트를 먼저 다운로드해야 합니다!

### 🔽 Figma Make 프로젝트 다운로드

1. **Figma Make 우측 상단**에서 **Download/Export** 버튼 클릭
2. ZIP 파일 다운로드 및 **압축 해제**
3. 적절한 위치로 폴더 이동 (예: `~/Projects/portfolio`)

자세한 내용은 `DOWNLOAD_GUIDE.md` 참고!

---

## ✅ 체크리스트 (순서대로 진행)

### 0단계: Figma Make 프로젝트 다운로드 ⭐

- [ ] Figma Make에서 프로젝트 다운로드 (ZIP)
- [ ] 압축 해제 및 적절한 위치에 저장
- [ ] VS Code로 폴더 열기
- [ ] 터미널에서 `pnpm install` 실행
- [ ] `pnpm run dev`로 로컬 테스트 성공

### 1단계: 설치 (최초 1회만)

- [ ] Git 설치 완료
- [ ] VS Code 설치 완료  
- [ ] Node.js 설치 완료
- [ ] pnpm 설치 완료 (`npm install -g pnpm`)

### 2단계: GitHub 저장소 생성

- [ ] GitHub 계정 로그인
- [ ] `UXUI-portfolio` 저장소 생성 (Public)
- [ ] 저장소 URL 복사: `https://github.com/2silver0711/UXUI-portfolio.git`

### 3단계: 프로젝트를 GitHub에 업로드

터미널에서 아래 명령어 순서대로 실행:

```bash
# 1. 프로젝트 폴더로 이동
cd /path/to/your/portfolio

# 2. Git 초기화
git init

# 3. 모든 파일 추가
git add .

# 4. 첫 커밋
git commit -m "Initial commit"

# 5. GitHub 저장소 연결
git remote add origin https://github.com/2silver0711/UXUI-portfolio.git

# 6. 브랜치 이름을 main으로 설정
git branch -M main

# 7. GitHub에 업로드
git push -u origin main
```

### 4단계: GitHub Pages 활성화

- [ ] GitHub 저장소 페이지에서 **Settings** 클릭
- [ ] 왼쪽 메뉴에서 **Pages** 클릭
- [ ] Source를 **"GitHub Actions"** 로 선택

### 5단계: 배포 확인

- [ ] GitHub 저장소의 **Actions** 탭에서 배포 진행 확인
- [ ] 녹색 체크 표시가 나올 때까지 대기 (약 2-3분)
- [ ] `https://2silver0711.github.io/UXUI-portfolio/` 접속하여 확인

---

## 🖥️ VS Code에서 작업하기

### 최초 설정

```bash
# 1. VS Code에서 프로젝트 열기
code /path/to/your/portfolio

# 2. VS Code 터미널에서 의존성 설치
pnpm install

# 3. 개발 서버 실행
pnpm run dev
```

### 일상적인 작업 흐름

```bash
# 1. 개발 서버 시작
pnpm run dev

# 2. 파일 수정 (VS Code에서)

# 3. 변경사항 커밋 및 푸시
git add .
git commit -m "변경 내용 설명"
git push

# 4. GitHub Actions에서 자동 배포됨!
```

---

## 🎨 프로젝트 추가하는 법

### 1. 이미지 준비
- 프로젝트 이미지 파일을 `src/assets/` 폴더에 넣기

### 2. 데이터 파일 수정
`src/app/data/projects.ts` 파일 열고:

```typescript
// 1. 상단에 이미지 import 추가
import newProjectImg from "figma:asset/파일명.png";

// 2. projects 배열에 새 프로젝트 추가
export const projects: Project[] = [
  {
    id: 'new-project-id',
    category: 'service', // 또는 'uxui', 'product'
    title: '프로젝트 이름',
    period: '2024.01 ~ 02',
    description: '한줄 설명',
    thumbnail: newProjectImg,
    tags: ['태그1', '태그2'],
    role: '80% / 역할 설명',
    tools: ['Figma', 'Photoshop'],
    overview: '전체 개요',
    problem: '문제 정의',
    solution: '해결 방법',
    result: '결과',
    images: [newProjectImg], // 상세 페이지 이미지들
    prototypeUrl: '프로토타입 링크 (선택)',
  },
  // ... 기존 프로젝트들
];
```

### 3. 저장 및 배포
```bash
git add .
git commit -m "새 프로젝트 추가: 프로젝트명"
git push
```

---

## 📌 자주 사용하는 명령어

### 개발
```bash
pnpm run dev          # 로컬 서버 실행
pnpm run build        # 프로덕션 빌드
pnpm run preview      # 빌드 결과 미리보기
```

### Git
```bash
git status            # 변경사항 확인
git add .             # 모든 변경사항 스테이징
git commit -m "메시지" # 커밋
git push              # GitHub에 푸시
git pull              # GitHub에서 최신 코드 받기
```

---

## 🔥 주의사항

### ❌ 하지 말아야 할 것
- `node_modules/` 폴더를 Git에 커밋하지 마세요 (`.gitignore`에 이미 포함됨)
- `pnpm-lock.yaml`을 삭제하지 마세요
- `vite.config.ts`의 `base: '/UXUI-portfolio/'` 경로를 함부로 변경하지 마세요

### ✅ 해야 할 것
- 코드 수정 전에는 `git pull`로 최신 버전 받기
- 의미있는 커밋 메시지 작성하기
- 큰 변경 전에는 새 브랜치 만들기

---

## 🆘 문제 해결

### "command not found: pnpm"
```bash
npm install -g pnpm
```

### "command not found: git"
Git을 설치하세요: https://git-scm.com/

### 배포 후 페이지가 깨져 보임
1. `vite.config.ts`에서 `base: '/UXUI-portfolio/'` 확인
2. 모든 링크가 `/UXUI-portfolio/`로 시작하는지 확인
3. 이미지 경로가 올바른지 확인

### VS Code에서 Git이 안보임
1. 왼쪽 사이드바의 Source Control 아이콘 클릭
2. "Initialize Repository" 버튼 클릭
3. 또는 터미널에서 `git init`

---

## 📚 더 자세한 내용은

- **배포 가이드**: `DEPLOYMENT_GUIDE.md` 참고
- **README**: `README.md` 참고
- **프로젝트 구조**: `README.md`의 프로젝트 구조 섹션

---

## 🎉 완료!

위 체크리스트를 모두 완료했다면 포트폴리오가 성공적으로 배포된 것입니다!

**배포 URL**: https://2silver0711.github.io/UXUI-portfolio/

수정사항이 있을 때마다:
1. VS Code에서 파일 수정
2. `git add . && git commit -m "메시지" && git push`
3. 2-3분 후 자동 배포 완료!