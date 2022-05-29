// import { useReducer } from "react";
import FriendList from './components/FriendList/FriendList';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistic/Statistic';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Profile
        user={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Statistics" stats={data} />

      <Statistics stats={data} />

      {/*  Statistics({title: "Upload stats", stats: data}) */}
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
// {friends.map(index => <FriendList friends={index.friends} />)}

// {/* <TransactionHistory/>  */}

export default App;
