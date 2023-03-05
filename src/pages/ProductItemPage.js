import { Box } from 'components/Box/Box';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BuyBtnBig } from 'components/Base/Base';
import { fetchProductItem } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProductItem,
  selectIsLoadingProduct,
  selectIsLoggedIn,
} from 'redux/selectors';
import { addProduct } from 'redux/cart';
import { Modal } from 'components/Modal/Modal';
import { InfoBox } from 'components/InfoBox/InfoBox';

export const ProductItemPage = () => {
  const params = useParams();
  const productData = useSelector(selectProductItem);
  const isLoading = useSelector(selectIsLoadingProduct);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProductItem(params.productId));
  }, [dispatch, params.productId]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBuy = () => {
    if (isLoggedIn) {
      dispatch(addProduct(+params.productId));
      return;
    }
    setShowModal(true);
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}

      {!isLoading && (
        <Box display="flex" alignItems="center" justifyContent="center">
          {productData && (
            <Box textAlign="center">
              <h2>{productData.title}</h2>

              <p>{productData.category}</p>

              <Box width="300px" mx="auto" my={4}>
                <img
                  src={productData.image}
                  alt={productData.title}
                  width="100%"
                />
              </Box>

              <p>{productData.description}</p>
              <p>{productData.price} USD</p>
              <BuyBtnBig type="button" onClick={handleBuy}>
                Buy
              </BuyBtnBig>
            </Box>
          )}
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
