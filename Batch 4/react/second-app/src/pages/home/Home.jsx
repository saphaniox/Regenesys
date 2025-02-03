import ImageComp from "../../components/imagecomp/ImageComp"
import TextComp from "../../components/textcomp/TextComp"
import './Home.css'

const Home = () => {
    return(
        <div className="homeContainer">
           <TextComp />
           <ImageComp />
        </div>
    )
}

export default Home