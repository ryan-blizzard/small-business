export const loginUser = (username) => {
  return {
    type: 'LOGIN',
    value: username
  }
}

export const userLogin = (username) => {
  return {
    type: 'LOGIN1',
    value: username
  }
}