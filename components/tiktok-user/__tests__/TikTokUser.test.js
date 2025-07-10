import React from 'react';
import { mount, render } from 'enzyme';
import TikTokUser from '..';

describe('TikTokUser', () => {
  it('renders username correctly', () => {
    const wrapper = render(<TikTokUser username="testuser" />);
    expect(wrapper.find('.ant-tiktok-user-username').text()).toBe('@testuser');
  });

  it('renders username without @ symbol when showAtSymbol is false', () => {
    const wrapper = render(<TikTokUser username="testuser" showAtSymbol={false} />);
    expect(wrapper.find('.ant-tiktok-user-username').text()).toBe('testuser');
  });

  it('applies size classes correctly', () => {
    const wrapper = mount(<TikTokUser username="test" size="large" />);
    expect(wrapper.find('.ant-tiktok-user').hasClass('ant-tiktok-user-large')).toBe(true);
  });

  it('applies small size class correctly', () => {
    const wrapper = mount(<TikTokUser username="test" size="small" />);
    expect(wrapper.find('.ant-tiktok-user').hasClass('ant-tiktok-user-small')).toBe(true);
  });

  it('handles click events properly', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<TikTokUser username="test" onClick={handleClick} />);
    wrapper.find('.ant-tiktok-user').simulate('click');
    expect(handleClick).toHaveBeenCalledWith('test');
  });

  it('does not trigger click when not clickable', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<TikTokUser username="test" clickable={false} onClick={handleClick} />);
    wrapper.find('.ant-tiktok-user').simulate('click');
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('shows verified badge when verified is true', () => {
    const wrapper = mount(<TikTokUser username="test" verified />);
    expect(wrapper.find('.ant-tiktok-user-verified-badge')).toHaveLength(1);
  });

  it('shows loading icon when loading is true', () => {
    const wrapper = mount(<TikTokUser username="test" loading />);
    expect(wrapper.find('.ant-tiktok-user').hasClass('ant-tiktok-user-loading')).toBe(true);
    expect(wrapper.find('Icon[type="loading"]')).toHaveLength(1);
  });

  it('applies clickable class when clickable is true', () => {
    const wrapper = mount(<TikTokUser username="test" clickable />);
    expect(wrapper.find('.ant-tiktok-user').hasClass('ant-tiktok-user-clickable')).toBe(true);
  });

  it('does not apply clickable class when clickable is false', () => {
    const wrapper = mount(<TikTokUser username="test" clickable={false} />);
    expect(wrapper.find('.ant-tiktok-user').hasClass('ant-tiktok-user-clickable')).toBe(false);
  });

  it('applies custom className', () => {
    const wrapper = mount(<TikTokUser username="test" className="custom-class" />);
    expect(wrapper.find('.ant-tiktok-user').hasClass('custom-class')).toBe(true);
  });

  it('applies custom style', () => {
    const customStyle = { color: 'red' };
    const wrapper = mount(<TikTokUser username="test" style={customStyle} />);
    expect(wrapper.find('.ant-tiktok-user').prop('style')).toEqual(customStyle);
  });
});
