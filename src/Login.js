import React, { useState } from 'react';
import './Login.css';
import { Button } from '@mui/material';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, InputBase } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: purple[500],
    },
  },
  notchedOutline: {},
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});


export default function RowAndColumnSpacing(props) {
  const { classes } = props;
  const [LADP, setname] = useState('');
  const [Name, setName] = useState('');
  const [Extension, setExtension] = useState('');
  const [Store, setStore] = useState('');
  const [Phone, setPhone] = useState('');
  const [DeviceExtension, setDeviceExtension] = useState('');
  const [DeviceSerialNumber, setDeviceSerialNumber] = useState('');
  const [DamageType, setDamageType] = useState('');
  const [Note, setNote] = useState('');



  const Submit = (e) => {
    e.preventDefault();
    const value = ({
      LADP,
      Name,
      Extension,
      Store,
      Phone,
      DeviceExtension,
      DeviceSerialNumber,
      DamageType,
      Note
    });
    console.log(value);
  }
  return (
    <div>
      <div align='center'>
        <h1 style={{ color: 'rgba(255, 123, 0, 0.973)' }}>Damaged TC52AX hdPhone Replacement
          Form
        </h1>
        <h3 style={{ color: 'rgba(255, 30, 0, 0.753)' }}><i>To replace a stolen device or
          for ordering additional devices,please use Ariba </i></h3>
        <h4 style={{ color: 'rgba(0, 0, 0, 0.699)' }}>Thank you using the TC52AX hdPhone
          Replacement form.Please describe the nature of your problem in the fileds below.</h4>
        <h4 style={{ color: 'color:black' }} >For non-damage related issues,please call Technology
          Supports Center:800-791-2750
        </h4>
        <h3 style={{ color: 'color:rgb(255, 0, 0)' }} ><b>Do not use this form for devices stuck on
          enrolling, the TSC can fix your device if you call it in.</b></h3>
      </div>
      <div className={classes.root}>
        <form onSubmit={Submit}>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="input" className={classes.bootstrapFormLabel}>
              LADP<span>*</span>
            </InputLabel>
            <InputBase
              id="input"
              placeholder="RTESTUSER03" required
              onChange={e => { setname(e.target.value) }}
              classes={{
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              }}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="input" className={classes.bootstrapFormLabel}>
              Name<span>*</span>
            </InputLabel>
            <InputBase
              id="input"
              placeholder="Rachel Testuser03" required
              onChange={e => { setName(e.target.value) }}
              classes={{
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              }}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="input" className={classes.bootstrapFormLabel}>
              Extension<span>#</span>
            </InputLabel>
            <InputBase
              id="input"
              required
              onChange={e => { setExtension(e.target.value) }}
              classes={{
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              }}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="input" className={classes.bootstrapFormLabel}>
              Store Number<span>*</span>
            </InputLabel>
            <InputBase
              id="input"
              required
              onChange={e => { setStore(e.target.value) }}
              classes={{
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              }}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="input" className={classes.bootstrapFormLabel}>
              Phone Type<span>*</span>
            </InputLabel>
            <InputBase
              id="input"
              required
              placeholder="RTESTUSER03"
              onChange={e => { setPhone(e.target.value) }}
              classes={{
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              }}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="input" className={classes.bootstrapFormLabel}>
              Device Extension<span>*</span>
            </InputLabel>
            <InputBase
              id="input"
              required
              placeholder="#"
              onChange={e => { setDeviceExtension(e.target.value) }}
              classes={{
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              }}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="input" className={classes.bootstrapFormLabel}>
              DeviceSerialNumber<span>*</span>
            </InputLabel>
            <InputBase
              id="input"
              required
              placeholder="#"
              onChange={e => { setDeviceSerialNumber(e.target.value) }}
              classes={{
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              }}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="input" className={classes.bootstrapFormLabel}>
              Damage Type<span>*</span>
            </InputLabel>
            <InputBase
              id="input"
              required
              onChange={e => { setDamageType(e.target.value) }}
              classes={{
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              }}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="input" className={classes.bootstrapFormLabel}>
              Damage Type<span>*</span>
            </InputLabel>
            <InputBase
              required
              onChange={e => { setNote(e.target.value) }}
              classes={{
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              }}
            />
          </FormControl>
          <Button type='submit' > Submit</Button>
        </form>
      </div>
    </div >
  );
}




