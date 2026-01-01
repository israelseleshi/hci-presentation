import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../public/LandingPage/Header';

const SignupPage: React.FC = () => {
  const [isClient, setIsClient] = useState(true);

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${isClient ? 'active' : ''}`}
                      onClick={() => setIsClient(true)}
                      style={isClient ? { backgroundColor: '#0d6efd', color: 'white' } : {}}
                    >
                      I'm a Client
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${!isClient ? 'active' : ''}`}
                      onClick={() => setIsClient(false)}
                      style={!isClient ? { backgroundColor: '#0d6efd', color: 'white' } : {}}
                    >
                      I'm a Freelancer
                    </button>
                  </li>
                </ul>
              </div>
              <div className="card-body p-4">
                <h3 className="card-title text-center mb-4">Create an Account</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ backgroundColor: '#0d6efd' }}
                    >
                      Create Account
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    <small>Already have an account? <Link to="/login">Log In</Link></small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
