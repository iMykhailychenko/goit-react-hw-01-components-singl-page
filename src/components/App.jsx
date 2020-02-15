import React from 'react';

// import components
import Profile from './social-profile/Profile';
import Statistics from './statistics/Statistics';
import FriendsList from './friends-list/FriendsList';
import TransactionHistory from './transaction-history/TransactionHistory';

// import data
import user from './social-profile/user.json';
import statisticalData from './statistics/statistical-data.json';
import friends from './friends-list/friends.json';
import transactions from './transaction-history/transactions.json';
import './base.css';

const App = () => (
  <div className="container">
    <Profile user={{ ...user }} />
    <FriendsList friends={friends} />
    <Statistics title="Upload stats" statisticalData={statisticalData} />
    <TransactionHistory transactions={transactions} />
  </div>
);

export default App;
