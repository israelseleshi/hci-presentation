import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../public/LandingPage/Header';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './../Auth.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'client@demo.com' && password === '123456') {
      navigate('/client/dashboard');
    } else if (email === 'freelancer@demo.com' && password === '12345678') {
      navigate('/freelancer/dashboard');
    } else if (email === 'admin@demo.com' && password === 'admin123') {
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <Header />
      <div className="auth-container">
        <div className="card auth-card">
          <div className="card-body p-5">
            <div className="text-center mb-4">
              <h1 className="h2 fw-bold">Login</h1>
              <p className="text-muted">Enter your email and password below to login</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <label htmlFor="password" className="form-label">Password</label>
                  <Link to="/forgot-password" tabIndex={-1} className="text-sm-start text-decoration-none">Forgot your password?</Link>
                </div>
                <div className="input-group">
                  <input type={passwordShown ? "text" : "password"} className="form-control form-control-lg" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <button className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility}>
                    {passwordShown ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="d-grid my-4">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
              </div>
              <p className="text-center text-muted">Don't have an account? <Link to="/signup">Sign up</Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;