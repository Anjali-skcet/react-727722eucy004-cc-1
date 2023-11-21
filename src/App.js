import React from 'react'

const App = () => {
  return (
    <Greeting name="Anjali"/>
  )
}
const Greeting=(a)=>{
    return(
      <h1>Hello, {a.name}! Nice to meet you</h1>
    )
}

export default App