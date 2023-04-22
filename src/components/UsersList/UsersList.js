import { useEffect, useState } from 'react';
import { UserItem } from '../UserItem/UserItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredUsers } from 'redux/selectors';
import { fetchUsers } from 'redux/operations';
import {
  UsersListStyled,
  SelectStyled,
  SelectOptionStyled,
} from './UsersList.Styled';
import { LoadMoreButton } from 'components/ButtonsStyle/Buttons.styled';

const ITEMS_PER_PAGE_OPTIONS = [3, 6, 9];
const DEFAULT_ITEMS_PER_PAGE = ITEMS_PER_PAGE_OPTIONS[0];

export const UsersList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('Show all');
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(selectFilteredUsers);

  function handleOptionChange(event) {
    const option = event.target.value;
    setSelectedOption(option);
    setPage(1);
  }

  function handleItemsPerPageChange(event) {
    const newItemsPerPage = parseInt(event.target.value);
    setItemsPerPage(newItemsPerPage);
    setPage(1);
  }

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  let filteredUsers = users;

  if (selectedOption === 'Follow') {
    filteredUsers = users.filter(user => user.followingStatus);
  } else if (selectedOption === 'Followings Show all') {
    filteredUsers = users.filter(user => !user.followingStatus);
  }

  const visibleUsers = filteredUsers.slice(0, endIndex);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <div>
        <span>Show per page:</span>
        <SelectStyled value={itemsPerPage} onChange={handleItemsPerPageChange}>
          {ITEMS_PER_PAGE_OPTIONS.map(option => (
            <SelectOptionStyled key={option} value={option}>
              {option}
            </SelectOptionStyled>
          ))}
        </SelectStyled>

        <SelectStyled value={selectedOption} onChange={handleOptionChange}>
          <SelectOptionStyled value="Show all">Show all</SelectOptionStyled>
          <SelectOptionStyled value="Follow">Follow</SelectOptionStyled>
          <SelectOptionStyled value="Followings Show all">
            Followings Show all
          </SelectOptionStyled>
        </SelectStyled>
      </div>
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
