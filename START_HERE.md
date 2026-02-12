# 🚀 여기서 시작하세요! (START HERE)

## 📍 현재 상황

✅ Figma Make에서 포트폴리오 웹사이트 제작 완료  
✅ STOOV, LocalLink, Budget Buddy 프로젝트 포함  
❓ 이제 GitHub와 VS Code로 옮겨서 배포하고 싶음

---

## 🎯 최종 목표

**배포 URL**: `https://2silver0711.github.io/UXUI-portfolio/`  
**GitHub 저장소**: `https://github.com/2silver0711/UXUI-portfolio`

---

## 📋 전체 프로세스 (5단계)

### 1️⃣ Figma Make → 내 컴퓨터 (다운로드)

**Figma Make에서 프로젝트 다운로드:**
- Figma Make 우측 상단 다운로드/내보내기 버튼 클릭
- ZIP 파일 다운로드
- 압축 해제 → 원하는 폴더로 이동

📖 자세한 방법: `DOWNLOAD_GUIDE.md` 참고

---

### 2️⃣ 내 컴퓨터 → GitHub (업로드)

**VS Code에서 GitHub에 업로드:**

```bash
# 1. VS Code로 프로젝트 폴더 열기
code /path/to/your/portfolio

# 2. 의존성 설치
pnpm install

# 3. 로컬 테스트
pnpm run dev
# → http://localhost:5173/UXUI-portfolio/ 에서 확인

# 4. GitHub에 업로드
git init
git add .
git commit -m "Initial commit: UXUI Portfolio"
git remote add origin https://github.com/2silver0711/UXUI-portfolio.git
git branch -M main
git push -u origin main
```

**주의**: GitHub에서 `UXUI-portfolio` 저장소를 먼저 생성해야 합니다!

---

### 3️⃣ GitHub → 자동 배포 설정

**GitHub Pages 활성화:**

1. GitHub 저장소 페이지 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source**를 **"GitHub Actions"**로 선택
5. 저장 (자동)

---

### 4️⃣ 배포 완료 확인

**배포 진행 상황 확인:**

1. GitHub 저장소의 **Actions** 탭 클릭
2. 배포 워크플로우 진행 상황 확인 (약 2-3분)
3. 녹색 체크 표시가 뜨면 완료!

**배포된 사이트 접속:**
- `https://2silver0711.github.io/UXUI-portfolio/`

---

### 5️⃣ 이후 작업 (업데이트)

**프로젝트 수정 및 재배포:**

```bash
# 1. VS Code에서 파일 수정

# 2. 변경사항 커밋 및 푸시
git add .
git commit -m "프로젝트 이미지 추가"
git push

# 3. GitHub Actions가 자동으로 재배포!
# 4. 2-3분 후 사이트에 반영됨
```

---

## 📚 문서 가이드

각 단계별로 자세한 문서가 준비되어 있습니다:

| 문서 | 용도 |
|------|------|
| **START_HERE.md** (이 파일) | 전체 흐름 파악 |
| **DOWNLOAD_GUIDE.md** | Figma Make → 로컬 다운로드 방법 |
| **QUICK_START.md** | 빠른 시작 체크리스트 |
| **DEPLOYMENT_GUIDE.md** | 상세 배포 가이드 |
| **README.md** | 프로젝트 전체 문서 |

---

## ⚡ 초보자를 위한 단계별 가이드

### 사전 준비물 설치

아래 프로그램들이 설치되어 있어야 합니다:

1. **Git**: https://git-scm.com/
2. **VS Code**: https://code.visualstudio.com/
3. **Node.js** (v18 이상): https://nodejs.org/
4. **pnpm**:
   ```bash
   npm install -g pnpm
   ```

설치 확인:
```bash
git --version
code --version
node --version
pnpm --version
```

---

## 🎬 시작하기

### Option A: 빠르게 시작 (추천)

`QUICK_START.md` 파일을 열고 체크리스트를 따라하세요!

### Option B: 자세히 공부하며 시작

1. `DOWNLOAD_GUIDE.md` - Figma Make 다운로드
2. `DEPLOYMENT_GUIDE.md` - GitHub 업로드 및 배포
3. `README.md` - 프로젝트 구조 및 상세 문서

---

## 🆘 문제가 생겼나요?

### 자주 묻는 질문

**Q: 어떤 파일부터 읽어야 하나요?**  
A: 이 파일(`START_HERE.md`)을 먼저 읽고 → `QUICK_START.md`로 이동하세요!

**Q: Figma Make 코드를 어떻게 다운로드하나요?**  
A: `DOWNLOAD_GUIDE.md` 참고

**Q: Git을 한 번도 안 써봤어요.**  
A: `DEPLOYMENT_GUIDE.md`의 Git 사용 방법 섹션 참고. VS Code의 GUI로도 가능합니다!

**Q: pnpm이 뭔가요?**  
A: npm과 같은 패키지 매니저입니다. `npm install -g pnpm`으로 설치하세요.

**Q: 배포 후 이미지가 안 보여요.**  
A: `vite.config.ts`의 `base: '/UXUI-portfolio/'` 경로가 맞는지 확인하세요.

---

## 📞 추가 도움

- **GitHub Issues**: https://github.com/2silver0711/UXUI-portfolio/issues
- **문서 내 검색**: VS Code에서 `Cmd/Ctrl + Shift + F`로 문서 전체 검색

---

## ✅ 성공 체크리스트

- [ ] Figma Make에서 프로젝트 다운로드 완료
- [ ] VS Code로 프로젝트 열기 완료
- [ ] `pnpm install` 실행 완료
- [ ] `pnpm run dev`로 로컬 테스트 성공
- [ ] GitHub에 `UXUI-portfolio` 저장소 생성
- [ ] Git 초기화 및 푸시 완료
- [ ] GitHub Pages 설정 완료
- [ ] Actions 탭에서 배포 성공 확인
- [ ] `https://2silver0711.github.io/UXUI-portfolio/` 접속 성공

---

## 🎉 모두 완료했다면

축하합니다! 이제 포트폴리오가 온라인에 배포되었습니다!

**다음 단계:**
- 친구들에게 링크 공유하기
- 이력서에 포트폴리오 URL 추가하기
- 새 프로젝트 추가하기 (방법은 `QUICK_START.md` 참고)

---

**지금 바로 시작하세요!** → `QUICK_START.md` 열기
