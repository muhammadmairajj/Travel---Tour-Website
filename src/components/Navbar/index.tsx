import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import './navbar.css';

const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(false);


  return (
    <div className="nav-container">
            <h1 className='nav-logo'>Wonder Tour</h1>

            <div className="menu-icons" onClick={() => setMenuIcon(!menuIcon)}>
                <i className={menuIcon ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={menuIcon ? "nav-menu active" : "nav-menu"}>
               {MenuItem?.map((item: any, index:number) => {
                return (
                    <li key={index}>
                        <Link to={item?.url} className={item?.cName}>
                            <i className={item.icon}></i>
                            {item.title}
                        </Link>
                    </li>
                )
               })}
            </ul>
    </div>
  )
}

export default Navbar