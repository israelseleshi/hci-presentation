import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../public/LandingPage/Header';
import './../Auth.css';

const SignupPage: React.FC = () => {
  const [role, setRole] = useState<'client' | 'freelancer'>('client');

  const ClientForm = () => (
    <>
      <h5 className="fw-bold mb-3">Account Information</h5>
      <div className="row">
        <div className="col-md-6 mb-3"><input type="text" className="form-control form-control-lg" placeholder="Full Name" /></div>
        <div className="col-md-6 mb-3"><input type="email" className="form-control form-control-lg" placeholder="Email Address" /></div>
        <div className="col-md-6 mb-3"><input type="password" className="form-control form-control-lg" placeholder="Password" /></div>
        <div className="col-md-6 mb-3"><input type="password" className="form-control form-control-lg" placeholder="Confirm Password" /></div>
      </div>
      <h5 className="fw-bold mt-4 mb-3">Company Information</h5>
      <div className="row">
        <div className="col-md-6 mb-3"><input type="text" className="form-control form-control-lg" placeholder="Company Name" /></div>
        <div className="col-md-6 mb-3"><input type="tel" className="form-control form-control-lg" placeholder="Phone Number" /></div>
        <div className="col-md-6 mb-3"><select className="form-select form-select-lg"><option selected>Select your industry</option><option>Information Technology</option><option>Construction & Real Estate</option><option>Healthcare & Wellness</option><option>Education & Training</option><option>Creative Arts & Design</option><option>Hospitality & Tourism</option><option>Retail & E-commerce</option></select></div>
        <div className="col-md-6 mb-3"><select className="form-select form-select-lg"><option selected>Select your location</option><option>Addis Ketema</option><option>Akaky Kaliti</option><option>Arada</option><option>Bole</option><option>Gullele</option><option>Kirkos</option><option>Kolfe Keranio</option><option>Lideta</option><option>Nifas Silk-Lafto</option><option>Yeka</option></select></div>
      </div>
    </>
  );

  const FreelancerForm = () => (
    <>
      <h5 className="fw-bold mb-3">Account Information</h5>
      <div className="row">
        <div className="col-md-6 mb-3"><input type="text" className="form-control form-control-lg" placeholder="Full Name" /></div>
        <div className="col-md-6 mb-3"><input type="email" className="form-control form-control-lg" placeholder="Email Address" /></div>
        <div className="col-md-6 mb-3"><input type="password" className="form-control form-control-lg" placeholder="Password" /></div>
        <div className="col-md-6 mb-3"><input type="password" className="form-control form-control-lg" placeholder="Confirm Password" /></div>
      </div>
      <h5 className="fw-bold mt-4 mb-3">Professional Information</h5>
      <div className="row">
        <div className="col-md-6 mb-3"><textarea className="form-control form-control-lg" rows={3} placeholder="Skills"></textarea></div>
        <div className="col-md-6 mb-3"><textarea className="form-control form-control-lg" rows={3} placeholder="Professional Bio"></textarea></div>
        <div className="col-md-6 mb-3"><select className="form-select form-select-lg"><option selected>Experience Level</option><option>Entry-Level (0-2 years)</option><option>Intermediate (2-5 years)</option><option>Expert (5+ years)</option></select></div>
        <div className="col-md-6 mb-3"><select className="form-select form-select-lg"><option selected>Location</option><option>Addis Ketema</option><option>Akaky Kaliti</option><option>Arada</option><option>Bole</option><option>Gullele</option><option>Kirkos</option><option>Kolfe Keranio</option><option>Lideta</option><option>Nifas Silk-Lafto</option><option>Yeka</option></select></div>
      </div>
      <h5 className="fw-bold mt-4 mb-3">Contact Information</h5>
      <div className="mb-3"><input type="tel" className="form-control form-control-lg" placeholder="Phone Number" /></div>
    </>
  );

  return (
    <>
      <Header />
      <div className="auth-container py-5">
        <div className="card auth-card" style={{maxWidth: '800px'}}>
          <div className="card-body p-5">
            <div className="text-center mb-4">
              <h1 className="h2 fw-bold">Sign Up</h1>
              <p className="text-muted">Choose your role and start your journey with Addis GigFind.</p>
            </div>
            <div className="btn-group w-100 mb-4" role="group">
              <button type="button" className={`btn ${role === 'client' ? 'btn-warning' : 'btn-outline-warning'} btn-lg`} onClick={() => setRole('client')}>I'm a Client</button>
              <button type="button" className={`btn ${role === 'freelancer' ? 'btn-warning' : 'btn-outline-warning'} btn-lg`} onClick={() => setRole('freelancer')}>I'm a Freelancer</button>
            </div>
            <form>
              {role === 'client' ? <ClientForm /> : <FreelancerForm />}
              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-primary btn-lg">Create Account</button>
              </div>
              <p className="text-center text-muted mt-3">Already have an account? <Link to="/login">Sign in</Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;