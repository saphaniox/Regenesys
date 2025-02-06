import './Header.css'
import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='headerContainer'>
        <div className="logoNav">
          <Link to='/'>
          <img src={logo} alt="logo" />
          </Link>
          <div className='navagations'>
          <Link className='test' to='/features'>
            <nav>Features</nav>
          </Link>
          <Link to='/company'>
            <nav>Company</nav>
            </Link>
            <nav>Careers</nav>
            <nav>About</nav>
          </div>
        </div>
        <div className="loginRegister">
          <nav>Login</nav>
          <button>Register</button>
        </div>
    </div>
  )
}

export default Header