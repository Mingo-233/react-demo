import { createStore ,applyMiddleware,combineReducers} from "redux";
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'

import thunk from 'redux-thunk'
// 一个reducer对应一个组件
const allReducers = combineReducers({
  sum:countReducer,
  people:personReducer
})
export default createStore(allReducers,applyMiddleware(thunk))