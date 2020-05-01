import { connect } from 'react-redux'
import user from '../components/user'
import state from '../redux/state'
import {deleteShop} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    shop: state.shop,
    login: state.login


  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteShop: (index) => dispatch(deleteShop(index))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(user)