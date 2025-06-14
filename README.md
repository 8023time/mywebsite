personal-website
├── app/                  # Next.js App Router 核心，定义路由与页面
│   ├── blog/             # 博客模块路由
│   │   ├── [slug]/       # 动态路由：匹配 /blog/文章别名
│   │   │   └── page.tsx  # 博客详情页，负责解析 MDX 并渲染
│   │   ├── page.tsx      # 博客列表页，展示所有文章概览
│   │   └── layout.tsx    # （可选）博客模块专属布局，如侧边栏分类
│   ├── about/            # 关于我模块
│   │   └── page.tsx      # 关于我页面，静态内容直接写 JSX
│   ├── works/            # 作品展示模块
│   │   └── page.tsx      # 作品列表页，可嵌入 MDX 或纯 JSX
│   ├── contact/          # 联系模块
│   │   └── page.tsx      # 联系页，放社交链接、邮箱等
│   ├── layout.tsx        # 全局布局：导航、页脚、SEO 元信息统一管理
│   ├── page.tsx          # 首页：核心展示区（Hero 模块、个人简介）
│   └── globals.css       # 全局基础样式，可写 Tailwind 基础配置或重置样式
├── components/           # 通用组件库，跨页面复用
│   ├── ui/               # 原子化 UI 组件（与业务无关，纯样式/交互）
│   │   ├── Button.tsx    # 按钮组件，支持不同样式变体（Primary/Secondary）
│   │   ├── Card.tsx      # 卡片组件，包裹内容并带阴影/圆角
│   │   └── MarkdownBody.tsx # MDX 渲染容器，处理代码高亮、图片样式
│   ├── sections/         # 页面区块组件（特定页面复用，带业务逻辑）
│   │   ├── HeroSection.tsx   # 首页 Hero 区，展示个人头像、标语
│   │   ├── WorksGallery.tsx  # 作品展示画廊，支持图片懒加载
│   │   └── BlogList.tsx      # 博客列表组件，渲染文章标题、摘要
│   └── layout/           # 布局组件（导航、页脚等全局结构）
│       ├── Navbar.tsx    # 顶部导航栏，支持路由跳转、响应式折叠
│       └── Footer.tsx    # 页脚，放版权信息、社交链接
├── content/              # MDX 博客文章存储目录（核心！替代 Hexo 的 source/_posts）
│   ├── first-post.mdx    # 第一篇博客，可嵌入 React 组件
│   ├── second-post.mdx   # 第二篇博客，支持 frontmatter 配置
│   └── about-me.mdx      # （可选）关于我内容用 MDX 编写，灵活扩展
├── lib/                  # 工具库与 MDX 解析逻辑
│   ├── mdx-utils.ts      # MDX 核心工具：解析文件、提取 frontmatter
│   │                     # （依赖 next-mdx-remote 或 @mdx-js/loader）
│   ├── constants.ts      # 常量定义（站点标题、社交链接、导航菜单）
│   └── utils.ts          # 通用函数（日期格式化、slug 生成）
├── public/               # 静态资源目录（部署时直接拷贝）
│   ├── images/           # 图片资源
│   │   ├── avatar.png    # 个人头像
│   │   ├── blog-covers/  # 博客文章封面图
│   │   │   ├── first-post.png
│   │   │   └── second-post.png
│   ├── fonts/            # 自定义字体（如 Google Fonts 下载文件）
│   └── favicon.ico       # 站点图标
├── tailwind.config.ts    # Tailwind CSS 配置（主题、插件、内容扫描路径）
├── postcss.config.js     # PostCSS 配置（配合 Tailwind 自动前缀、嵌套语法）
├── next.config.js        # Next.js 配置（启用 MDX 支持、图片优化等）
├── tsconfig.json         # TypeScript 配置（类型检查、路径别名）
└── README.md             # 项目说明（启动命令、部署步骤、目录说明）