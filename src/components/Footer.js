import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../index.css';
import { Grid } from '@material-ui/core';

const Footer = (props) => {
    return (
      <AppBar position="static" color="default" style={{ boxShadow: "none", opacity: 1, heigh: 300 }}>
        <Toolbar style={{ minHeight: 256 }}>
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <Typography variant="body2" color="textSecondary" style={{ flexGrow : 1 }} style={{
                textAlign: 'center'
              }}>
                @copyright {props.appName} 2021
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }

  export default Footer