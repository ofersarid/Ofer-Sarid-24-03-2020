import React, { PureComponent } from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
import autoBind from 'auto-bind';
// import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { HeartBroken } from '@styled-icons/fa-solid/HeartBroken';
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
          {favorites.size ? (
            <ul >
              {favorites.map(itm => (
                <FavoriteItem key={itm} _key={itm} />
              ))}
            </ul >
          ) : (
            <section className={styles.zeroState}>
              <h2 >You don&apos;t have any favorites.</h2 >
              <HeartBroken />
            </section >
          )}
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
