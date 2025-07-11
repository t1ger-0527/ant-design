---
order: 9
title:
  zh-CN: 自定义样式
  en-US: Customization
---

## zh-CN

自定义 TikTok 用户组件的样式和主题，包括颜色、图标和布局。

## en-US

Customize TikTok user component styling and theming including colors, icons and layout.

````jsx
import { TikTokUser, ConfigProvider, Space, Divider } from 'antd';
import { StarOutlined, CrownOutlined, FireOutlined } from '@ant-design/icons';

class CustomizationDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>Theme Customization</h4>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          
          {/* Default Theme */}
          <div>
            <h5>Default Theme</h5>
            <Space wrap>
              <TikTokUser username="default" verified />
              <TikTokUser username="loading" loading />
              <TikTokUser username="large" size="large" verified />
            </Space>
          </div>

          {/* Pink Theme */}
          <div>
            <h5>Pink Theme (TikTok Style)</h5>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#ff0050',
                  colorSuccess: '#ff0050',
                }
              }}
            >
              <Space wrap>
                <TikTokUser username="pinktok" verified />
                <TikTokUser username="pinkuser" size="large" />
                <TikTokUser username="pinkloading" loading />
              </Space>
            </ConfigProvider>
          </div>

          {/* Dark Theme */}
          <div style={{ background: '#141414', padding: 16, borderRadius: 6 }}>
            <h5 style={{ color: 'white', marginTop: 0 }}>Dark Theme</h5>
            <ConfigProvider
              theme={{
                algorithm: 'dark',
                token: {
                  colorPrimary: '#1890ff',
                }
              }}
            >
              <Space wrap>
                <TikTokUser username="darkuser" verified />
                <TikTokUser username="darkmode" size="large" />
                <TikTokUser username="darkloading" loading />
              </Space>
            </ConfigProvider>
          </div>

          <Divider />

          {/* Custom Styling */}
          <div>
            <h5>Custom CSS Styling</h5>
            <Space wrap>
              <TikTokUser
                username="gradient"
                verified
                className="gradient-user"
                style={{
                  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                  color: 'white',
                  borderRadius: 20,
                  padding: '4px 12px'
                }}
              />
              
              <TikTokUser
                username="bordered"
                className="bordered-user"
                style={{
                  border: '2px solid #1890ff',
                  borderRadius: 16,
                  padding: '2px 8px'
                }}
              />
              
              <TikTokUser
                username="shadow"
                verified
                style={{
                  boxShadow: '0 4px 12px rgba(24, 144, 255, 0.3)',
                  borderRadius: 8,
                  padding: '4px 8px'
                }}
              />
            </Space>
          </div>

          <Divider />

          {/* Size Variations */}
          <div>
            <h5>Size Variations</h5>
            <Space align="center" wrap>
              <TikTokUser username="tiny" size="small" style={{ fontSize: 10 }} />
              <TikTokUser username="small" size="small" />
              <TikTokUser username="default" />
              <TikTokUser username="large" size="large" />
              <TikTokUser username="huge" size="large" style={{ fontSize: 18 }} />
            </Space>
          </div>

          <Divider />

          {/* Interactive States */}
          <div>
            <h5>Interactive States</h5>
            <Space wrap>
              <TikTokUser
                username="hover"
                className="hover-effect"
                onClick={() => console.log('clicked')}
              />
              <TikTokUser
                username="disabled"
                clickable={false}
                style={{ opacity: 0.5, cursor: 'not-allowed' }}
              />
              <TikTokUser
                username="active"
                verified
                className="active-state"
                style={{
                  background: '#e6f7ff',
                  border: '1px solid #1890ff',
                  borderRadius: 6,
                  padding: '2px 6px'
                }}
              />
            </Space>
          </div>
        </Space>
      </div>
    );
  }
}

ReactDOM.render(<CustomizationDemo />, mountNode);
````

<style>
#components-tiktok-user-demo-customization .gradient-user:hover {
  transform: scale(1.05);
  transition: transform 0.2s;
}

#components-tiktok-user-demo-customization .bordered-user:hover {
  border-color: #40a9ff;
  background: #f0f8ff;
  transition: all 0.3s;
}

#components-tiktok-user-demo-customization .hover-effect:hover {
  background: #f0f8ff;
  border-radius: 6px;
  padding: 2px 6px;
  transition: all 0.2s;
}

#components-tiktok-user-demo-customization .active-state {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(24, 144, 255, 0.4); }
  70% { box-shadow: 0 0 0 6px rgba(24, 144, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(24, 144, 255, 0); }
}
</style>
