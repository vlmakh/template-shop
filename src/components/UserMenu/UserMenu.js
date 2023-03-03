import { LayoutLink } from 'components/SharedLayout/SharedLayout.styled';
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
      <LayoutLink to="/cart">Shopping Cart</LayoutLink>

      <LayoutLink to="/cabinet">Cabinet</LayoutLink>

      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </UserMenuBox>
  );
};
