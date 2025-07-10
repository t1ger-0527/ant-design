import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';

export interface TikTokUserProps {
  prefixCls?: string;
  className?: string;
  username: string;
  size?: 'small' | 'default' | 'large';
  showAtSymbol?: boolean;
  clickable?: boolean;
  verified?: boolean;
  loading?: boolean;
  onClick?: (username: string) => void;
  style?: React.CSSProperties;
}

export default class TikTokUser extends React.Component<TikTokUserProps, any> {
  static defaultProps = {
    prefixCls: 'ant-tiktok-user',
    size: 'default',
    showAtSymbol: true,
    clickable: true,
    verified: false,
    loading: false,
  };

  static propTypes = {
    username: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'default', 'large']),
    showAtSymbol: PropTypes.bool,
    clickable: PropTypes.bool,
    verified: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    prefixCls: PropTypes.string,
  };

  handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const { onClick, username, clickable } = this.props;
    if (clickable && onClick) {
      onClick(username);
    }
  };

  render() {
    const {
      prefixCls,
      className,
      username,
      size,
      showAtSymbol,
      clickable,
      verified,
      loading,
      style,
      ...restProps
    } = this.props;

    const displayName = showAtSymbol ? `@${username}` : username;

    const classString = classNames(prefixCls, {
      [`${prefixCls}-${size}`]: size !== 'default',
      [`${prefixCls}-clickable`]: clickable,
      [`${prefixCls}-verified`]: verified,
      [`${prefixCls}-loading`]: loading,
    }, className);

    const iconProps = {
      type: loading ? 'loading' : 'user',
      className: `${prefixCls}-icon`,
    };

    return (
      <span
        {...restProps}
        className={classString}
        style={style}
        onClick={this.handleClick}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
      >
        <Icon {...iconProps} />
        <span className={`${prefixCls}-username`}>{displayName}</span>
        {verified && (
          <Icon
            type="check-circle"
            className={`${prefixCls}-verified-badge`}
          />
        )}
      </span>
    );
  }
}
