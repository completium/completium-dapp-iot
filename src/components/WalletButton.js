import React from 'react';
import { useReady, useWallet } from '../dapp';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const WalletButton = (props) => {
  const ready = useReady();
  const wallet = useWallet();
  return ((ready) ? (
        <div></div>
      ) :(wallet ? (
          <Button variant="contained" color="secondary"
            disableElevation
            size="small"
            style={{ position: 'absolute', right: '90px' }}
            onClick={props.handleConnect}>
            connect to wallet
          </Button>
        ):(
          <Link href="https://thanoswallet.com/" rel="noopener" underline="none" style={{
            position: 'absolute',
            right: '1%'
          }}>
            <Button variant="contained" size="small" disableElevation
              style={{
                backgroundColor: '#ed8936',
                color: 'white',
                fontWeight: 'bold',
                }}>
              Install Thanos
            </Button>
          </Link>
      )));
}

export default WalletButton;
