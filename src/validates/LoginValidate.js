
export const LoginValidate = ({email, password}) => {

  let msg = {}
  if (email === '' || email.match(/^[a-zA-Z]+$/)) {
    msg.errorEmail = true;
    msg.textEmail = 'Masukan email nama anda';
    return msg
  }else if(password === '') {
    msg.errorPassword = true;
    msg.textPassword = 'Masukan password nama anda';
    return msg
  }
  return false
}
