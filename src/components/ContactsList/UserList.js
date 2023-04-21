import { useEffect, useState } from 'react';
import { ContactItem } from '../UserItem/UserItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { fetchUsers } from 'redux/operations';
import { LoadMoreButton } from './UserList.Styled';

export const UserList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    setAllContacts(prevContacts => [...prevContacts, ...contacts]);
  }, [contacts]);

  const itemsPerPage = 3;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleContacts = allContacts.slice(0, endIndex);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <ul>
        {visibleContacts.map(({ id, user, followers, avatar, tweets }) => (
          <ContactItem
            key={id}
            user={user}
            followers={formatter.format(followers)}
            id={id}
            avatar={avatar}
            tweets={formatter.format(tweets)}
          />
        ))}
      </ul>
      {contacts.length > visibleContacts.length && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}
    </div>
  );
};
