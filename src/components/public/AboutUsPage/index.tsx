import React from 'react';
import Header from '../LandingPage/Header';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-primary-gradient d-flex align-items-center" style={{ minHeight: 'calc(100vh - 72px)' }}>
        <div className="container text-white">
          <div className="mb-5 text-center">
            <h1 className="fw-bold">About Us</h1>
            <p className="text-white">Get to know the team behind Addis GigFind.</p>
          </div>
          <div className="row g-4">
            {/* Left column */}
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm bg-transparent border-light">
                <div className="card-body">
                  <h3 className="card-title fw-bold text-white">Our Vision</h3>
                  <p className="card-text text-white">To become the leading digital marketplace that empowers talent in Ethiopia and fosters economic growth by connecting freelancers with opportunities that match their skills and passions.</p>
                </div>
              </div>
              <div className="card shadow-sm bg-transparent border-light">
                <div className="card-body">
                  <h3 className="card-title fw-bold text-white">Our Mission</h3>
                  <p className="card-text text-white">We strive to bridge the gap between qualified professionals and clients by providing a secure, user-friendly platform that ensures fair compensation, transparent communication, and mutual success.</p>
                </div>
              </div>
            </div>
            {/* Right column */}
            <div className="col-md-6">
              <h3 className="fw-bold mb-3 text-center text-white">Our Team</h3>
              <ul className="list-group list-group-flush">
                {['Abel Tewodros','Israel Theodros','Tsiyon Abebayehu','Selamawit Wlae','Melori Alemu','Yonas Lake'].map(name => (
                  <li key={name} className="list-group-item bg-transparent border-light text-white">{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
