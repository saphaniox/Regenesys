import './TextComp.css'

const TextComp = (props) => {
  return (
    <div className='textContainer'>
        {props.myName}
        <h1>Make <br /> Remote Work</h1>
        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
      
        <button>Learn More</button>
    </div>
  )
}

export default TextComp