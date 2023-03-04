import { Box } from 'components/Box/Box';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectCart } from 'redux/selectors';
import { fetchSelected } from 'redux/operations';
import { useEffect, useState } from 'react';

export const ShoppingCart = () => {
  const selected = useSelector(selectCart);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchSelected(selected).then(data => {
      setCart(data);
      console.log(data);
    });
  }, [selected]);

  return (
    <>
      {!isLoggedIn && <Navigate to="/login" />}

      <Box textAlign="center" mt={6}>
        <h2>SHOPPING CART</h2>
        {cart.length > 0 && (
          <ul>
            {cart.map(product => {
              return <li key={product.id}>name: {product.title}</li>;
            })}
          </ul>
        )}
      </Box>
    </>
  );
};
