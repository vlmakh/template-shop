import { StyledForm, Label, SortBtn, Category } from './Sort.styled';
import { Box } from 'components/Box/Box';
import { Formik, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from 'redux/selectors';
import { fetchProducts } from 'redux/operations';
import {
  priceup,
  pricedown,
  nameup,
  namedown,
  chooseCategory,
} from 'redux/products';
import { useEffect } from 'react';

export const Sort = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(chooseCategory({ category: [] }));
  }, [dispatch]);

  const uniqCaregories = [
    ...new Set(
      products.map(el => el.category).sort((a, b) => a.localeCompare(b))
    ),
  ];

  const handleRadio = e => {
    if (e.target.value === 'priceup') {
      dispatch(priceup(products));
    }
    if (e.target.value === 'pricedown') {
      dispatch(pricedown(products));
    }
    if (e.target.value === 'nameup') {
      dispatch(nameup(products));
    }
    if (e.target.value === 'namedown') {
      dispatch(namedown(products));
    }
  };

  const handleSubmitCategory = values => {
    if (!values.category.length) {
      dispatch(fetchProducts());
    }

    dispatch(chooseCategory(values));
  };

  return (
    <Box width="160px" pt={4}>
      <Formik
        initialValues={{
          sort: '',
        }}
      >
        <StyledForm onChange={handleRadio}>
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
        </StyledForm>
      </Formik>

      <Box mt={4}>
        <Formik
          initialValues={{
            checked: [],
          }}
          onSubmit={values => {
            handleSubmitCategory(values);
          }}
        >
          <StyledForm>
            <h4>Sort by</h4>

            {uniqCaregories.map(category => {
              return (
                <Label key={category}>
                  <Field type="checkbox" name="category" value={category} />
                  <Category>{category}</Category>
                </Label>
              );
            })}

            <SortBtn type="submit">Apply Sort</SortBtn>
          </StyledForm>
        </Formik>
      </Box>
    </Box>
  );
};
