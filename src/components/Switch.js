import React, { useEffect, useState } from "react";
import Footer from './Footer';
import Container from '@material-ui/core/Container';
import { appName } from '../settings.js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button, CardActionArea, CircularProgress, Divider, Typography } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { contractAddress } from '../settings';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Slider from '@material-ui/core/Slider';
import QRPopup from './QRPopup';

const getDurationLabel = (x,i) => {
  var min = Math.floor(x);
  var sec = (2*x) % 2;
  var lbl = min.toString() + ((sec === 0)? '': '½');
  return lbl;
}

const SwitchOn = (props) => {
  const [duration, setDuration] = useState(0);
  const handleStart = (event) => {
    console.log(props.switch.rate);
    props.setBCSwitch({
      dateofstart: Date.now(),
      dateofstop: Date.now() + duration * 60000,
      rate: props.switch.rate,
      user: props.switch.user
    });
  }
  const handleDuration = (event) => {
    setDuration(event.target.innerText)
  }
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
          color='secondary'
          onChangeCommitted={handleDuration}
        />
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center', marginTop: 0 }}>
        <Typography color="textSecondary">Price for {getDurationLabel(duration)} minute(s):</Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography variant='h6'>{ props.switch.rate * duration }</Typography>
          </Grid>
          <Grid item>
            <Typography color="textSecondary" style={{ marginLeft: 10}}>XTZ</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginBottom: 30, marginTop: 20 }}>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          onClick={handleStart}
        >
          switch on
        </Button>
      </Grid>
    </Grid>)
}

const calculateTimeLeft = (difference) => {
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft;
}

const Charging = (props) => {
  const [timeLeft,setTimeLeft] = useState(calculateTimeLeft(props.dateofstop - Date.now()));
  useEffect(() => {
    const timer=setTimeout(() => {
      setTimeLeft(calculateTimeLeft(props.dateofstop - Date.now()));
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => {
      clearTimeout(timer);
    }
  });
  const percentComplete = Math.floor(100 * (Date.now() - props.dateofstart) / (props.dateofstop - props.dateofstart));
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  })
  if (timerComponents.length === 0) {
    props.handleInterrupt();
  }

  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
      style={{ padding: 12, paddingLeft: 20, marginTop: 0 }}>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <CircularProgress
        style={{ position: 'relative', left: '50px' }}
          variant='static'
          value='100'
          size={100}
          thickness={5}
          color='inherit'>
        </CircularProgress>
        <CircularProgress
          style={{ position: 'relative', left: '-50px' }}
          variant='static'
          value={percentComplete}
          size={100}
          thickness={5}
          color="secondary">
        </CircularProgress>
        <Typography variant='h6' color='secondary' style={{ position: 'relative', top: '-70px', left: '5px' }}>
          {percentComplete}%
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography>
          Time remaining: {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          style={{ margin: 20 }}
          variant="outlined"
          color="inherit"
          disableElevation
          onClick={props.handleInterrupt}
        >
          interrupt
        </Button>
      </Grid>
    </Grid>
  )
}

const Busy = (props) => {
  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
      style={{ padding: 12, paddingLeft: 20, marginTop: 0 }}>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography>Object has been switched on by:</Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography style={{ fontFamily: 'Courier Prime, monospace' }}>
          tz1dZydwVDuz6SH5jCUfCQjqV8YCQimL9GCp
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography>
          Time remaining: 2 minutes 30 seconds
        </Typography>
      </Grid>
      <Grid item></Grid>
    </Grid>
  )
}

const Free = (props) => {
  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
      style={{ padding: 12, paddingLeft: 20, marginTop: 0 }}>
    </Grid>
  )
}

const Switch = props => {
  const [qropen, setQROpen]     = React.useState(false);
  const ready = true; /* TODO : read from wallet */
  const handleOpenQR = (event) => {
    setQROpen(true);
  }
  const handleCloseQR = (event) => {
    setQROpen(false);
  }
  const duration = props.switch.dateofstop - props.switch.dateofstart;
  const charging = duration > 0;
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
              <Typography>{props.switch.rate}ꜩ / minute</Typography>
            </Grid>
          </Grid>
          {/* _______________________________________________________ */}
          <Divider></Divider>
          { (ready)? (
            (charging)? (
              <Charging
                dateofstart={props.switch.dateofstart}
                dateofstop={props.switch.dateofstop}
                handleInterrupt={props.handleInterrupt}
              />
            ) : (
              <SwitchOn
                duration={duration}
                switch={props.switch}
                setBCSwitch={props.setBCSwitch}
              />
            )) : (
              <Busy />
            )
          }
          {/* _______________________________________________________ */}
          <Divider></Divider>
          <CardActionArea onClick={handleOpenQR}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={2} style={{ padding: 22 }}>
              <Grid item xs={2}>
                <Container style={{
                  height: 50,
                  backgroundImage : "url(" + process.env.PUBLIC_URL + '/qr' + ((props.theme.palette.type === 'dark')?'white':'black') + '.svg)',
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
    <QRPopup url={"https://google.fr"} open={qropen} close={handleCloseQR} theme={props.theme}/>
    <Footer appName={appName}></Footer>
  </div>)
}

export default Switch