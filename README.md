# TinyDSA Starter — TypeScript

TinyDSA 课程起始代码（TypeScript）——从零手搓经典数据结构与算法。

## 结构

```
src/                        # 核心实现（所有数据结构累积在此）
tests/                      # 每个 stage 一个测试 (testS01.ts … testS17.ts)
bootcraft.yml               # 课程元数据
tsconfig.json               # TypeScript 配置
package.json                # npm 依赖
```

## 快速开始

```bash
npm install
npx tsx tests/testS01.ts
```

## 开始

在 `src/` 目录下找到 `TODO` 注释，按 stage 顺序逐步实现。

## 规则

- **禁止使用** `Array.push()`、`Array.splice()` 等内置动态方法
- 底层存储必须使用 `new Array<number | undefined>(capacity).fill(undefined)` 固定长度数组
- 测试文件（`tests/`）请勿修改
