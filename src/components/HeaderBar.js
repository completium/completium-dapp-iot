import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../index.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import WalletButton from './WalletButton';
import Button from '@material-ui/core/Button';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const HeaderBar = (props) => {
  const minWidth = useMediaQuery('(min-width:600px)');
  var visible = minWidth?'visible':'hidden';
  var dark = props.theme.palette.type === 'dark';
  return (
    <AppBar position="static" color={dark?"default":"secondary"} style={{
      boxShadow: "none",
      opacity: 1 }}>
      <Toolbar>
        <a href="https://edukera.github.io/completium-landing/index.html" target="_blank" style={{ color: 'white', height: '32px' }}>
          <Typography variant="h6" style={{ position : 'absolute', fontFamily : 'Alegreya Sans SC, sans-serif' }}>
            Completium
          </Typography>
        </a>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h6" style={{
              visibility: visible,
              textAlign: 'center',
              }}>
              {props.appTitle}
            </Typography>
          </Grid>
        </Grid>
        { (props.istouch) ? (
            <div></div>
          ) : (
            <WalletButton />
          )
        }
        <a href="https://edukera.github.io/completium-landing/docs/dapp-miles/miles-use-case1" target="_blank">
          <Button style={{ color: 'white' }} component="span">
            <HelpOutlineIcon/>
          </Button>
        </a>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar