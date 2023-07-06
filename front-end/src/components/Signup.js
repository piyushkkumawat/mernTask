import React, { useState } from 'react';
import {userActions} from '../actions';
import { useSelector, useDispatch } from 'react-redux';


const SignupForm = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state);

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        gender: '',
        role: '',
        email: '',
        password: '',
    });

    const [emailError, setEmailError] = useState('');

    const [passwordError, setPasswordError] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value, name)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

        if (!emailPattern.test(formData.email)) {
            setEmailError('Please enter a valid email address.');
            return;
          }

        if (!passwordPattern.test(formData.password)) {
            setPasswordError(
                'Password must be 8-20 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special symbol.'
            );
            return;
        }
        setEmailError('');
        setPasswordError('');
       dispatch(userActions.registration(formData))
    };

    return (
        <div className="container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fname"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lname"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                        required
                    />
                </div>
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
                    {emailError && <div className="text-danger">{emailError}</div>}
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
                    {passwordError && <div className="text-danger">{passwordError}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label><br />
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                            required
                        />
                        <label className="form-check-label" htmlFor="male">
                            Male
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                            required
                        />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                            checked={formData.gender === 'other'}
                            onChange={handleChange}
                            required
                        />
                        <label className="form-check-label" htmlFor="other">
                            Other
                        </label>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="role" className="form-label">
                        Role
                    </label>
                    <select
                        className="form-select"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="employee">Employee</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default SignupForm;
