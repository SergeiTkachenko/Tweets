import PropTypes from 'prop-types';
import { useState } from 'react';
import { Item } from './ContactItem.styled';

export const ContactItem = ({ user, tweets, followers, avatar }) => {
  const [isFollow, setIsFollow] = useState(false);

  const handleFollowUser = () => {
    setIsFollow(!isFollow);
  };

  return (
    <Item>
      <>
        <img src={avatar} alt={user} />
        <div>{tweets} tweets</div>
        <div>{followers} followers</div>
        <div>{user}</div>
      </>

      {!isFollow && <button onClick={handleFollowUser}>follow</button>}
      {isFollow && <button onClick={handleFollowUser}>following</button>}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
