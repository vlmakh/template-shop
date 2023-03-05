import { StyledForm, Label } from './Sort.styled';
import { Box } from 'components/Box/Box';
import { Formik, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from 'redux/selectors';
import { priceup, pricedown, nameup, namedown } from 'redux/products';

export const Sort = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const handleSubmit = values => {
    if (values.sort === 'priceup') {
      dispatch(priceup(products));
    }
    if (values.sort === 'pricedown') {
      dispatch(pricedown(products));
    }
    if (values.sort === 'nameup') {
      dispatch(nameup(products));
    }
    if (values.sort === 'namedown') {
      dispatch(namedown(products));
    }
  };

  return (
    <Box width="160px" pt={4}>
      <Formik
        initialValues={{
          sort: '',
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {({ values }) => (
          <StyledForm>
            <h4>Sort by</h4>

            <Label>
              <Field type="radio" name="sort" value="priceup" />
              Price up
            </Label>
            <Label>
              <Field type="radio" name="sort" value="pricedown" />
              Price down
            </Label>
            <Label>
              <Field type="radio" name="sort" value="nameup" />
              Name up
            </Label>
            <Label>
              <Field type="radio" name="sort" value="namedown" />
              Name down
            </Label>
            <button type="submit">Apply Sort</button>
          </StyledForm>
        )}
      </Formik>
    </Box>
  );
};
