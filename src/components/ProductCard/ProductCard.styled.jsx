import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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

export const BuyBtn = styled.button`
  width: 100%;
  padding: 16px 0;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid grey;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;

  transition: background-color 250ms ease-in;

  :hover {
    background-color: ${p => p.theme.colors.accent}
  }
`;

export const ProductLink = styled(NavLink)`
text-align: center;
  text-decoration: none;
`;
