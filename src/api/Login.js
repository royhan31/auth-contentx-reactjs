export const ApiLogin = ({email, password}) => {
  return fetch('http://resep-mau.herokuapp.com/api/login',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({email: email, password: password})
  }).then(res => res.json()).then(res => res)
}
