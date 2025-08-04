import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setMessage('');
    
    // Simple validation
    if (password.length < 6) {
      setMessage('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      // Replace this with your actual backend endpoint
      const response = await fetch(`/api/${state === 'Sign Up' ? 'signup' : 'login'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(state === 'Sign Up' ? 'Signed up successfully!' : 'Logged in successfully!');
        // Optionally: save token / user info to localStorage or context
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (err) {
      setMessage('Network error. Please try again.');
    }

    setLoading(false);
  };

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment</p>

        {message && (
          <div className={`w-full text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </div>
        )}

        {state === 'Sign Up' && (
          <div className='w-full'>
            <p>Full Name</p>
            <input
              className='border border-zinc-300 rounded w-full p-2 mt-1'
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='Enter your full name'
              required
            />
          </div>
        )}

        <div className='w-full'>
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Enter your email'
            required
          />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Enter your password'
            required
          />
        </div>

        <button
          type='submit'
          className='bg-blue-600 w-full text-white py-2 rounded-md text-base disabled:opacity-50'
          disabled={loading}
        >
          {loading ? 'Please wait...' : state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {state === 'Sign Up' ? (
          <p>
            Already have an account?{' '}
            <span
              onClick={() => setState('Login')}
              className='text-blue-600 underline cursor-pointer'
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Don’t have an account?{' '}
            <span
              onClick={() => setState('Sign Up')}
              className='text-blue-600 underline cursor-pointer'
            >
              Sign up here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
