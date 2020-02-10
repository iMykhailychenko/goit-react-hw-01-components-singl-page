import React from 'react';
import PropTypes from 'prop-types';
import FriendsItem from './FriendsItem';
import styles from './FriendsList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      <FriendsItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
