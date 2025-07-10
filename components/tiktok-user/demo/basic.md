---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

最简单的 TikTok 用户名显示。

## en-US

The simplest usage of TikTok username display.

````jsx
import { TikTokUser } from 'antd';

ReactDOM.render(
  <div>
    <TikTokUser username="creator123" />
    <TikTokUser username="business456" />
    <TikTokUser username="premium789" />
  </div>,
  mountNode,
);
````

<style>
#components-tiktok-user-demo-basic .ant-tiktok-user {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
