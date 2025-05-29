# React TODO 应用程序

一个使用 React 和 TypeScript 构建的功能完整的 TODO 应用程序，具有 localStorage 持久化功能。

## 功能特性

- ✅ **添加 TODO 项** - 在输入框中输入任务并按回车键
- ✅ **标记完成/未完成** - 点击复选框切换任务状态
- ✅ **编辑 TODO 项** - 点击编辑按钮（✏️）修改任务文本
- ✅ **删除 TODO 项** - 点击删除按钮（×）移除任务
- ✅ **筛选功能** - 查看所有、活跃或已完成的任务
- ✅ **全选/取消全选** - 一键切换所有任务的完成状态
- ✅ **清除已完成** - 一键删除所有已完成的任务
- ✅ **localStorage 持久化** - 数据在页面刷新后保持不变
- ✅ **响应式设计** - 适配不同屏幕尺寸

## 技术栈

- **React 18** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **CSS3** - 现代样式和动画
- **localStorage** - 客户端数据持久化

## 项目结构

```
src/
├── components/          # React 组件
│   ├── TodoInput.tsx   # 输入组件
│   ├── TodoItem.tsx    # 单个 TODO 项组件
│   ├── TodoList.tsx    # TODO 列表容器
│   └── TodoFilter.tsx  # 筛选和状态控制
├── hooks/              # 自定义 Hooks
│   └── useTodos.ts     # TODO 状态管理
├── types/              # TypeScript 类型定义
│   └── Todo.ts         # Todo 接口和类型
├── utils/              # 工具函数
│   └── localStorage.ts # localStorage 操作
├── App.tsx             # 主应用组件
├── App.css             # 应用样式
└── index.tsx           # 应用入口点
```

## 开始使用

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

应用程序将在 [http://localhost:12000](http://localhost:12000) 上运行。

页面会在您进行编辑时自动重新加载。

### 构建生产版本

```bash
npm run build
```

将应用程序构建到 `build` 文件夹中用于生产环境。

## 核心组件说明

### useTodos Hook
- 管理 TODO 项的状态
- 处理 localStorage 的读取和写入
- 提供添加、编辑、删除、切换状态等操作

### TodoItem 组件
- 显示单个 TODO 项
- 支持内联编辑功能
- 提供完成状态切换和删除功能

### TodoFilter 组件
- 提供筛选功能（全部/活跃/已完成）
- 显示剩余任务计数
- 提供清除已完成任务的功能

## 设计特点

- **类型安全** - 使用 TypeScript 确保代码质量
- **组件化** - 模块化的组件设计，易于维护
- **响应式** - 适配移动设备和桌面设备
- **用户友好** - 直观的界面和流畅的交互
- **数据持久化** - 使用 localStorage 保存数据

## 浏览器兼容性

支持所有现代浏览器，包括：
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 许可证

MIT License

---

*此项目基于 [Create React App](https://github.com/facebook/create-react-app) 创建。*