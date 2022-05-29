import styles from './friend-list.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => {
  const elements = friends.map(friend => (
    <FriendListItem {...friend} key={friend.id} />
  ));
  return <ul className={styles['friend-list']}>{elements}</ul>;
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
