import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsItem.module.css';

const FriendsItem = ({ friends }) => {
  return (
    <>
      {friends.map(item => (
        <li key={item.id} className={styles.item}>
          <span
            className={item.isOnline ? styles.online : styles.offline}
          ></span>
          <img
            className={styles.avatar}
            src={item.avatar}
            alt="avatar"
          />
          <p className={styles.name}>{item.name}</p>
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
