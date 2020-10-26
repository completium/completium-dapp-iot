import React from 'react';
import Footer from './Footer';
import Container from '@material-ui/core/Container';
import { appName } from '../settings.js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button, CardActionArea, Divider, Typography } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { contractAddress } from '../settings';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Slider from '@material-ui/core/Slider'

const getDurationLabel = (x,i) => {
  var min = Math.floor(x);
  var sec = (2*x) % 2;
  var lbl = min.toString() + ((sec === 0)? '': '½');
  return lbl;
}

const SwitchOn = (props) => {
  console.log(props.duration);
  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
      style={{ padding: 12, paddingLeft: 20, marginTop: 40 }}>
      <Grid item xs={1}>
        <QueryBuilderIcon />
      </Grid>
      <Grid item xs={11} style={{ paddingRight: 30 }}>
        <Slider
          defaultValue={0}
          aria-labelledby="discrete-slider-small-steps"
          step={0.5}
          marks
          min={0}
          max={15}
          valueLabelDisplay='on'
          color="secondary"
          onChangeCommitted={props.handleDuration}
        />
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center', marginTop: 0 }}>
        <Typography color="textSecondary">Price for {getDurationLabel(props.duration)} minute(s):</Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography variant='h6'>{props.price}</Typography>
          </Grid>
          <Grid item>
            <Typography color="textSecondary" style={{ marginLeft: 10}}>XTZ</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginBottom: 30, marginTop: 20 }}>
        <Button variant="contained" color="secondary" disableElevation>switch on</Button>
      </Grid>
    </Grid>)
}

const Switch = props => {
  const [duration, setDuration] = React.useState('0');
  const PricePerMinute = 2.5;
  const handleDuration = (event) => {
    setDuration(event.target.innerText);
  }
  return (<div>
      <Container maxWidth="md" style={{
        backgroundImage : "url(" + process.env.PUBLIC_URL + '/wifiplug.svg)',
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'right 50% top 10%',
        height: 270}}>
      </Container>
      <Container maxWidth="sm" style={{ marginBottom: 150 }}>
        <Paper>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            style={{ padding: 12, paddingLeft: 20 }}>
            <Grid item xs={1}>
              <RoomIcon />
            </Grid>
            <Grid item xs={11}>
              <Typography
              style={{
                    fontFamily: 'Courier Prime, monospace',
              }}>
              {contractAddress}</Typography>
            </Grid>
            <Grid item xs={1}>
              <LocalOfferIcon />
            </Grid>
            <Grid item xs={11}>
              <Typography>{PricePerMinute}ꜩ / minute</Typography>
            </Grid>
          </Grid>
          {/* _______________________________________________________ */}
          <Divider></Divider>
          {/* _______________________________________________________ */}
          <SwitchOn handleDuration={handleDuration} duration={duration} price={duration * PricePerMinute}/>
          {/* _______________________________________________________ */}
          <Divider></Divider>
          {/* _______________________________________________________ */}
          <CardActionArea>
            <Grid container direction="row" justify="center" alignItems="center" spacing={2} style={{ padding: 22 }}>
              <Grid item xs={2}>
                <Container style={{
                  height: 50,
                  backgroundImage : "url(" + process.env.PUBLIC_URL + '/qrwhite.svg)',
                  backgroundRepeat  : 'no-repeat',
                }} />
              </Grid>
              <Grid item xs={10}>
                <Typography>Click here to get the Object on your Mobile Device.</Typography>
              </Grid>
            </Grid>
          </CardActionArea>
        </Paper>
      </Container>
    <Footer appName={appName}></Footer>
  </div>)
}

export default Switch