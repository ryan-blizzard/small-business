export const addBusiness = (business) => {
  return {
      type: 'ADD_BUSINESS',
      value: business
  }
}

export const removeBusiness = (index) => {
  return {
      type: 'REMOVE_BUSINESS',
      value: index
  }
}

export const loginUser = (username) => {
  return {
      type: 'LOGIN',
      value: username
  }
}