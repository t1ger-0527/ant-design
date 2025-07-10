---
order: 2
title:
  zh-CN: 认证用户
  en-US: Verified Users
---

## zh-CN

显示认证徽章的用户名。

## en-US

Username with verification badge.

````jsx
import { TikTokUser } from 'antd';

ReactDOM.render(
  <div>
    <TikTokUser username="verifiedcreator" verified />
    <TikTokUser username="verifiedbusiness" verified size="large" />
    <TikTokUser username="regularuser" />
  </div>,
  mountNode,
);
````

<style>
#components-tiktok-user-demo-verified .ant-tiktok-user {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
