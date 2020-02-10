import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={'transaction-history ' + styles.table}>
    <thead>
      <tr className={styles.row}>
        <th className={styles.head}>{'Type'}</th>
        <th className={styles.head}>{'Amount'}</th>
        <th className={styles.head}>{'Currency'}</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(item => (
        <tr key={item.id} className={styles.row}>
          <td className={styles.item}>{item.type}</td>
          <td className={styles.item}>{item.amount}</td>
          <td className={styles.item}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
