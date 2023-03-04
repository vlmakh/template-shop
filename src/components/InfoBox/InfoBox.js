import { InfoWrap } from './InfoBox.styled';
import { Link } from 'react-router-dom';

export const InfoBox = ({ msg }) => {
  return (
    <InfoWrap>
      <h3>{msg}</h3>
      <Link to="/login">Login</Link>
    </InfoWrap>
  );
};
