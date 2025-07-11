---
order: 5
title:
  zh-CN: 交互式用户资料
  en-US: Interactive User Profile
---

## zh-CN

点击用户名获取用户资料信息，支持异步数据加载。

## en-US

Click username to fetch user profile information with async data loading support.

````jsx
import { TikTokUser, Card, Avatar, Button, message } from 'antd';

class InteractiveDemo extends React.Component {
  state = {
    loadingUsers: {},
    userProfiles: {},
  };

  fetchUserProfile = (username) => {
    this.setState(prevState => ({
      loadingUsers: { ...prevState.loadingUsers, [username]: true }
    }));

    // Simulate API call
    setTimeout(() => {
      const mockProfile = {
        username,
        verified: Math.random() > 0.5,
        followers: Math.floor(Math.random() * 1000000),
        bio: `Creative content creator @${username}`,
      };

      this.setState(prevState => ({
        loadingUsers: { ...prevState.loadingUsers, [username]: false },
        userProfiles: { ...prevState.userProfiles, [username]: mockProfile }
      }));

      message.success(`Loaded profile for @${username}`);
    }, 1500);
  };

  render() {
    const { loadingUsers, userProfiles } = this.state;
    const users = ['creator123', 'artist456', 'musician789'];

    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <h4>Click users to load their profiles:</h4>
          {users.map(username => (
            <TikTokUser
              key={username}
              username={username}
              loading={loadingUsers[username]}
              verified={userProfiles[username]?.verified}
              onClick={this.fetchUserProfile}
              style={{ marginRight: 8, marginBottom: 8 }}
            />
          ))}
        </div>

        {Object.keys(userProfiles).length > 0 && (
          <div>
            <h4>Loaded Profiles:</h4>
            {Object.values(userProfiles).map(profile => (
              <Card
                key={profile.username}
                size="small"
                style={{ width: 300, marginBottom: 8 }}
                title={
                  <TikTokUser
                    username={profile.username}
                    verified={profile.verified}
                    size="small"
                  />
                }
              >
                <p>{profile.bio}</p>
                <p><strong>{profile.followers.toLocaleString()}</strong> followers</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<InteractiveDemo />, mountNode);
````

<style>
#components-tiktok-user-demo-interactive .ant-tiktok-user {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
