import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Icon, Button } from '@material-ui/core';
import { Card, CardContent, Typography} from '@material-ui/core';
import { Visibility, VisibilityOff, ExitToApp } from '@material-ui/icons';
import { RegisterValidate } from './../validates/RegisterValidate';
import { Link } from "react-router-dom";

import './../App.css';

import { useStyles } from './../Style';

export const Register = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: '',email: '',password: '',
    confirmPassword: '',showPassword: false,
    validateName: false, textName: '',
    validateEmail: false, textEmail: '',
    validatePassword: false, textPassword: '',
    validateConfirmPassword: false, textConfirmPassword:''

  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const register = async () => {
    const validate = await RegisterValidate(
      { name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword
      });
      if(validate){
        setValues({ ...values,
           validateName: validate.errorName,
           textName: validate.textName,
           validateEmail: validate.errorEmail,
           textEmail: validate.textEmail,
           validatePassword: validate.errorPassword,
           textPassword: validate.textPassword,
           validateConfirmPassword: validate.errorConfirmPassword,
           textConfirmPassword: validate.textConfirmPassword,
          });
      }
      else {
        console.log("hahahaha");
      }
  }



  return (
    <>
    <div className="container">
    <Typography className={classes.cardTopTitle}>
       Resep Mau
    </Typography>
  <Card className={classes.card} variant="outlined">
     <CardContent>
     <Typography className={classes.cardTitle}>Register</Typography>

    <TextField className={classes.field}
     error={values.validateName}
     helperText={values.textName}
     id="outlined-basic"
     type="text"
     onChange = {(e) => setValues({...values, name: e.target.value})}
     label="Nama"
     variant="outlined"
     InputProps={{
           endAdornment:
           <InputAdornment position="end">
             <Icon color="primary" className={classes.icon}>face</Icon>
           </InputAdornment>,
         }}
      />

    <TextField className={classes.field}
    error={values.validateEmail}
    helperText={values.textEmail}
    id="outlined-basic"
    type="email"
    onChange = {(e) => setValues({...values, email: e.target.value})}
    label="Email"
    variant="outlined"
    InputProps={{
          endAdornment:
          <InputAdornment position="end">
            <Icon color="primary" className={classes.icon}>email</Icon>
          </InputAdornment>,
        }}
     />

    <TextField className={classes.field}
    error={values.validatePassword}
    helperText={values.textPassword}
    id="outlined-basic"
    type={values.showPassword ? 'text' : 'password'}
    onChange = {(e) => setValues({...values, password: e.target.value})}
    label="password"
    variant="outlined"
    InputProps={{
          endAdornment:
          <InputAdornment position="end">
            <Icon color="primary" className={classes.icon}>lock</Icon>
          </InputAdornment>,
        }}
   />

     <TextField className={classes.field}
     error={values.validateConfirmPassword}
     helperText={values.textConfirmPassword}
     type={values.showPassword ? 'text' : 'password'}
     onChange = {(e) => setValues({...values, confirmPassword: e.target.value})}
     label="konfirmasi password"
     variant="outlined"
     InputProps={{
           endAdornment:
           <InputAdornment position="end">
           <IconButton
                  aria-label="toggle password visibility"
                  color="primary"
                 onClick={handleClickShowPassword}
                >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
           </InputAdornment>,
         }}
      />

      </CardContent>
        <Button
        className={classes.button}
        variant="contained"
        color="primary"
        startIcon={<ExitToApp />}
        onClick={register}>Register</Button>

        <Button
        className={classes.buttonRegister}
         size="small"
         color="primary">
        <Link to="/">   Sudah Punya Akun ? </Link>
         </Button>
     </Card>
     </div>
     </>
 )
}
