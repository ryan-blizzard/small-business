import { combineReducers } from 'redux'

const user = (state = null) => state

const business = (state = [], action) => {
  switch(action.type){
    default:
      return state
  }

}

const login = (state = null, action) => {
  console.log (action, "loginReducer")
  switch(action.type){
    case 'LOGIN':
      return {username: action.value}
    default:
      return state
      
  }
}

const shop = (state = [], action) => {
  switch(action.type) {
      case 'ADD_SHOP':
          return [ ...state, action.value ]
      case 'REMOVE_SHOP':
          const shop = [ ...state ]
          shop.splice(action.value, 1)
          return shop
      default:
          return state
  }
}

export default combineReducers({user, business, login, shop})