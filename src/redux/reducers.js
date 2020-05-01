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

export default combineReducers({user, business, login})