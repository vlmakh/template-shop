import { Box } from 'components/Box/Box';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { BuyBtn, ProductLink } from 'components/ProductCard/ProductCard.styled';
import { List, Item } from 'components/Base/Base';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from 'redux/operations';
import { selectProducts, selectIsLoading } from 'redux/selectors';

export const ProductsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <div>Loading ...</div>}

      {!isLoading && (
        <Box pt={5} textAlign="center">
          <h2>PRODUCTS PAGE</h2>
          <List>
            {products.map(product => {
              return (
                <Item key={product.id}>
                  <ProductLink to={`${product.id}`}>
                    <ProductCard product={product} />
                  </ProductLink>
                  <BuyBtn type="button">Buy</BuyBtn>
                </Item>
              );
            })}
          </List>
        </Box>
      )}
    </>
  );
};
