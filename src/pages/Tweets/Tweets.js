import { UsersList } from 'components/UsersList/UsersList';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackButton } from './Tweets.styled';

export default function Tweets() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <>
      <BackButton type="button" onClick={handleGoBack}>
        Go back
      </BackButton>
      <UsersList />
    </>
  );
}
