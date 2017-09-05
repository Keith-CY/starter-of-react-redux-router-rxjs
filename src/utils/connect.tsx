import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'

const mapStateToProps = (state: any) => state

const mapDispatchToProps = (dispatch: any) => (bindActionCreators(actions, dispatch))

export default (Comp: any) => connect(mapStateToProps, mapDispatchToProps)(Comp)
