import { Box } from 'components/Box/Box';
import { LoginBox } from 'components/LoginBox/LoginBox';
import { MenuLink } from 'components/Login/Login.styled';
import { Login } from 'components/Login/Login';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box>
      {isLoggedIn && <Navigate to="/cabinet" />}

      <LoginBox>
        <Box display="flex" justifyContent="space-around">
          <MenuLink to="/login">Login</MenuLink>
          <MenuLink to="/register">Registration</MenuLink>
        </Box>

        <Login />
      </LoginBox>
    </Box>
  );
};
