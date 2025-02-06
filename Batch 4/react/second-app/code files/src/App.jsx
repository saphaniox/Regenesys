import Home from './pages/home/Home'
import Footer from './static/footer/Footer'
import Header from './static/header/Header'
import Feature from './pages/features/Feature'
import Company from './pages/company/Company'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () =>{
  return(
    <div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/features' element={ <Feature /> } />
        <Route path='/company' element={ <Company /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App