import styled from 'styled-components';
import defaultTheme from '../theme';

const Footer = styled.div`
  position: relative;
  border: 10px solid;
  border-color: ${({ theme }) => theme.headerBgColor};
  border-radius: 8px 8px 8px 8px;
`;

Footer.defaultProps = {
  theme: defaultTheme
};

export default Footer;
