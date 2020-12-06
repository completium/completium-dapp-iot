import React from 'react';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import { contractAddress } from '../settings.js';
import DoneIcon from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';

const Bulb = (props) => {
  const state = (props.switch.dateofstop > Date.now())?'on':'off';
  React.useEffect(() => {
    const timer=setTimeout(() => {
      props.loadSwitchContent()
    }, 500);
    // Clear timeout if the component is unmounted
    return () => {
      clearTimeout(timer);
    }
  });
  return (
    <Container maxWidth="md" style={{
        marginTop: 50,
        backgroundImage : "url(" + process.env.PUBLIC_URL + '/bulb'+ state +'.svg)',
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'right 50% top 10%',
        height: 410}}>
        <Grid container direction="column" justify="center" alignItems="center" style={{}}>
          <Grid>
            <Chip
              label={contractAddress}
              color={ "secondary" }
              onDelete={() => {}}
              deleteIcon={  <DoneIcon /> }
              variant="outlined"
              style={{ marginTop: 350 }}
            />
          </Grid>
        </Grid>
    </Container>
  )
}

export default Bulb