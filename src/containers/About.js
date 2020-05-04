import { connect } from 'react-redux'
import About from '../components/About'

const mapStateToProps = (state) => {
    return {
        about: state.about
    }
}

export default connect(mapStateToProps)(About)