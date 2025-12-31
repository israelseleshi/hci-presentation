import React from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Header from '../public/LandingPage/Header';
import './Auth.css';

const ForgotPasswordPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Password reset link sent to your email!');
  };

  return (
    <>
      <Header />
      <div className="auth-container py-5">
        <div className="card auth-card">
          <div className="card-body p-5">
            <div className="text-center mb-4">
              <h1 className="h2 fw-bold">Forgot Password</h1>
              <p className="text-muted">Enter your email to receive a password reset link.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter your email" required />
              </div>
              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-primary btn-lg">Send Reset Link</button>
              </div>
              <p className="text-center text-muted mt-3">
                Remember your password? <Link to="/login">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
