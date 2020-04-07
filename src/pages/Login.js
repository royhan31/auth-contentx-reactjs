import React, { useContext } from 'react';
import { TextField, InputAdornment, IconButton, Icon, Button } from '@material-ui/core';
import { Card, CardContent, Typography} from '@material-ui/core';
import { Visibility, VisibilityOff, ExitToApp } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { LoginValidate } from './../validates/LoginValidate';
import { ApiLogin } from './../api/Login';
import { AuthContext } from './../context/AuthState';
import { Link } from "react-router-dom";

import './../App.css';

import { useStyles } from './../Style'

export const Login = () => {
  const classes = useStyles();
  const { userLogin } = useContext(AuthContext);

  const [values, setValues] = React.useState({
    email: '', password: '',
    validateEmail: false, textEmail: '',
    validatePassword: false, textPassword: '',
    showPassword: false, showAlert: false
  });


  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const doLogin = async () => {
    const validate = await LoginValidate({ email: values.email, password: values.password });
      if(validate){
        setValues({ ...values,
           validateEmail: validate.errorEmail,
           textEmail: validate.textEmail,
           validatePassword: validate.errorPassword,
           textPassword: validate.textPassword,
          });
      }else{
        const data = { email: values.email, password: values.password };
        const login = await ApiLogin(data);
        if(login.status === '0'){
          setValues({ ...values, showAlert: !values.showAlert })
        }else{
          userLogin(login.data);
        }
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
     <Typography className={classes.cardTitle}>
        Login
       </Typography>
    {values.showAlert ? <Alert severity="error" className={classes.alert}>Login Gagal</Alert> : ''}
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
            <Icon color="primary" className={classes.icon}>face</Icon>
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
        onClick={doLogin}
        >Login</Button>


        <Button
        className={classes.buttonRegister}
         size="small"
         color="primary">
        <Link to="/register" style={{textDecoration: 'none'}}>
         Belum Punya Akun ?
         </Link>
         </Button>
     </Card>
     </div>
     </>
 )
}
