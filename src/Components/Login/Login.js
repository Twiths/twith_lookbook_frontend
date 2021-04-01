import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../Login.css'
import Header from '../Header/Header';
import { login } from '../../Actions/auth';

// initial form state
const initialState = { 
  username: '', 
  password: ''
};

const Login = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(login(form, history));
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
      <>
        <Header />
        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}>
           <label htmlFor="username"><strong>Username</strong></label>
                <input autoFocus 
                  type="text"
                  name="username" id="username"
                  placeholder="Enter Username"
                  autoComplete="username"
                  required
                  onChange={handleChange}
                />
            <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" 
                  name="password" id="password"
                  placeholder="Enter Password"
                  autoComplete="password"
                  required
                  onChange={handleChange}
                />
            <div>
              <button type="Submit" >Login</button>
            </div>
          </form>
        </div>
      </>
    );
}

export default Login