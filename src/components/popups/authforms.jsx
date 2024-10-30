import React, { useState } from 'react';
import '../styles/popups.css';

const SignInForm = React.memo(() =>
{
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return <form className='sign-in-form'>
        <h1>Sign In</h1 >
        <label>
            Email
            <input type='text' name='email' value={formData.email} onChange={handleChange} />
        </label>
        <label>
            Password
            <input type='text' name='password' value={formData.password} onChange={handleChange} />
        </label>
    </form >
})

const SignUpForm = () =>
{
    return <form className='sign-up-form'>
        <h1>
            Sign Up
        </h1>
        <p>Create an account here !</p>
    </form>
}

export { SignInForm, SignUpForm };