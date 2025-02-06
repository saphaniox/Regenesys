import './ImageComp.css'
import heroImage from '../../assets/hero.png'

const ImageComp = () => {
  return (
    <div className='imageContainer'>
        <img src={heroImage} alt="Hero Image" />
        {/* <img src='https://res.cloudinary.com/samolorunda/image/upload/v1733267273/refqcphjkltjzx0elqig.jpg' alt="Hero Image" /> */}
    </div>
  )
}

export default ImageComp