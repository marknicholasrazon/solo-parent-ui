import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../img/banner.png';
import Navbar from '../pages/navbar';
import Logo from '../img/dswd.png';
import Emote from '../img/emote.png';
import WaveLeft from '../img/wave-left.png';
import WaveRight from '../img/wave-right.png';
import Wavy from '../img/wavy.svg';
import Footer from '../pages/footer';

function Login(){
  useEffect(() => {
    document.title = "Login - Solo Parent's Application System";
    window.scrollTo(0, 0);
  }, []);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return(
    <>
      <div className="banner-page">
        <Navbar/>
        <img src={Banner} className="banner-img" alt="banner-img"/>
        <div className="banner-context">
            <p>home/login</p>
            <h2>Welcome back <img src={Emote} alt='emote'/>. It’s time to catch up</h2>
        </div>
      </div>
      <div className='login-page'>
        <div className='left'>
          <img src={WaveLeft} alt='wave-side'/>
        </div>
        <div className='middle'>
          <form method='post' action>
            <img src={Logo} className='logo' alt='logo'/>
            <h2>Solo Parent Portal</h2>
            <label>
              Username
              <input 
                type='text' 
                placeholder='Username' 
                name='username' 
                id='username'
                className='username' 
                autofocus 
                required/>
            </label>
            <label>
              Password
              <div className='pass-d mt-i'>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder='Password'
                  name='password'
                  id='password'
                  className='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type='button' onClick={handleTogglePasswordVisibility}>
                  {passwordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
            </label>
          </form>
        </div>
        <div className='right'>
          <img src={WaveRight} alt='wave-side'/>
        </div>
      </div>
      <img src={Wavy} alt='wavy' className='wavy'/>
      <div className='wavy-banner'>
        <h1>Register an account today</h1>
        <Link to='/register'>Take me there</Link>
      </div>
      <Footer/>
    </>
  );
}

export default Login;