import { Box } from 'components/Box/Box';
import { Navigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, selectCart } from 'redux/selectors';
import { fetchSelected } from 'redux/operations';
import { deleteProduct } from 'redux/cart';
import { useEffect, useState } from 'react';
import { ShopTable } from 'components/ShopTable/ShopTable.styled';

export const ShoppingCart = () => {
  const selected = useSelector(selectCart);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSelected(selected).then(data => {
      setCart(data);
    });
  }, [selected]);

  const totalSum = arr => {
    return arr.reduce((acc, el) => {
      return acc + el.price * el.qty;
    }, 0);
  };

  const handleDelete = id => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      {!isLoggedIn && <Navigate to="/login" />}

      <Box textAlign="center" mt={6}>
        <h2>SHOPPING CART</h2>

        {!cart.length && <p>Your Shopping cart is empty</p>}

        {cart.length > 0 && (
          <ShopTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Pcs</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>
                      <Link to={`/products/${item.id}`}>{item.title} </Link>
                    </td>
                    <td>{item.price.toFixed(2)}</td>
                    <td>{item.qty}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            <tfoot>
              <tr>
                <td>Total USD: </td>
                <td>{totalSum(cart).toFixed(2)}</td>
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </ShopTable>
        )}
      </Box>
    </>
  );
};
