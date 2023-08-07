// TopNavbar.js
import { Link } from 'react-router-dom';
import authImg from "../../assets/authImg.png";
import "./topnavbar.css";


const TopNavbar = () => {
  return (
    <div className='top_navbar_container'>
        <p>Welcome to Tour & Travel Website</p>

        <div className="icons">
            <Link to='/'>
                <img src={authImg} alt='auth-logo' /> 
                <span>Login</span>
            </Link>
            <Link to='/'>
                <img src={authImg} alt='auth-logo' />
                <span>SignUp</span>
            </Link>
        </div>
    </div>
  )
}

export default TopNavbar;
