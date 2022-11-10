import {ADD_PSRSON} from '../constant'

const initState = [{id:'001',name:'jack',age:29}]
export default function personReducer(perState=initState,action){
  const { type, data } = action
  switch (type) {
    case ADD_PSRSON:
      return [data,...perState]
    default:
      return perState
  }
}