import { Container } from './Container';
import { GlobalStyle } from './GlobalStyle';
import { useSelector } from 'react-redux';
// import { AddForm } from './Form/Form';
import { UserList } from './ContactsList/UserList';
// import { ContactFilter } from './ContactsFilter/ContactFilter';
import { selectError, selectIsLoading } from 'redux/selectors';
import Spinner from './Spinner/spinner';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      {/* <AddForm /> */}
      {/* <ContactFilter /> */}
      {isLoading && !error && <Spinner />}
      <UserList />
      <GlobalStyle />
    </Container>
  );
};
