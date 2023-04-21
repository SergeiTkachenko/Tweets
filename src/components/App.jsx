import { Container } from './Container';
import { GlobalStyle } from './GlobalStyle';
import { useSelector } from 'react-redux';
import { UserList } from './UserList/UserList';
import { selectError, selectIsLoading } from 'redux/selectors';
import Spinner from './Spinner/spinner';
// import { UsersFilter } from './UsersFilter/UsersFilter';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      {/* <UsersFilter /> */}
      {isLoading && !error && <Spinner />}
      <UserList />
      <GlobalStyle />
    </Container>
  );
};
