import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={cx('transaction-history ', styles.table)}>
    <thead>
      <tr className={styles.row}>
        <th className={styles.head}>Type</th>
        <th className={styles.head}>Amount</th>
        <th className={styles.head}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr key={id} className={styles.row}>
          <td className={styles.item}>{type}</td>
          <td className={styles.item}>{amount}</td>
          <td className={styles.item}>{currency}</td>
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
