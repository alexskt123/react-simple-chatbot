import styled from 'styled-components';
import defaultTheme from '../theme';

const HeaderTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.headerFontSize};
  width: 100%;
  display: flex;
`;

HeaderTitle.defaultProps = {
  theme: defaultTheme
};

export default HeaderTitle;
