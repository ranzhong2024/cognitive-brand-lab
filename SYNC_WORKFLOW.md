# 网站本地存档与持续更新工作流 (Local -> GitHub -> Cloudflare)

> 本目录 (`c:\Users\zr447\Desktop\RANBRAND OS\cognitive-brand-lab`) 为 `https://ranbrandos.com` 对应仓库 `ranzhong2024/cognitive-brand-lab`（`main` 分支）的唯一标准本地存档。

---

## 标准 4 步更新流程（每次改动严格按顺序执行）

### Step 1：先在本地存档修改
所有文案、页面、样式、博客文章（`src/data/essays/*.md`）、配图（`public/images/`）全部只在本目录修改，严禁跳过本地直接改线上或只在 GitHub 网页单向修补（否则会再次造成本地与 GitHub 分叉覆盖）。

### Step 2：本地构建与页面验收（必跑）
在当前目录运行构建并检查 `dist/`：

```powershell
cd "c:\Users\zr447\Desktop\RANBRAND OS\cognitive-brand-lab"
npm.cmd run build
npm.cmd run preview
```

确认：
1. `npm.cmd run build` 返回 `0` 报错，所有路由静态生成成功；
2. 浏览器打开 `http://localhost:4321/essays/zero-to-one-brand-framework-architecture/` 等改动页面，检查排版间隔、图表显示、无乱码/未渲染公式、控制台无 404 图片。

### Step 3：推送到 GitHub (`ranzhong2024/cognitive-brand-lab` `main`)

> ⚠️ **关键技术注意**：
> - Antigravity 内置的 GitHub MCP (`push_files` / `create_or_update_file`) **只能推送 UTF-8 文本文件**（`.astro`, `.md`, `.css`, `.svg`, `.ts`, `.mjs`, `.txt`），**不能直接推送二进制图片**（`.jpg`, `.png`, `.ico`）。
> - 若改动包含 `.jpg` / `.png` / `.ico` 图片资产，必须使用标准 `git push`（或 GitHub Desktop / GitHub 网页 Upload files）提交。

首次将本机与 GitHub 仓库绑定并推送全部文件（含所有本地图片）的标准 Git 命令（需本机安装 Git for Windows 或 GitHub Desktop，并登录 `ranzhong2024` 账号）：

```powershell
# 1. 若尚未安装 Git，可通过 winget 安装：
#    winget install --id Git.Git -e --source winget

# 2. 进入本地网站存档目录并初始化跟踪
cd "c:\Users\zr447\Desktop\RANBRAND OS\cognitive-brand-lab"
git init -b main
git remote add origin https://github.com/ranzhong2024/cognitive-brand-lab.git

# 3. 拉取远端提交历史并与当前本地完整存档对齐，再提交推送（包含所有图片和代码）
git fetch origin main
git reset --mixed origin/main
git add .
git status
git commit -m "chore(sync): unify local archive, fix essay spacing & upload public media"
git push -u origin main
```

后续日常更新（已绑定 Git 后）：

```powershell
cd "c:\Users\zr447\Desktop\RANBRAND OS\cognitive-brand-lab"
git status
git add .
git commit -m "feat(essays): <简述本次修改>"
git push origin main
```

### Step 4：Cloudflare Pages 自动同步上线
GitHub `main` 分支收到新提交后，Cloudflare Pages CI/CD 会自动触发构建（Build command: `npm run build`，Output directory: `dist`）并发布至 `https://ranbrandos.com`。建议等待约 1–2 分钟后访问线上 URL（Ctrl+Shift+R 强刷或无痕窗口验证）确认生效。
