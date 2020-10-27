import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useAccountPkh, useTezos } from '../dapp';

const Account = (props) => {
  const address = useAccountPkh();
  const tezos = useTezos();

  const loadBalance = React.useCallback(async () => {
    const bal = await tezos.tz.getBalance(address);
    props.setBalance(tezos.format('mutez', 'tz', bal).toString());
  }, [tezos, address, props.setBalance]);

  // Load initial
  if (props.balance === null) {
    loadBalance();
  }

  return (
      <Container style={{ height: '300px'}}>
        <Container style={{ height: '120px' }}></Container>
        <Paper style={{ opacity: 0.8, paddingLeft: 18, paddingRight: 28 }}>
          { (false) ? (
            <Grid container direction="row" alignItems="center" spacing={2} style={{ height: 64 }}>
              <Grid item xs={12}>
                <LinearProgress color="secondary" />
              </Grid>
            </Grid>
          ) : (
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item xs={2} direction="row">
                <Typography color="textSecondary" style={{ textAlign: 'right' }}>Account :</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography style={{
                  fontFamily: 'Courier Prime, monospace',
                }}>{address}</Typography>
              </Grid>
              {
                <Grid item xs={6}>
                  <Grid container direction="row" justify="flex-end" spacing={2}>
                    <Grid item>
                      <Typography color="textSecondary">Balance:</Typography>
                    </Grid>
                    { (props.balance === null)? (
                        <LinearProgress color="secondary"></LinearProgress>
                      ) : (
                        <Grid item>
                          <Typography>{props.balance} XTZ</Typography>
                        </Grid>
                      )}
                  </Grid>
                </Grid>
              }
            </Grid>
          )}
        </Paper>
      </Container>
    )
}

export default Account