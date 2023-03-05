import styled from '@emotion/styled';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: grid;
  gap: 8px;
  width: 160px;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 8px 16px;
`;

export const Label = styled.label`
  width: 100%;
  text-align: left;
  padding: 8px 0;
`;
