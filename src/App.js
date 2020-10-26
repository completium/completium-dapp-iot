import './App.css';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { appTitle } from './settings.js';
import HeaderBar from './components/HeaderBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Bulb from './components/Bulb';
import Switch from './components/Switch';

function App() {
  return <PageRouter />
}

function isTouchDevice () {
  return (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
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
    <HeaderBar appTitle={appTitle} handleConnect={handleConnect} istouch={isTouchDevice()}/>
    { (isTouchDevice())? (
        <Bulb state={'off'} />
      ) : (
        <Switch darkMode={prefersDarkMode}/>
    )}
    </ThemeProvider>
    )
}

export default App;
