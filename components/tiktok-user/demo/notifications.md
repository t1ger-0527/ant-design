---
order: 8
title:
  zh-CN: 通知列表
  en-US: Notification List
---

## zh-CN

在通知列表中显示用户活动，包括关注、点赞和评论通知。

## en-US

Display user activities in notification list including follow, like and comment notifications.

````jsx
import { TikTokUser, List, Avatar, Badge, Button, Space } from 'antd';
import { HeartOutlined, MessageOutlined, UserAddOutlined, StarOutlined } from '@ant-design/icons';

class NotificationDemo extends React.Component {
  state = {
    notifications: [
      {
        id: 1,
        type: 'follow',
        user: { username: 'newFollower123', verified: false },
        message: 'started following you',
        time: '2 minutes ago',
        unread: true
      },
      {
        id: 2,
        type: 'like',
        user: { username: 'creator456', verified: true },
        message: 'liked your video "Amazing Dance Moves"',
        time: '5 minutes ago',
        unread: true
      },
      {
        id: 3,
        type: 'comment',
        user: { username: 'artist789', verified: false },
        message: 'commented on your video',
        comment: 'This is incredible! 🔥',
        time: '10 minutes ago',
        unread: false
      },
      {
        id: 4,
        type: 'mention',
        user: { username: 'musician321', verified: true },
        message: 'mentioned you in a video',
        time: '1 hour ago',
        unread: false
      },
      {
        id: 5,
        type: 'collaboration',
        user: { username: 'dancer654', verified: false },
        message: 'invited you to collaborate',
        time: '2 hours ago',
        unread: false
      }
    ]
  };

  getNotificationIcon = (type) => {
    const iconMap = {
      follow: <UserAddOutlined style={{ color: '#1890ff' }} />,
      like: <HeartOutlined style={{ color: '#ff4d4f' }} />,
      comment: <MessageOutlined style={{ color: '#52c41a' }} />,
      mention: <StarOutlined style={{ color: '#faad14' }} />,
      collaboration: <UserAddOutlined style={{ color: '#722ed1' }} />
    };
    return iconMap[type] || <UserAddOutlined />;
  };

  handleUserClick = (username) => {
    console.log(`Navigate to user profile: ${username}`);
  };

  markAsRead = (id) => {
    this.setState(prevState => ({
      notifications: prevState.notifications.map(notif =>
        notif.id === id ? { ...notif, unread: false } : notif
      )
    }));
  };

  render() {
    const { notifications } = this.state;
    const unreadCount = notifications.filter(n => n.unread).length;

    return (
      <div>
        <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4>
            Notifications 
            {unreadCount > 0 && (
              <Badge count={unreadCount} style={{ marginLeft: 8 }} />
            )}
          </h4>
          <Button size="small">Mark all as read</Button>
        </div>

        <List
          itemLayout="horizontal"
          dataSource={notifications}
          renderItem={item => (
            <List.Item
              style={{
                backgroundColor: item.unread ? '#f6ffed' : 'transparent',
                padding: '12px 16px',
                borderRadius: 6,
                marginBottom: 4
              }}
              actions={[
                item.unread && (
                  <Button
                    type="link"
                    size="small"
                    onClick={() => this.markAsRead(item.id)}
                  >
                    Mark as read
                  </Button>
                )
              ].filter(Boolean)}
            >
              <List.Item.Meta
                avatar={
                  <Badge dot={item.unread} offset={[-2, 2]}>
                    <Avatar icon={this.getNotificationIcon(item.type)} />
                  </Badge>
                }
                title={
                  <Space>
                    <TikTokUser
                      username={item.user.username}
                      verified={item.user.verified}
                      size="small"
                      onClick={this.handleUserClick}
                    />
                    <span style={{ fontWeight: 'normal' }}>{item.message}</span>
                  </Space>
                }
                description={
                  <div>
                    {item.comment && (
                      <div style={{ 
                        fontStyle: 'italic', 
                        color: '#666', 
                        marginBottom: 4,
                        padding: '4px 8px',
                        background: '#f5f5f5',
                        borderRadius: 4
                      }}>
                        "{item.comment}"
                      </div>
                    )}
                    <span style={{ color: '#999', fontSize: 12 }}>{item.time}</span>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

ReactDOM.render(<NotificationDemo />, mountNode);
````

<style>
#components-tiktok-user-demo-notifications .ant-list-item {
  border: 1px solid #f0f0f0;
  transition: all 0.3s;
}

#components-tiktok-user-demo-notifications .ant-list-item:hover {
  border-color: #d9d9d9;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>
