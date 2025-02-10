import './Features.css'
import { useState } from 'react'

const Feature = () => {
  const [counter, setCounter] = useState(10)

  const [login, setLogin] = useState(false)
  

  // const a = 22
  const increaseCounter = () =>{
   setCounter(counter + 2)
  }

  const changeLoginState = () =>{
    setLogin(!login)
  }

  
  return (
    <div className="featureContainer">
        <h1>This is the Feature Page</h1>
        <h2>State Hook</h2>
        <button onClick={increaseCounter}>Add Counter</button>
        <span> {counter} </span>
        <button>Subtract Counter</button>
        <br />
        <br />
        <br />
        <br />
        {login === false ? <button onClick={changeLoginState}>Login Here</button> : <button onClick={changeLoginState}>Log Out</button>}

        {login === false ?<h3>Ooh No!!! You have logged out</h3> : <h3>Great!!! you are now logged In</h3>}
        
        
    </div>
  )
}

export default Feature