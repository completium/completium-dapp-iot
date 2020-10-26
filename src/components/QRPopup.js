import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import QRcode from 'qrcode.react';

const QRPopup = (props) => {
  return (
    <Dialog open={props.open} onClick={props.close} >
      <MuiDialogTitle>Scan Object's QR code</MuiDialogTitle>
      <MuiDialogContent style={{ paddingBottom: 20 }}>
        <QRcode
          value={props.url}
          size={300}
          includeMargin={false}
          bgColor={props.theme.palette.background.paper}
          fgColor={ (props.theme.palette.type === 'light')? props.theme.palette.common.black:props.theme.palette.common.white}
        />
      </MuiDialogContent>
    </Dialog>)
}

export default QRPopup