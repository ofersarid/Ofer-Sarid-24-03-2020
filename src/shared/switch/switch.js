import React, { PureComponent } from 'react';
import cx from 'classnames';
import { Keyframes } from 'react-spring/renderprops';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import SwitchItem from './switch-item';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { user } from '../../services';

class Switch extends PureComponent {
  constructor(props) {
    super(props);
    this.prevIndex = 0;
  }

  componentDidMount() {
    const index = this.getSelectedIndex();
    this.prevIndex = index;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.prevIndex = this.getSelectedIndex();
  }

  getSelectedIndex() {
    const { selected, options } = this.props;
    return options.findIndex(opt => opt === selected);
  }

  onChange(item) {
    const { onChange } = this.props;
    onChange(typeof item === 'string' ? item : item.value);
  }

  render() {
    const { className, options, theme } = this.props;
    const index = this.getSelectedIndex();
    const childWidth = 100 / options.length;
    const from = {
      left: this.prevIndex * childWidth,
      right: (this.prevIndex + 1) * childWidth
    };
    const to = {
      left: index * childWidth,
      right: (index + 1) * childWidth
    };

    const direction = to.left < from.left ? 'left' : 'right';

    const configFrom = {
      mass: 1,
      tension: 400,
      friction: 36
    };
    const configTo = {
      mass: 2,
      tension: 400,
      friction: 36
    };
    const Springs = Keyframes.Spring({
      indicate: async (next) => {
        await next({
          from: direction === 'right' ? {
            right: `${100 - from.right}%`,
            left: `${from.left}%`
          } : {
            left: `${from.left}%`,
            right: `${100 - from.right}%`
          },
          to: direction === 'right' ? {
            right: `${100 - to.right}%`,
            left: `${from.left}%`
          } : {
            left: `${to.left}%`,
            right: `${100 - from.right}%`
          },
          config: configFrom
        });
        await next({
          from: direction === 'right' ? { left: `${from.left}%` } : { right: `${100 - from.right}%` },
          to: direction === 'right' ? { left: `${to.left}%` } : { right: `${100 - to.right}%` },
          config: configTo
        });
      }
    });

    return (
      <Springs state="indicate" >
        {springs => <div className={cx(styles.switch, styles[theme], className)} >
          <div className={cx('indicator', styles.indicator, styles[theme])} style={springs} />
          {options.map(item => (
            <SwitchItem
              key={item.view || item}
              onClick={() => this.onChange(item)} >{item.view || item}</SwitchItem >
          ))}
        </div >}
      </Springs >
    );
  }
}

Switch.propTypes = {
  selected: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    value: PropTypes.any,
    view: PropTypes.any
  })])),
  theme: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  theme: user.selectors.theme(state),
});

export default compose(
  connect(mapStateToProps, {})
)(Switch);
