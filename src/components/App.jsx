import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectError, selectIsLoading } from 'redux/selectors';
import Spinner from './Spinner/spinner';
import Home from 'pages/Home/Home';
import Tweets from 'pages/Tweets/Tweets';
import Navigation from './Navigation/Navigation';
import { Navigate } from 'react-router-dom';
import { Container } from './Styles/Container';
import { GlobalStyle } from './Styles/GlobalStyle';
import { ScrollToTopButton } from './ScrollToTopButton/ScrollToTopButton';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      {isLoading && !error && <Spinner />}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      <ScrollToTopButton />

      <GlobalStyle />
    </Container>
  );
};
