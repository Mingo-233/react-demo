import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import qs from 'querystring'
export default class pubsub extends Component {
  state = { msg: 'null' }
  mySubscriber = (_, data) => {
    console.log(_);
    console.log(data);
    this.setState({ msg: data })

  };
  componentDidMount () {
    this.token = PubSub.subscribe('MY TOPIC', this.mySubscriber);
    let a = qs.parse(this.props.location.search.slice(1))
    console.log(this.props);
    console.log(a);
  }
  render () {
    const { msg } = this.state
    return (
      <div>
        <h1>hello 我是一个B组件 我是接受者</h1>
        <p>接受显示 :{msg}</p>
      </div>
    )
  }
}
