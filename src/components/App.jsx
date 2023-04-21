import { Container } from './Container';
import { GlobalStyle } from './GlobalStyle';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Loyout/Layout';
// import { UsersList } from './UsersList/UsersList';
import { selectError, selectIsLoading } from 'redux/selectors';
import Spinner from './Spinner/spinner';
import Home from 'pages/Home';
import Tweets from 'pages/Tweets/Tweets';
import Navigation from './Navigation/Navigation';
import { Navigate } from 'react-router-dom';
// import { UsersFilter } from './UsersFilter/UsersFilter';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      {/* <UsersFilter /> */}
      {isLoading && !error && <Spinner />}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </Container>
  );
};
