import React from 'react';
import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { appTitle } from './settings.js';
import HeaderBar from './components/HeaderBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Bulb from './components/Bulb';
import Switch from './components/Switch';
import { Tezos } from '@taquito/taquito';
import { contractAddress, appName, network } from './settings';
import LinearProgress from '@material-ui/core/LinearProgress';
import { DAppProvider, useReady, useConnect, useAccountPkh } from './dapp';
import SnackMsg from './components/SnackMsg';

function App() {
  return (
    <DAppProvider appName={appName}>
      <React.Suspense fallback={null}>
        <PageRouter />
      </React.Suspense>
    </DAppProvider>
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
      Tezos.setProvider({rpc: 'https://testnet-tezos.giganode.io/'});
      var contract  = await Tezos.contract.at(contractAddress);
      var cstorage   = await contract.storage();
      var dateofstart = new Date(cstorage.dateofstart);
      var dateofstop = new Date(cstorage.dateofstop);
      var rate = parseInt(0+cstorage.rate[4])/parseInt(0+cstorage.rate[3]);
      var user = cstorage.user;
      setBCSwitch({
        dateofstart: dateofstart,
        dateofstop : dateofstop,
        rate: rate,
        user: user,
      });
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
