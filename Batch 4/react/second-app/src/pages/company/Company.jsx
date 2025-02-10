import { useState } from 'react'
import './Company.css'
const Company = () => {
  const [userName, setUserName] =  useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [storeData, setStoreData] = useState([])
  // const [storeData, setStoreData] = useState([
  //   {
  //     userName: 'apple',
  //     email: 'apple@gmail.com',
  //     bio: 'I love apples'
  //   }
  // ])

  const sendData = (e) =>{
    e.preventDefault()
    setStoreData([...storeData, {userName, email, bio}])
  }

  console.log(storeData)

  console.log(userName, email, bio)
  return (
    <div className="companyContainer">
        <h1>This is the company Page</h1>
        <h2>Enter your Student Profile</h2>

<form action="">
  <input type="text" placeholder='Enter Your Name' value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
  <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
  <textarea name="bio" placeholder='Your Textarea' value={bio} onChange={(e)=>{setBio(e.target.value)}}></textarea>
  <button onClick={sendData}>Submit Info</button>
</form>
<p> {userName} </p>
<p> {email} </p>
<p> {bio} </p>
<section className='cardHolder'>
{storeData.map((data, i)=>(
    <div className="card" key={i}>
    <h3>Name: {data.userName}</h3>
    <i>Email: {data.email}</i>
    <p>Bio: {data.bio}</p>
  </div>
))}

</section>

    </div>
  )
}

export default Company