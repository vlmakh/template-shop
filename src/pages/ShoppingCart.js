import { Box } from 'components/Box/Box';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export const ShoppingCart = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {!isLoggedIn && <Navigate to="/login" />}

      <Box display="flex" alignItems="center" justifyContent="center">
        <h2>SHOPPING CART</h2>
      </Box>
    </>
  );
};
