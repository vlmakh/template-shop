import { StyledLink, StyledLinkBtn } from 'components/Base/Base';
import { UserMenuBox } from './UserMenu.styled';
import { auth } from 'utils/firebase';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await auth.signOut();
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
