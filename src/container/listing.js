import { connect } from 'react-redux'
import Listing from '../components/listing'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Listing)