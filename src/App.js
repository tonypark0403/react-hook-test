import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/globalStyles';
import Theme from './styles/theme';
import Board from './pages/Board';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.blackColor};
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Wrapper>
        <Board />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
