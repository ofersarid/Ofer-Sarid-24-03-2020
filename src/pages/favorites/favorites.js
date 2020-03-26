import React, { PureComponent } from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
import autoBind from 'auto-bind';
// import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styles from './styles.scss';
import { favorites } from '../../services';
import FavoriteItem from './favorite-item';

class Favorites extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { favorites } = this.props;
    return (
      <div className={cx(styles.favorites)} >
        <div className={styles.inner} >
          <h1 >Favorites</h1 >
          <ul >
            {favorites.map(itm => (
              <FavoriteItem key={itm} _key={itm} />
            ))}
          </ul >
        </div >
      </div >
    );
  }
}

Favorites.propTypes = {
  favorites: ImmutablePropTypes.list.isRequired
};

const mapStateToProps = state => ({
  favorites: favorites.selectors.favorites(state)
});

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Favorites);
