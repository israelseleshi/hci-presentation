import React from 'react';
import Header from '../LandingPage/Header';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-dark-gradient d-flex align-items-center" style={{ minHeight: 'calc(100vh - 72px)' }}>
        <div className="container text-white">
          <div className="mb-5 text-center">
            <h1 className="fw-bold">Our Services</h1>
            <p className="text-white">Learn more about what we offer.</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center p-4 shadow-sm bg-transparent border-light">
                <h4 className="fw-bold">For Clients</h4>
                <p className="text-white">Post a job and find the perfect freelancer for your project. Our platform makes it easy to connect with skilled professionals in Addis Ababa.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center p-4 shadow-sm bg-transparent border-light">
                <h4 className="fw-bold">For Freelancers</h4>
                <p className="text-white">Find your next gig. Browse through hundreds of opportunities and apply to the ones that match your skills and interests.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center p-4 shadow-sm bg-transparent border-light">
                <h4 className="fw-bold">Secure Payments</h4>
                <p className="text-white">Our secure payment system ensures that you get paid for your work, and clients only pay for work they approve.</p>
              </div>
            </div>
          </div>

          <hr className="my-5 border-light" />

          <div className="text-center mb-5">
              <h2 className="fw-bold">How It Works</h2>
              <p className="text-white">Get started in just a few simple steps.</p>
          </div>

          <div className="row text-center">
              <div className="col-md-3">
                  <h5>1. Create Your Account</h5>
                  <p className="text-white">Sign up as a client or a freelancer to get started.</p>
              </div>
              <div className="col-md-3">
                  <h5>2. Post or Find a Gig</h5>
                  <p className="text-white">Clients can post job details, and freelancers can browse for opportunities.</p>
              </div>
              <div className="col-md-3">
                  <h5>3. Collaborate</h5>
                  <p className="text-white">Use our platform to communicate and share files to get the work done.</p>
              </div>
              <div className="col-md-3">
                  <h5>4. Payment Protection</h5>
                  <p className="text-white">Securely pay and get paid for the work completed.</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;

