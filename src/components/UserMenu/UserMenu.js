import { LayoutLink } from 'components/SharedLayout/SharedLayout.styled';
import { UserMenuBox } from './UserMenu.styled';

export const UserMenu = ({ setIsLoggedIn }) => {
  return (
    <UserMenuBox>
      <LayoutLink to="/cart">Shopping Cart</LayoutLink>

      <LayoutLink to="/cabinet">Cabinet</LayoutLink>

      <button type="button" onClick={setIsLoggedIn}>
        Logout
      </button>
    </UserMenuBox>
  );
};
