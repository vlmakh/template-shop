import { Box } from 'components/Box/Box';
import { LoginBox } from 'components/LoginBox/LoginBox';
import { MenuLink } from 'components/Login/Login.styled';
import { Login } from 'components/Login/Login';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectIsLoogedIn } from 'redux/selectors';

export const LoginPage = ({ isLoggedIn, setIsLoggedIn }) => {
  //   const isLoggedIn = useSelector(selectIsLoogedIn);

  return (
    <Box>
      {isLoggedIn && <Navigate to="/products" />}

      <LoginBox>
        <Box display="flex" justifyContent="space-around">
          <MenuLink to="/login">Login</MenuLink>
          <MenuLink to="/register">Registration</MenuLink>
        </Box>

        <Login setIsLoggedIn={setIsLoggedIn} />
      </LoginBox>
    </Box>
  );
};
