import { Filter } from './UsersFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';

export const UsersFilter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSetFilter = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <Filter>
      Find users by name
      <input type="text" value={value} onChange={handleSetFilter} />
    </Filter>
  );
};
