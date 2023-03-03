import { Box } from 'components/Box/Box';
import { LoginBox } from 'components/LoginBox/LoginBox';
import { MenuLink } from 'components/Login/Login.styled';
import { Register } from 'components/Register/Register';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { selectIsLoogedIn } from 'redux/selectors';

export const RegisterPage = () => {
  //   const isLoggedIn = useSelector(selectIsLoogedIn);

  return (
    <Box>
      {/* {isLoggedIn && <Navigate to="/contacts" />} */}

      <LoginBox>
        <Box display="flex" justifyContent="space-around">
          <MenuLink to="/login">Login</MenuLink>
          <MenuLink to="/register">Registration</MenuLink>
        </Box>

        <Register />
      </LoginBox>
    </Box>
  );
};
