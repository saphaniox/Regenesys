import ImageComp from "../../components/imagecomp/ImageComp"
import TextComp from "../../components/textcomp/TextComp"
import './Home.css'

const Home = () => {
    const myName = 'Sammy Sam'
    return(
        <div className="homeContainer">
           <TextComp myName={myName} />
           <ImageComp />
          
        </div>
    )
}

export default Home

