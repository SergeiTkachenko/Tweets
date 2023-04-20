import PropTypes from 'prop-types';
import { useState } from 'react';
import { Item } from './ContactItem.styled';

export const ContactItem = ({ name, tweets, followers, avatar }) => {
  const [isFollow, setIsFollow] = useState(false);

  const handleFollowUser = () => {
    setIsFollow(!isFollow);
  };

  return (
    <Item>
      <>
        <img src={avatar} alt={name} />
        <div>{tweets} tweets</div>
        <div>{followers} followers</div>
        <div>{name}</div>
      </>

      {!isFollow && <button onClick={handleFollowUser}>follow</button>}
      {isFollow && <button onClick={handleFollowUser}>following</button>}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};
