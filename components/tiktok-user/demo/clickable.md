---
order: 3
title:
  zh-CN: 可点击
  en-US: Clickable
---

## zh-CN

可点击的用户名，支持点击事件。

## en-US

Clickable username with click event support.

````jsx
import { TikTokUser, message } from 'antd';

function handleClick(username) {
  message.info(`Clicked on user: ${username}`);
}

ReactDOM.render(
  <div>
    <TikTokUser username="clickableuser" onClick={handleClick} />
    <TikTokUser username="notclickable" clickable={false} />
    <TikTokUser username="verifiedclickable" verified onClick={handleClick} />
  </div>,
  mountNode,
);
````

<style>
#components-tiktok-user-demo-clickable .ant-tiktok-user {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
