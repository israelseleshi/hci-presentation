import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section text-center">
            <div className="container hero-content">
        <h1 className="display-4 fw-bold mb-3">Find Your Next Gig in Addis</h1>
        <p className="lead mb-4">The easiest way to connect with local clients and find freelance work.</p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="input-group mb-4">
              <input type="text" className="form-control form-control-lg" placeholder="What service are you looking for? e.g., 'plumbing'" />
              <button className="btn btn-primary btn-lg" type="button">Search</button>
            </div>
          </div>
        </div>
        <div className="popular-categories">
          <span>Popular:</span>
          <Link to="/search?category=design">Design</Link>
          <Link to="/search?category=development">Development</Link>
          <Link to="/search?category=writing">Writing</Link>
          <Link to="/search?category=marketing">Marketing</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;