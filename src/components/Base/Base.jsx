import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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

  transition: background-color 250ms ease-in;

  :hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 700;
  color: #212121;
  text-decoration: none;
  cursor: pointer;

  transition: color 250ms ease-in;

  &.active {
    font-weight: 700;
    color: ${(p) => p.theme.colors.accent};
  }

  :hover {    
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const StyledLinkBtn = styled.button`
  font-size: 16px;
  font-weight: 700;
  color: #212121;
  border: none;
  background-color: transparent;
  cursor: pointer;

  transition: color 250ms ease-in;

  :hover {    
    color: ${(p) => p.theme.colors.accent};
  }
`