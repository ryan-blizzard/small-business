import { connect } from 'react-redux'
import List from '../components/List'
import {removeBusiness} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        business: state.business,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)