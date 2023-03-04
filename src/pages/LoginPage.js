import { Box } from 'components/Box/Box';
import { LoginBox } from 'components/LoginBox/LoginBox';
import { MenuLink } from 'components/Login/Login.styled';
import { Login } from 'components/Login/Login';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;
      console.log(`User ${uid} is in system`);
    } else {
      console.log('User is signed out');
    }
  });

  return (
    <Box>
      {isLoggedIn && <Navigate to="/products" />}

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
