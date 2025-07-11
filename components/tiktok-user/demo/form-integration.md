---
order: 7
title:
  zh-CN: 表单集成
  en-US: Form Integration
---

## zh-CN

在表单中使用 TikTok 用户组件，支持用户选择和提及功能。

## en-US

Use TikTok user component in forms with user selection and mention functionality.

````jsx
import { TikTokUser, Form, Input, Button, Select, Space, Tag } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

class FormIntegrationDemo extends React.Component {
  state = {
    selectedUsers: [],
    mentionedUsers: ['creator123', 'artist456'],
    availableUsers: [
      { username: 'creator123', verified: true },
      { username: 'artist456', verified: false },
      { username: 'musician789', verified: true },
      { username: 'dancer321', verified: false },
    ]
  };

  handleUserSelect = (username) => {
    const { selectedUsers } = this.state;
    if (!selectedUsers.includes(username)) {
      this.setState({
        selectedUsers: [...selectedUsers, username]
      });
    }
  };

  removeSelectedUser = (username) => {
    this.setState({
      selectedUsers: this.state.selectedUsers.filter(u => u !== username)
    });
  };

  onFinish = (values) => {
    console.log('Form values:', {
      ...values,
      selectedUsers: this.state.selectedUsers,
      mentionedUsers: this.state.mentionedUsers
    });
  };

  render() {
    const { selectedUsers, mentionedUsers, availableUsers } = this.state;

    return (
      <Form
        layout="vertical"
        onFinish={this.onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Collaborate with Users">
          <div style={{ marginBottom: 8 }}>
            <Space wrap>
              {availableUsers.map(user => (
                <TikTokUser
                  key={user.username}
                  username={user.username}
                  verified={user.verified}
                  size="small"
                  onClick={this.handleUserSelect}
                />
              ))}
            </Space>
          </div>
          
          {selectedUsers.length > 0 && (
            <div>
              <div style={{ marginBottom: 4, fontSize: 12, color: '#666' }}>
                Selected collaborators:
              </div>
              <Space wrap>
                {selectedUsers.map(username => (
                  <Tag
                    key={username}
                    closable
                    onClose={() => this.removeSelectedUser(username)}
                  >
                    <TikTokUser
                      username={username}
                      size="small"
                      showAtSymbol={false}
                    />
                  </Tag>
                ))}
              </Space>
            </div>
          )}
        </Form.Item>

        <Form.Item label="Mentioned Users" name="mentions">
          <div>
            <Space wrap>
              {mentionedUsers.map(username => (
                <TikTokUser
                  key={username}
                  username={username}
                  size="small"
                  clickable={false}
                />
              ))}
            </Space>
          </div>
        </Form.Item>

        <Form.Item label="Video Title" name="title">
          <Input placeholder="Enter video title..." />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <TextArea
            rows={4}
            placeholder="Describe your video and mention users with @username..."
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Video
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

ReactDOM.render(<FormIntegrationDemo />, mountNode);
````

<style>
#components-tiktok-user-demo-form-integration .ant-form-item {
  margin-bottom: 16px;
}

#components-tiktok-user-demo-form-integration .ant-tiktok-user {
  margin-right: 4px;
  margin-bottom: 4px;
}
</style>
