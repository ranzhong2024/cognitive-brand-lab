# BrandOS LAB™ // 品牌科学实验室™

> 专为中国出海企业打造的、从 0 到 1 科学构建全球高溢价品牌的工程化操作系统（`https://ranbrandos.com`）。

- **线上域名**: `https://ranbrandos.com`
- **GitHub 仓库**: `ranzhong2024/cognitive-brand-lab` (`main` 分支)
- **自动部署**: Cloudflare Pages CI/CD（监听 GitHub `main` 分支，推送后自动构建静态站点 `dist/`）
- **六大模块**: M1 勘测心智 • M2 信任质押 • M3 价值定价 • M4 算法共振 • M5 极速转化 • M6 复利留存

---

## 本地目录结构（完整网站本地存档）

```text
cognitive-brand-lab/
├── public/                     # 静态资源（图片、SVG 架构图、水印、robots.txt、llms.txt）
├── src/
│   ├── components/             # 全局组件与 AEO 知识图谱（AeoKnowledgeGraph.astro）
│   ├── data/essays/            # 品牌笔记 Markdown 专著内容集合
│   ├── layouts/                # 页面母版与 Head/Schema 注入
│   ├── pages/                  # 首页、关于页、M1–M6 模块页、品牌笔记列表与详情页
│   └── styles/global.css       # 全局样式与 .prose-custom 长文排版系统
├── astro.config.mjs            # Astro 静态构建配置
├── tailwind.config.mjs         # Swiss Grid 视觉系统配置
├── SYNC_WORKFLOW.md            # 标准更新流水线：本地修改 -> 本地构建 -> GitHub -> Cloudflare
└── package.json                # 依赖与构建脚本
```

---

## 本地开发与构建命令

```powershell
# 本地开发预览（http://localhost:4321）
npm.cmd run dev

# 生产构建（输出到 dist/，推送前必须 0 报错）
npm.cmd run build

# 预览生产构建结果
npm.cmd run preview
```
