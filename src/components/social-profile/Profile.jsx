import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({user}) => {
  const {stats, avatar, name, tag, location} = user;
  const statistic = Object.entries(stats);

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{`@${tag}`}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {statistic.map((item, index) => (
          <li key={index} className={styles.st_items}>
            <span className={styles.label}>{item[0]}</span>
            <span className={styles.quantity}>{item[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
  }),
};

export default Profile;
