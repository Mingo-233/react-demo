import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import './App.less';
// import 'antd/dist/antd.css';
import { Button } from 'antd';
import PubsubA from './components/pubsubA'
import PubsubB from './components/pubsubB'
// import Count from './components/count'
import Count2 from './containers/Count'
import store from './redux/store'
import Person from './containers/Person';
import HookExample from './components/HookExample'
import { Link, Route } from 'react-router-dom'
class App extends Component {
  // componentWillMount () {
  //   console.time('Time')

  // }
  state = {
    todos: [
      { id: 1, name: 'react', done: true },
      { id: 2, name: 'vue', done: true },
      { id: 3, name: 'angluar', done: true },
    ]
  }
  handle = () => {
    axios.get('http://localhost:3000/api1/students').then(response => {
      console.log(response);
      console.log(response.data);
    },
      error => {
        console.log(error);
      })
  }
  // componentDidMount () {
  //   console.timeEnd("Time")
  // }
  render () {

    return (
      <div className="App">
        <button onClick={this.handle}>api1请求</button>
        <Button type="primary" ghost>Primary</Button>
        <hr />
        <Link to="/page1/23">切换一号页面</Link> <span>|</span>
        {/* <Link to="/page2?name=jack&age=37">切换二号页面</Link> */}
        <Link to={{ pathname: '/page2', state: { name: 'tom', age: 88 } }} >切换二号页面 ---state参数</Link>
        <h1>content</h1>
        <Route path="/page1/:age" component={PubsubA}></Route>
        <Route path="/page2" component={PubsubB}></Route>
        <hr />
        {/* <Count></Count> */}
        <Count2 store={store}></Count2>
        <hr />
        <Person store={store}></Person>
        <hr />
        <HookExample></HookExample>
      </div>
    )
  }
}

export default App;
