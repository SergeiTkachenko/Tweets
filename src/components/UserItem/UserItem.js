import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  FollowButton,
  FollowersStyled,
  FollowingButton,
  Item,
  LogoImg,
  PictureImg,
  TweetsStyled,
  UserImageCircle,
  UserImageLine,
  UserImageWrapper,
  UserImg,
  UserStyled,
} from './UserItem.styled';
import logo from 'images/logo.svg';
import picture from 'images/picture.png';

export const ContactItem = ({ user, tweets, followers, avatar }) => {
  const [isFollow, setIsFollow] = useState(false);

  const handleFollowUser = () => {
    setIsFollow(!isFollow);
  };

  return (
    <Item>
      <LogoImg src={logo} alt="GoIT logo"></LogoImg>
      <PictureImg src={picture} alt="pic message"></PictureImg>
      <div>
        <UserImageWrapper>
          <UserImageLine>
            <UserImageCircle>
              <UserImg src={avatar} alt={user} />
            </UserImageCircle>
          </UserImageLine>
        </UserImageWrapper>

        <UserStyled>{user}</UserStyled>
        <TweetsStyled>{tweets} tweets</TweetsStyled>
        <FollowersStyled>{followers} followers</FollowersStyled>
      </div>

      {!isFollow && (
        <FollowButton onClick={handleFollowUser}>follow</FollowButton>
      )}
      {isFollow && (
        <FollowingButton onClick={handleFollowUser}>following</FollowingButton>
      )}
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
