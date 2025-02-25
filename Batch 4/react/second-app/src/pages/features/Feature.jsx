import './Features.css'
import { useState } from 'react'





const Feature = () => {
  const [counter, setCounter] = useState(0)

  const [login, setLogin] = useState(false)

  console.log(counter)
  

  // const a = 22
  const increaseCounter = () =>{
   setCounter(counter + 5)
  }



  const changeLoginState = () =>{
    setLogin(!login)
  }

  
  return (
    <div className="featureContainer">
        <h1>This is the Feature Page</h1>
        <h2>State Hook</h2>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">click here to register</a>
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



