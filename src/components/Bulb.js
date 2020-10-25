
import React from 'react';
import Container from '@material-ui/core/Container';

const Bulb = (props) => {
  return (
    <Container maxWidth="md" style={{
        backgroundImage : "url(" + process.env.PUBLIC_URL + '/bulb'+ props.state +'.svg)',
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'right 50% top 10%',
        height: 410}}>
    </Container>
  )
}

export default Bulb