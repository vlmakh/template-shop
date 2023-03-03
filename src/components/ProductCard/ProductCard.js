import { CardWrap } from './ProductCard.styled';
import { Box } from 'components/Box/Box';

export const ProductCard = ({ product }) => {
  return (
    <CardWrap>
      <Box width="100px" height="100px" overflow="hidden">
        <img src={product.image} alt={product.title} width="100%" />
      </Box>

      <h4>{product.title}</h4>

      <Box>
        <p>{product.price} USD</p>
      </Box>
    </CardWrap>
  );
};
