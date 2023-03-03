import { Box } from 'components/Box/Box';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';

export const PersonalPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <>
      {!isLoggedIn && <Navigate to="/login" />}

      <Box textAlign="center" mt={6}>
        <h2>USER CABINET</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </Box>
    </>
  );
};
