import { useState } from 'react'
import './Company.css'
const Company = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('@abcschools.com')
  const [bio, setBio] = useState(`i love ABC Schools`)
  const [allInfo, setAllInfo] = useState([])

  const allInfoSend = (e) =>{
    e.preventDefault()
    setAllInfo([...allInfo, {name, email, bio}])
    setName('')
    setEmail('@abcschools.com')
    setBio('i love ABC Schools')
  }

  console.log(name)
  console.log(email)
  console.log(bio)
  console.log(allInfo)
  return (
    <div className="companyContainer">
        <h1>This is the company Page</h1>
        <h2>Enter your Student Profile</h2>
        <form action="">
      <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
          <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
          <textarea name="bio" placeholder='Your Bio' value={bio} onChange={(e)=>{setBio(e.target.value)}}></textarea>
          <button onClick={allInfoSend} >Submit Info</button>
        </form>

        <section className='cardHolder'>
       {allInfo.map((data, i)=>(
             <div className="card" key={i} >
             <h3> {data.name}</h3>
             <i> {data.email} </i>
             <p> {data.bio} </p>
           </div>
       ))}
        </section>

    </div>
  )
}

export default Company


// const sendData = (e) =>{
//   e.preventDefault()
//   setStoreData([...storeData, {userName, email, bio}])
// }