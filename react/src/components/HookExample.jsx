import React from 'react'

export default function HookExample() {
  const [state,setNmuber] = React.useState(0)
  const addHandle = ()=>{
    setNmuber((state)=>(state+1))
  }
  return (
    <div>
      <h1>this is {state}</h1>
      <button onClick={addHandle}>++</button>
    </div>
  )
}
