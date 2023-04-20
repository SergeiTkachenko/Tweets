// import { Component } from 'react';

import { useEffect } from 'react';
import { ContactItem } from '../ContactItem/ContsctItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, followers, avatar, tweets }) => (
          <ContactItem
            key={id}
            name={name}
            followers={followers}
            id={id}
            avatar={avatar}
            tweets={tweets}
          />
        ))}
      </ul>
    </div>
  );
};
