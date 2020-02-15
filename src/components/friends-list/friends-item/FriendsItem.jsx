import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsItem.module.css';

const FriendsItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className={styles.item}>
          <span className={isOnline ? styles.online : styles.offline} />
          <img className={styles.avatar} src={avatar} alt="avatar" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </>
  );
};

FriendsItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendsItem;
