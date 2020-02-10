import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const colorItem = () => Math.round(Math.random() * 255);
let color = [255, 255, 255];

const Statistics = ({ title, statisticalData }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {statisticalData.map(element => {
        // generate random background color
        const background = [colorItem(), colorItem(), colorItem()];
        const backgroundSum = background.reduce((acum, item) => acum + item, 0);
        
        // in case to have better contrast we'll set black or white font color
        if (backgroundSum > 550) {
          color = color.map(item => 0);
        } else {
          color = color.map(item => 255);
        }
        return (
          <li
            key={element.id}
            className={styles.item}
            style={{
              backgroundColor: `rgba( ${background[0]} , ${background[1]} , ${background[2]}, 0.6)`,
              border: `1px solid rgb( ${background[0]} , ${background[1]} , ${background[2]})`,
              color: `rgb( ${color[0]} , ${color[1]} , ${color[2]})`,
            }}
          >
            <span className={styles.label}>{element.label}</span>
            <span className={styles.percentage}>{element.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  statisticalData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
