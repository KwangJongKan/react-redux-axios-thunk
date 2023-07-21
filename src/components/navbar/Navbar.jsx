
import './navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return(
        <div className="navbar">
            <div className="left"> Axion. </div>
            <div className="center"> 
                <Link to="/" className="link">
                     <div className="link_text"> Home </div>
                </Link>
                <Link  to="/user" className="link">
                     <div className="link_text"> User </div>
                </Link>
            </div>
            <div className="right"> Login </div>
        </div>
    )
}

export default Navbar;