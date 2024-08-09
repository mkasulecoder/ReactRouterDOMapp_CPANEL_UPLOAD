import {Link} from 'react-router-dom';
const NavMenu = () => {

    return (
        <>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
            </div>
        </>
    );
}

export default NavMenu;