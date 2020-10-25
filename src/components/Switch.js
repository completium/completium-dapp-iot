import Container from '@material-ui/core/Container';
import Footer from './Footer';
import { appName } from '../settings.js';
import Grid from '@material-ui/core/Grid';

const Switch = props => {
  return (<div>
      <Container maxWidth="md" style={{
        backgroundImage : "url(" + process.env.PUBLIC_URL + '/wifiplug.svg)',
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'right 50% top 10%',
        height: 410}}>
      </Container>
      <Container maxWidth="md">
        <Grid container direction="row" spacing={2} style={{ marginBottom: 100 }}>
          <Grid item xs={12}>

          </Grid>
        </Grid>
      </Container>
    <Footer appName={appName}></Footer>
  </div>)
}

export default Switch