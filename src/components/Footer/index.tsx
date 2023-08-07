import { Link } from "react-router-dom";
import './style.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div>
                <h1>Wonder Tour</h1>
                <p>Choose Your Favorite Destinations.</p>
            </div>
            <div>
                <Link to="/">
                    <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to="/">
                    <i className="fa-brands fa-whatsapp"></i>
                </Link>
                <Link to="/">
                    <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to="/">
                    <i className="fa-brands fa-skype"></i>
                </Link>
            </div>
        </div>


        <div className="bottom">
            <div>
                <h4>Projects</h4>
                <Link to='/'>Changelog</Link>
                <Link to='/'>Status</Link>
                <Link to='/'>License</Link>
                <Link to='/'>All Versions</Link>
            </div>
            <div>
                <h4>Community</h4>
                <Link to='/'>Github</Link>
                <Link to='/'>Issues</Link>
                <Link to='/'>Project</Link>
                <Link to='/'>Twitter</Link>
            </div>
            <div>
                <h4>Help</h4>
                <Link to='/'>Support</Link>
                <Link to='/'>Troubleshooting</Link>
                <Link to='/'>Contact Us</Link>
            </div>
            <div>
                <h4>Others</h4>
                <Link to='/'>Terms of Service</Link>
                <Link to='/'>Privacy Policy</Link>
                <Link to='/'>License</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer