import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 16px;
`;

export const Item = styled.li``;

export const BuyBtnPage = styled.button`
  margin-top: 16px;
  width: 200px;
  padding: 16px 0;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: ${p => p.theme.colors.accent};
  }

`;
