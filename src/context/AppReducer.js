export default (state, action) => {
  switch (action.type) {
      case 'USER_REGISTER':
        localStorage.setItem('user', JSON.stringify(action.payload))
        return {
        ...state,
        user: action.payload
      }
      case  'USER_LOGIN':
        localStorage.setItem('user', JSON.stringify(action.payload))
        return {
          ...state,
          user: action.payload
        }
    default:
      return state;
  }
}
