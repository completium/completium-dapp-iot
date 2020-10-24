import './App.css';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { appTitle, appName } from './settings.js';
import HeaderBar from './components/HeaderBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Footer from './components/Footer';

function App() {
  return <PageRouter />
}

function PageRouter () {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          secondary: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
            contrastText: '#fff',
          }
        },
      }),
    [prefersDarkMode],
  );
  const handleConnect = () => {};
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <HeaderBar appTitle={appTitle} handleConnect={handleConnect} />
    <Container maxWidth="md" style={{
      backgroundImage : "url(" + process.env.PUBLIC_URL + '/wifiplug.svg)',
      backgroundRepeat  : 'no-repeat',
      backgroundPosition: 'right 50% top 10%',
      height: 410}}>
    </Container>
    <Footer appName={appName}></Footer>
    </ThemeProvider>
    )
}

export default App;
