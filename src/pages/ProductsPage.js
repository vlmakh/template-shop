import { Box } from 'components/Box/Box';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { BuyBtn, ProductLink } from 'components/ProductCard/ProductCard.styled';
import { List, Item } from 'components/Base/Base';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProducts } from 'redux/operations';
import {
  selectProducts,
  selectIsLoading,
  selectIsLoggedIn,
} from 'redux/selectors';
import { addProduct } from 'redux/cart';
import { Modal } from 'components/Modal/Modal';
import { InfoBox } from 'components/InfoBox/InfoBox';
import { Sort } from 'components/Sort/Sort';

export const ProductsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const products = useSelector(selectProducts);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBuy = id => {
    if (isLoggedIn) {
      dispatch(addProduct(id));
      return;
    }
    setShowModal(true);
  };

  return (
    <>
      {isLoading && <div>Loading ...</div>}

      {!isLoading && (
        <Box pt={5} display="flex" textAlign="center">
          <Sort />

          <List>
            {products.map(product => {
              return (
                <Item key={product.id}>
                  <ProductLink to={`${product.id}`}>
                    <ProductCard product={product} />
                  </ProductLink>
                  <BuyBtn type="button" onClick={() => handleBuy(product.id)}>
                    Buy
                  </BuyBtn>
                </Item>
              );
            })}
          </List>
        </Box>
      )}

      {showModal && (
        <Modal onClose={toggleModal}>
          <InfoBox msg="Please Login firstly" />
        </Modal>
      )}
    </>
  );
};
