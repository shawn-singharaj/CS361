import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });
        // add email/password validation logic, mongodb database?
      };

    return(
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label><br />
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(p) => setPassword(p.target.value)}
                        required
                    />
                </div>

                <button type="submit"><Link to="/weekly-view">Log In</Link></button>
                <p>Logging in keeps your schedule saved across devices. Do not share your password.</p>
            </form>
        </div>
    );

}

export default Login;