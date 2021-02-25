import React from 'react';
import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { appTitle, endpoint } from './settings.js';
import HeaderBar from './components/HeaderBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Bulb from './components/Bulb';
import Switch from './components/Switch';
import { TezosToolkit } from '@taquito/taquito';
import { contractAddress, appName, network } from './settings';
import LinearProgress from '@material-ui/core/LinearProgress';
import { DAppProvider, useReady, useConnect, useAccountPkh } from './dapp';
import SnackMsg from './components/SnackMsg';

function App() {
  return (
    ///////////////////////////////////////////////////////////////////////////
    // FIX ME
    // Wrap the App's body with <DAppProvider> tag/function in order to benefit
    // from wallet's service as defined in dapp.js
    ///////////////////////////////////////////////////////////////////////////
    <React.Suspense fallback={null}>
      <PageRouter />
    </React.Suspense>
  );
}

function isTouchDevice () {
  return (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
}

function PageRouter () {
  var ready = useReady();
  var connect = useConnect();
  const [bcSwitch, setBCSwitch] = React.useState(null);
  const [viewSnack, setViewSnack] = React.useState(false);
  const prefersDarkMode = false /*useMediaQuery('(prefers-color-scheme: dark)')*/;
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            light: '#F5F5F5',
            main: '#D3D3D3',
            dark: '#A9A9A9'
          },
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
  const handleConnect = React.useCallback(async () => {
    try {
      await connect(network);
    } catch (err) {
      alert(err.message);
    };
  }, [connect]);
  async function loadSwitchContent () {
    try {
      ///////////////////////////////////////////////////////////////////////////
      // FIX ME:
      // Read contract storage:
      // * rate
      // * date of start
      // * date of stop
      // * user
      ///////////////////////////////////////////////////////////////////////////
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  if (bcSwitch === null) {
    loadSwitchContent();
  }
  const openSnack = () => {
    setViewSnack(true);
  }
  const closeSnack = () => {
    setViewSnack(false);
  }
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <HeaderBar theme={theme} appTitle={appTitle} handleConnect={handleConnect} istouch={isTouchDevice()}/>
    { (bcSwitch === null)? (
        <LinearProgress color="secondary"></LinearProgress>
      ) : (
      (isTouchDevice())? (
        <Bulb loadSwitchContent={loadSwitchContent} switch={bcSwitch}/>
      ) : (
        <Switch
          ready={ready}
          theme={theme}
          switch={bcSwitch}
          loadSwitchContent={loadSwitchContent}
          setBCSwitch={setBCSwitch}
          openSnack={openSnack}
          closeSnack={closeSnack}
        />
    ))}
    <SnackMsg open={viewSnack} theme={theme}/>
    </ThemeProvider>
    )
}

export default App;
