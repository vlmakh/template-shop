import styled from '@emotion/styled';

export const ShopTable = styled.table`
  max-width: 640px;
  margin: 16px auto 0;
  background-color: white;

  th {
    padding: 8px 0;
    text-transform: uppercase;
    background-color: ${p => p.theme.colors.accent};
    color: #fff;
  }

  td {    
    padding: 8px 0;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid darkgrey;
  }

  td:first-of-type {
    width: 80%;
    text-align: left;
    padding-left: 8px;
    padding-right: 8px;
  }

  tr:nth-of-type(2n + 1) {
    background-color: lightblue;
  }
`;