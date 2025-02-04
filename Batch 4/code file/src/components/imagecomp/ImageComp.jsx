import './ImageComp.css'
import heroImage from '../../assets/hero.png'

const ImageComp = () => {
  return (
    <div className='imageContainer'>
        <img src={heroImage} alt="Hero Image" />
    </div>
  )
}

export default ImageComp