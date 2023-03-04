import { Outlet } from 'react-router-dom';
import { Layout, Header, Nav, Footer, MyLink } from './SharedLayout.styled';
import { StyledLink } from 'components/Base/Base';
import { LogoVM } from 'components/LogoVM/LogoVM';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Layout>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="products">Products</StyledLink>
        </Nav>

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <StyledLink to="/login">Login/Register</StyledLink>
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
