
export const RegisterValidate = ({name, email, password, confirmPassword}) => {

  let msg = {}
  if (name === '') {
    msg.errorName = true;
    msg.textName = 'Masukan nama anda';
    return msg
  }else if([...name].length < 3){
    msg.errorName = true;
    msg.textName = 'Nama terlau pendek';
    return msg
  }
  else if(email === ''){
    msg.errorEmail = true;
    msg.textEmail = 'Masukan email anda';
    return msg
  }
  else if (email.match(/^[a-zA-Z]+$/)) {
    msg.errorEmail = true;
    msg.textEmail = 'Masukan email dengan benar';
    return msg
  }
  else if(password === ''){
    msg.errorPassword = true;
    msg.textPassword = 'Masukan password anda';
    return msg
  }
  else if([...password].length < 6){
    msg.errorPassword = true;
    msg.textPassword = 'Password terlalu pendek';
    return msg
  }
  else if(password !== confirmPassword){
    msg.errorConfirmPassword = true;
    msg.textConfirmPassword = 'Password tidak sama';
    return msg
  }
  return false
}
