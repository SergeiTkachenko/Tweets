import PropTypes from 'prop-types';
import { useState } from 'react';
import { Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/operations';

export const ContactItem = ({ name, tweets, id, followers, avatar }) => {
  // const [editName, setEditName] = useState(name);
  // const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleDelContact = id => {
    dispatch(deleteContact(id));
  };

  // const handleEditContact = () => {
  //   setIsEdit(!isEdit);
  //   if (isEdit) {
  //     dispatch(
  //       editContact({
  //         id,
  //         name: editName,
  //       })
  //     );
  //   }
  // };

  // const handleNameChange = e => {
  //   setEditName(e.target.value);
  // };

  return (
    <Item>
      <>
        <div>{name}</div>

        <div>{tweets}</div>

        <div>{followers}</div>

        <img src={avatar} alt={name} />
      </>

      <button onClick={() => handleDelContact(id)}>follow</button>
      <button onClick={() => handleDelContact(id)}>following</button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
