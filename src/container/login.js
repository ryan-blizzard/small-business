import { connect } from 'react-redux'
import Login from '../components/login'
import {loginUser} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    business: state.business,
    login: state.login

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username) => dispatch(loginUser(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)