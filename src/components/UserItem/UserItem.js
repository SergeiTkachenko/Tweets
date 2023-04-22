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
import { useDispatch } from 'react-redux';
import { editUser } from 'redux/operations';

export const UserItem = ({
  userName,
  tweets,
  followers,
  avatar,
  id,
  followingStatus,
}) => {
  const [isFollow, setIsFollow] = useState(followingStatus);
  // localStorage.getItem(`isFollow_${id}`) === 'true'
  const [followersCount, setFollowersCount] = useState(parseInt(followers));

  const dispatch = useDispatch();

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const handleFollowUser = () => {
    setIsFollow(true);
    const newFollowersCount = followersCount + 1;
    setFollowersCount(newFollowersCount);
    dispatch(
      editUser({
        id,
        followers: newFollowersCount,
        followingStatus: true,
      })
    );
  };

  const handleUnFollowUser = () => {
    setIsFollow(false);
    const newFollowersCount = followersCount - 1;
    setFollowersCount(newFollowersCount);
    dispatch(
      editUser({
        id,
        followers: newFollowersCount,
        followingStatus: false,
      })
    );
  };

  // useEffect(() => {
  //   localStorage.setItem(`isFollow_${id}`, isFollow);
  // }, [isFollow, id]);

  return (
    <Item>
      <LogoImg src={logo} alt="GoIT logo"></LogoImg>
      <PictureImg src={picture} alt="pic message"></PictureImg>
      <div>
        <UserImageWrapper>
          <UserImageLine>
            <UserImageCircle>
              <UserImg src={avatar} alt={userName} />
            </UserImageCircle>
          </UserImageLine>
        </UserImageWrapper>

        <UserStyled>{userName}</UserStyled>
        <TweetsStyled>{formatter.format(tweets)} tweets</TweetsStyled>
        <FollowersStyled>
          {formatter.format(followersCount)} followers
        </FollowersStyled>
      </div>

      {!isFollow && (
        <FollowButton onClick={handleFollowUser}>follow</FollowButton>
      )}
      {isFollow && (
        <FollowingButton onClick={handleUnFollowUser}>
          following
        </FollowingButton>
      )}
    </Item>
  );
};

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.any,
  avatar: PropTypes.string.isRequired,
};
