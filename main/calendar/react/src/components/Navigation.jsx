import {Link} from 'react-router-dom';
import '../App.css';

function Navigation(){

    return(
         <nav className="app-nav">
            <div className="nav-buttons">
                <Link to="/">
                    <button className="nav-button">Login</button>
                </Link>
                <Link to="/daily-view">
                    <button className="nav-button">Daily View</button>
                </Link>
                <Link to="/weekly-view">
                    <button className="nav-button">Weekly View</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;