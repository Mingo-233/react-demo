import {INCREMENT,DECREMENT} from '../constant'
const initState = 0
export default function countReducer (preState = initState, action) {
  // console.log(preState);
  console.log(action);
  // {type: "@@redux/INIT0.2.a.k.0.9"}
  const { type, data } = action
  switch (type) {
    case INCREMENT: 
      return preState + data
    case DECREMENT: 
      return preState - data
    default:
      return preState
  }
}