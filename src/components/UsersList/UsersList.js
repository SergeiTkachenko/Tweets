import { useEffect, useState } from 'react';
import { UserItem } from '../UserItem/UserItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredUsers } from 'redux/selectors';
import { fetchUsers } from 'redux/operations';
import {
  UsersListStyled,
  SeleectStyled,
  SeleectOptionStyled,
} from './UsersList.Styled';
import { LoadMoreButton } from 'components/ButtonsStyle/Buttons.styled';

export const UsersList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [allUsers, setAllallUsers] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Show all');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(selectFilteredUsers);

  useEffect(() => {
    setAllallUsers(prevUsers => [...prevUsers, ...users]);
  }, [users]);

  function handleOptionChange(event) {
    const option = event.target.value;
    setSelectedOption(option);
    setPage(1);
  }

  const itemsPerPage = 3;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredUsers =
    selectedOption === 'Follow'
      ? users.filter(user => user.followingStatus)
      : selectedOption === 'Followings Show all'
      ? users.filter(user => !user.followingStatus)
      : users;
  const visibleUsers = filteredUsers.slice(0, endIndex);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SeleectStyled value={selectedOption} onChange={handleOptionChange}>
        <SeleectOptionStyled value="Show all">Show all</SeleectOptionStyled>
        <SeleectOptionStyled value="Follow">Follow</SeleectOptionStyled>
        <SeleectOptionStyled value="Followings Show all">
          Followings Show all
        </SeleectOptionStyled>
      </SeleectStyled>
      <UsersListStyled>
        {visibleUsers.map(
          ({ id, user, followers, avatar, tweets, followingStatus }) => (
            <UserItem
              key={id}
              userName={user}
              followers={followers}
              id={id}
              avatar={avatar}
              tweets={tweets}
              followingStatus={followingStatus}
            />
          )
        )}
      </UsersListStyled>
      {filteredUsers.length > visibleUsers.length && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}
    </div>
  );
};
