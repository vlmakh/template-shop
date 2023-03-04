import {
  StyledForm,
  StyledField,
  Label,
  StyledErrorMsg,
  Button,
} from './Login.styled';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginGoogle, login } from 'redux/operations';
import * as yup from 'yup';
import { selectIsCheckingLogin } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const Login = () => {
  const dispatch = useDispatch();
  const isCheckingLogin = useSelector(selectIsCheckingLogin);
  const { push } = useNavigate();

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
    push('/cabinet');
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
    >
      <StyledForm>
        <Label htmlFor="email">
          <span>email</span>
          <StyledField name="email" type="text" placeholder=" "></StyledField>
          <StyledErrorMsg component="div" name="email" />
        </Label>

        <Label htmlFor="password">
          <span>password </span>
          <StyledField
            name="password"
            type="password"
            placeholder=" "
            autoComplete="off"
          ></StyledField>
          <StyledErrorMsg component="div" name="password" />
        </Label>

        <Button type="submit" disabled={isCheckingLogin}>
          Login
        </Button>
        <Button
          type="button"
          onClick={handleLoginGoogle}
          disabled={isCheckingLogin}
        >
          Login with Google
        </Button>
      </StyledForm>
    </Formik>
  );
};
