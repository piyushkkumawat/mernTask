import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {userActions} from '../actions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.loginUser);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  useEffect(()=>{
     if(userData && userData.data){
       if(userData.data.role === 'employee'){
        
       }
       if(userData.data.role === 'manager'){
        
       }
     }
  },[userData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userActions.login(formData))
  };

  console.log(userData)

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
