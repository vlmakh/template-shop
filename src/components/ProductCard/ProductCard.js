import { CardWrap } from './ProductCard.styled';
import { Box } from 'components/Box/Box';

export const ProductCard = ({ product }) => {
  return (
    <CardWrap>
      <Box width="100px" height="100px" overflow="hidden" mx="auto">
        <img src={product.image} alt={product.title} width="100%" />
      </Box>

      <Box>
        <h4>{cutName(product.title)}</h4>
        <p>{product.category}</p>
      </Box>

      <Box>
        <p>{product.price.toFixed(2)} USD</p>
      </Box>
    </CardWrap>
  );
};

function cutName(name) {
  if (name.length > 36) {
    return name.slice(0, 36) + '...';
  }
  return name;
}
