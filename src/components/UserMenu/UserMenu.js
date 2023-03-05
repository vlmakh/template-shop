import { StyledLink, StyledLinkBtn } from 'components/Base/Base';
import { UserMenuBox } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/operations';
import Badge from '@mui/material/Badge';
import { selectCart } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const selected = useSelector(selectCart);

  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <UserMenuBox>
      <Badge badgeContent={getTotalPcs(selected)} color="primary">
        <StyledLink to="/cart">Shopping Cart</StyledLink>
      </Badge>

      <StyledLink to="/cabinet">Cabinet</StyledLink>

      <StyledLinkBtn type="button" onClick={handleLogout}>
        Logout
      </StyledLinkBtn>
    </UserMenuBox>
  );
};

function getTotalPcs(arr) {
  return arr.reduce((acc, el) => {
    return acc + el.qty;
  }, 0);
}
