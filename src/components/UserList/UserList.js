import { useEffect, useState } from 'react';
import { UserItem } from '../UserItem/UserItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredUsers } from 'redux/selectors';
import { fetchUsers } from 'redux/operations';
import { LoadMoreButton } from './UserList.Styled';

export const UserList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [allUsers, setAllallUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(selectFilteredUsers);

  useEffect(() => {
    setAllallUsers(prevUsers => [...prevUsers, ...users]);
  }, [users]);

  const itemsPerPage = 3;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleUsers = allUsers.slice(0, endIndex);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <ul>
        {visibleUsers.map(({ id, user, followers, avatar, tweets }) => (
          <UserItem
            key={id}
            userName={user}
            followers={followers}
            id={id}
            avatar={avatar}
            tweets={tweets}
          />
        ))}
      </ul>
      {users.length > visibleUsers.length && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}
    </div>
  );
};
