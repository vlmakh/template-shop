import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';

export const useAuth = () => {
  const { email, token, name } = useSelector(selectUser);

  return {
    isAuth: !!email,
    email,
    token,
    name,
  };
};
