// src/components/LoginSignup.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginSignup.css';

function LoginSignup({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true); // true = Login, false = Signup
  const [step, setStep] = useState(1); // Step 1 for login, Step 2 for signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setStep(isLogin ? 1 : 2);
  }, [isLogin]);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      onLoginSuccess();
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      setError('User already exists.');
      return;
    }

    const newUser = {
      fullName,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! You can now login.');
    setIsLogin(true);
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setFullName('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div className="login">
      <div className="steps">
        <div className={`step ${step === 1 ? 'active' : ''}`}>1 <span>Account</span></div>
        <div className={`step ${step === 2 ? 'active' : ''}`}>2 <span>Profile</span></div>
        <div className="step">3 <span>Finish</span></div>
      </div>

      <h2>{isLogin ? 'Login to RecipeNest' : 'Create Your Account'}</h2>

      <form onSubmit={isLogin ? handleLogin : handleSignup}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        {error && <p className="error">{error}</p>}

        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>

        <p className="toggle">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span onClick={() => { setIsLogin(!isLogin); resetForm(); }}>
            {isLogin ? ' Signup' : ' Login'}
          </span>
        </p>
      </form>
    </div>
  );
}

export default LoginSignup;
