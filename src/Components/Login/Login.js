import React, { useState } from 'react';
import PropTypes from 'prop-types';
import API_URL from '../../config/config'
import '../Login.css'
import Header from '../Header/Header';

async function loginUser(credentials) {
    return await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .catch(err => console.log(err ))
  }
   


function Login({setToken}) {
    const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
    return (
      <>
      <Header />
        <div className="login-wrapper">
      <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} required/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} required/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
      </>
    )
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login
