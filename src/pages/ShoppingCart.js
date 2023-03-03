import { Box } from 'components/Box/Box';
import { Navigate } from 'react-router-dom';

export const ShoppingCart = ({ isLoggedIn }) => {
  return (
    <>
      {!isLoggedIn && <Navigate to="/" />}

      <Box display="flex" alignItems="center" justifyContent="center">
        <h2>SHOPPING CART</h2>
      </Box>
    </>
  );
};
