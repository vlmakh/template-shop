import { Box } from 'components/Box/Box';
import { Navigate } from 'react-router-dom';

export const PersonalPage = ({ isLoggedIn }) => {
  return (
    <>
      {!isLoggedIn && <Navigate to="/" />}

      <Box display="flex" alignItems="center" justifyContent="center">
        <h2>USER CABINET</h2>
      </Box>
    </>
  );
};
