import {Link, useNavigate} from 'react-router-dom';
import '../App.css';

function Navigation(){
    // daily view doesnt work delete later
    const navigate = useNavigate();

    const handleLoginClick = (e) => {
        const confirmed = window.confirm("Are you sure you want to log out?");
        if(confirmed){
            navigate('/');
        }
    };


    return(
         <nav className="app-nav">
            <div className="nav-buttons">
                <Link to="/">
                    <button className="nav-button" onClick={handleLoginClick}>Login</button>
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