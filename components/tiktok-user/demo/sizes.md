---
order: 1
title:
  zh-CN: 三种尺寸
  en-US: Three Sizes
---

## zh-CN

三种尺寸的 TikTok 用户名组件。

## en-US

TikTok username component in three sizes.

````jsx
import { TikTokUser } from 'antd';

ReactDOM.render(
  <div>
    <TikTokUser size="small" username="smalluser" />
    <TikTokUser username="defaultuser" />
    <TikTokUser size="large" username="largeuser" />
  </div>,
  mountNode,
);
````

<style>
#components-tiktok-user-demo-sizes .ant-tiktok-user {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
