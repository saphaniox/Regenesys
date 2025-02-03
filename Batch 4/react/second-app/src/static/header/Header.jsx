import './Header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <div className='headerContainer'>
        <div className="logoNav">
          <img src={logo} alt="logo" />
          <div className='navagations'>
            <nav>Features</nav>
            <nav>Company</nav>
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