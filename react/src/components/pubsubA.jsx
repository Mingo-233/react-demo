import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class pubsub extends Component {
  publish = ()=>{
    PubSub.publish('MY TOPIC', 'hello world!');
  }
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>hello 我是一个A组件 我是发布者</h1>
        <button onClick={this.publish}>点击发布</button>
      </div>
    )
  }
}
