import { Box } from 'components/Box/Box';
import { ProductCard } from 'components/ProductCard/ProductCard';
import {
  BuyBtnCard,
  ProductLink,
} from 'components/ProductCard/ProductCard.styled';
import { List, Item } from 'components/Base/Base';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProducts } from 'redux/operations';
import {
  selectIsLoading,
  selectIsLoggedIn,
  selectFilteredProducts,
} from 'redux/selectors';
import { addProduct } from 'redux/cart';
import { Modal } from 'components/Modal/Modal';
import { InfoBox } from 'components/InfoBox/InfoBox';
import { Sort } from 'components/Sort/Sort';

export const ProductsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const filteredProducts = useSelector(selectFilteredProducts);
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
        <Box pt="40px" display="flex" textAlign="center">
          <Sort />

          <Box>
            <List>
              {filteredProducts.map(product => {
                return (
                  <Item key={product.id}>
                    <ProductLink to={`${product.id}`}>
                      <ProductCard product={product} />
                    </ProductLink>
                    <BuyBtnCard
                      type="button"
                      onClick={() => handleBuy(product.id)}
                    >
                      Buy
                    </BuyBtnCard>
                  </Item>
                );
              })}
            </List>
          </Box>
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
