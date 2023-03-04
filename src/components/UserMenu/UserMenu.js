import { StyledLink, StyledLinkBtn } from 'components/Base/Base';
import { UserMenuBox } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <UserMenuBox>
      <StyledLink to="/cart">Shopping Cart</StyledLink>

      <StyledLink to="/cabinet">Cabinet</StyledLink>

      <StyledLinkBtn type="button" onClick={handleLogout}>
        Logout
      </StyledLinkBtn>
    </UserMenuBox>
  );
};
