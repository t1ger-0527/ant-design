---
order: 4
title:
  zh-CN: 加载状态
  en-US: Loading State
---

## zh-CN

显示加载状态的用户名。

## en-US

Username with loading state.

````jsx
import { TikTokUser } from 'antd';

ReactDOM.render(
  <div>
    <TikTokUser username="loadinguser" loading />
    <TikTokUser username="loadingverified" loading verified />
    <TikTokUser username="normaluser" />
  </div>,
  mountNode,
);
````

<style>
#components-tiktok-user-demo-loading .ant-tiktok-user {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
