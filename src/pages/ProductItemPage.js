import { Box } from 'components/Box/Box';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BuyBtnPage } from 'components/Base/Base';
import { fetchProductItem } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductItem, selectIsLoadingProduct } from 'redux/selectors';
import { addProduct } from 'redux/cart';

export const ProductItemPage = () => {
  const params = useParams();
  const productData = useSelector(selectProductItem);
  const isLoading = useSelector(selectIsLoadingProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductItem(params.productId));
  }, [dispatch, params.productId]);

  const handleBuy = () => {
    dispatch(addProduct(+params.productId));
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
              <BuyBtnPage type="button" onClick={handleBuy}>
                Buy
              </BuyBtnPage>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};
