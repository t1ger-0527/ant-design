---
order: 6
title:
  zh-CN: 用户网格
  en-US: User Grid
---

## zh-CN

在网格布局中显示多个用户，适用于用户列表和搜索结果。

## en-US

Display multiple users in a grid layout, suitable for user lists and search results.

````jsx
import { TikTokUser, Row, Col, Input, Space } from 'antd';

const { Search } = Input;

class UserGridDemo extends React.Component {
  state = {
    searchTerm: '',
    users: [
      { username: 'creator123', verified: true, followers: 1200000 },
      { username: 'artist456', verified: false, followers: 850000 },
      { username: 'musician789', verified: true, followers: 2100000 },
      { username: 'dancer321', verified: false, followers: 650000 },
      { username: 'comedian654', verified: true, followers: 980000 },
      { username: 'chef987', verified: false, followers: 420000 },
      { username: 'fitness111', verified: true, followers: 1500000 },
      { username: 'travel222', verified: false, followers: 780000 },
    ]
  };

  handleSearch = (value) => {
    this.setState({ searchTerm: value.toLowerCase() });
  };

  handleUserClick = (username) => {
    console.log(`Clicked user: ${username}`);
  };

  render() {
    const { searchTerm, users } = this.state;
    
    const filteredUsers = users.filter(user =>
      user.username.toLowerCase().includes(searchTerm)
    );

    return (
      <div>
        <Space direction="vertical" style={{ width: '100%', marginBottom: 16 }}>
          <Search
            placeholder="Search users..."
            onSearch={this.handleSearch}
            onChange={(e) => this.handleSearch(e.target.value)}
            style={{ width: 300 }}
          />
          <div>Found {filteredUsers.length} users</div>
        </Space>

        <Row gutter={[16, 16]}>
          {filteredUsers.map(user => (
            <Col xs={24} sm={12} md={8} lg={6} key={user.username}>
              <div style={{
                padding: 12,
                border: '1px solid #f0f0f0',
                borderRadius: 6,
                textAlign: 'center',
                background: '#fafafa'
              }}>
                <TikTokUser
                  username={user.username}
                  verified={user.verified}
                  onClick={this.handleUserClick}
                  style={{ marginBottom: 8 }}
                />
                <div style={{ fontSize: 12, color: '#666' }}>
                  {user.followers.toLocaleString()} followers
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<UserGridDemo />, mountNode);
````

<style>
#components-tiktok-user-demo-grid .ant-col {
  transition: all 0.3s;
}

#components-tiktok-user-demo-grid .ant-col:hover {
  transform: translateY(-2px);
}
</style>
