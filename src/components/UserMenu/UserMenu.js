import { LayoutLink } from 'components/SharedLayout/SharedLayout.styled';
import { UserMenuBox } from './UserMenu.styled';
import { auth } from 'utils/firebase';

export const UserMenu = ({ setIsLoggedIn }) => {
  const handleLogout = async () => {
    await auth.signOut();
    setIsLoggedIn(false);
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
