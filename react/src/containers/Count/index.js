//引入Count的UI组件
import CountUI from '../../components/count2'
//引入action
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/actions/count'
import {connect} from 'react-redux'
function mapStateToProps(state){
  return {count:state.sum}
}
function mapDispatchToProps(dispatch){
  return {
    jia:number => dispatch(createIncrementAction(number)),
    jian:number => dispatch(createDecrementAction(number)),
		jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time))
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)