import { connect } from 'react-redux'
import Details from '../components/details'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    business: state.business

  }
}

export default connect(mapStateToProps)(Details)