"use client"

import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      // Handle sign-in logic here
      const storedUser = JSON.parse(localStorage.getItem(formData.email));
      if (storedUser && storedUser.password === formData.password) {
        setError('');
        setSuccess('Account created successfully!');
        console.log('Sign In Successful:', storedUser);
      } else {
        setError('Account not found. Redirecting to sign-up...');
        setTimeout(() => {
          setIsSignIn(false);
          setError('');
        }, 2000);
      }
    } else {
      // Handle sign-up logic here
      localStorage.setItem(formData.email, JSON.stringify(formData));
      setError('');
      setIsSignIn(true);
      console.log('Sign Up Successful:', formData);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='flex w-3/4 max-w-4xl shadow-lg'>
        <div className='w-1/2 bg-blue-500 text-white p-8 flex flex-col justify-center items-center'>
          <h2 className='text-4xl font-bold mb-4'>Welcome Back!</h2>
          <p className='mb-8'>
            To keep connected with us please login with your personal info
          </p>
          <button
            className='bg-white text-blue-500 px-6 py-2 rounded-full font-semibold'
            onClick={() => setIsSignIn(true)}
          >
            SIGN IN
          </button>
        </div>
        <div className='w-1/2 bg-white p-8 flex flex-col justify-center items-center'>
          <h2 className='text-4xl font-bold mb-4'>
            {isSignIn ? 'Sign In' : 'Create Account'}
          </h2>
          <form
            onSubmit={handleSubmit}
            className='w-full'
          >
            {!isSignIn && (
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                className='mb-4 p-2 border border-gray-300 rounded w-full'
              />
            )}
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className='mb-4 p-2 border border-gray-300 rounded w-full'
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              className='mb-4 p-2 border border-gray-300 rounded w-full'
            />
            <button
              type='submit'
              className='bg-blue-500 text-white px-6 py-2 rounded-full font-semibold w-full'
            >
              {isSignIn ? 'SIGN IN' : 'SIGN UP'}
            </button>
          </form>
        </div>
      </div>
      {error && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>Error</h2>
            <p>{error}</p>
            <button
              className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
              onClick={() => setError('')}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {success && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>Success</h2>
            <p>{success}</p>
            <button
              className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
              onClick={() => setSuccess('')}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
