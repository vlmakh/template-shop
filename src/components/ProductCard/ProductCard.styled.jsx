import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Button } from 'components/Base/Base';

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 200px;
  height: 240px;
  padding: 4px;
  border: 1px solid grey;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: #212121;
`;

export const BuyBtnCard = styled(Button)`
  width: 100%;
  padding: 16px 0;  
  border-radius: 0;
`;

export const ProductLink = styled(NavLink)`
  text-align: center;
  text-decoration: none;
`;
