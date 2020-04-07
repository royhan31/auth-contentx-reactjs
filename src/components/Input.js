import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff, Face } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export const Input = ({label, type}) => {

  const classes = useStyles();
  const [passwd, setPasswd] = useState(false);

  const iconPassword = () => {
    if(type === 'password'){
      return <Visibility />
    }
    else if (type === 'password' && !passwd) {
      return <VisibilityOff />
    }
    else {
      return <Face />
    }
  }

  return (
    <>
     <TextField className={classes.root}
     id="outlined-basic"
     type={type}
     label={label}
     variant="outlined"
     InputProps={{
           endAdornment:
           <InputAdornment position="end">
           <IconButton
                  aria-label="toggle password visibility"
                  onChange = {() => !setPasswd}
                >
                {iconPassword()}
                </IconButton>
           </InputAdornment>,
         }}
      />
      </>
  )
}
