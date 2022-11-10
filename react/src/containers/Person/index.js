import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = { id: nanoid(), name, age }
    this.props.addOne(personObj)
  }
  render () {
    return (
      <div>
				<h2>我是Person组件,上方组件求和为{this.props.numberSum}</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.personInfo.map(item=>{
              return <li key={item.id}>{item.name}-{item.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  (state)=>({personInfo:state.people,numberSum:state.sum}),
  {addOne:createAddPersonAction}
)(Person)