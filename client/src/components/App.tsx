import React from 'react';
import { Global, ThemeProvider, css } from '@emotion/react';
import { StyledEngineProvider } from '@mui/material';
import Dashboard from 'pages/Dashboard';
import theme from 'theme';
import MainLayout from 'layout/MainLayout';

const styles = css`
    *,
    *::before,
    *::after {
      padding: 0;
      margin: 0;
      box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    letter-spacing: normal;
    font-family: 'Montserrat', sans-serif;
    padding: 20px;
    background-color: #fafafa;
  }

  #root {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    height: 100vh;
    /* overflow: hidden; */
  }
`;

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Global
          styles={styles}
        />
        <MainLayout>
          <Dashboard />
        </MainLayout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
