import {
  Button,
  StyledForm,
  StyledField,
  Label,
  StyledErrorMsg,
} from 'components/Login/Login.styled';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/operations';
import * as yup from 'yup';
import { selectIsCheckingLogin } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export const Register = () => {
  const dispatch = useDispatch();
  const isCheckingLogin = useSelector(selectIsCheckingLogin);
  const { push } = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
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
          <StyledField name="email" type="email" placeholder=" "></StyledField>
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
          Register
        </Button>
      </StyledForm>
    </Formik>
  );
};
