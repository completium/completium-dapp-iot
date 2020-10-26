import React from 'react';
import './App.css';
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
  const [bcSwitch, setBCSwitch] = React.useState({
    dateofstop  : Date.now(),
    dateofstart : Date.now(),
    rate: 2.5,
    user: 'tz1dZydwVDuz6SH5jCUfCQjqV8YCQimL9GCp'
  });
  const handleInterrupt = (date) => {
    setBCSwitch({
      dateofstart: date,
      dateofstop: date,
      rate: bcSwitch.rate,
      user: bcSwitch.user
    });
  }
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
        <Bulb state={'off'} switch={bcSwitch}/>
      ) : (
        <Switch
          theme={theme}
          switch={bcSwitch}
          setBCSwitch={setBCSwitch}
          handleInterrupt={handleInterrupt}
        />
    )}
    </ThemeProvider>
    )
}

export default App;
