import { Outlet } from 'react-router-dom';
import {
  Layout,
  LayoutLink,
  Header,
  Nav,
  Footer,
  MyLink,
} from './SharedLayout.styled';
import { LogoVM } from 'components/LogoVM/LogoVM';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const SharedLayout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <Layout>
      <Header>
        <Nav>
          <LayoutLink to="/">Home</LayoutLink>
          <LayoutLink to="products">Products</LayoutLink>
        </Nav>

        {isLoggedIn ? (
          <UserMenu setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LayoutLink to="/login">Login/Register</LayoutLink>
        )}
      </Header>

      <Outlet />

      <Footer>
        <MyLink href="https://vlmakh.github.io/my-portfolio/" target="blank">
          <LogoVM />
        </MyLink>
        <p>2023</p>
        <MyLink href="mailto:vlmakh@gmail.com">vlmakh@gmail.com</MyLink>
      </Footer>
    </Layout>
  );
};
