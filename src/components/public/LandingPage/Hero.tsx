import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import './LandingPage.css';

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const popularSearches = ['Web Design', 'Plumbing', 'Tutoring', 'Logo Design'];

  const searchPopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popular Searches</Popover.Header>
      <Popover.Body>
        {popularSearches.map(term => (
          <Link key={term} to={`/search?query=${term}`} className="d-block text-decoration-none mb-2">{term}</Link>
        ))}
      </Popover.Body>
    </Popover>
  );

  return (
    <section className="hero-section text-center">
      <div className="container hero-content">
        <h1 className="display-4 fw-bold mb-3">Find Your Next Gig in Addis</h1>
        <p className="lead mb-4">The easiest way to connect with local clients and find freelance work.</p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="input-group mb-4">
              <OverlayTrigger trigger="focus" placement="bottom" overlay={searchPopover}>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="What service are you looking for? e.g., 'plumbing'"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </OverlayTrigger>
              <button className="btn btn-primary btn-lg" type="button" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
        <div className="popular-categories">
          <span>Popular:</span>
          <Link to="/search?category=Design">Design</Link>
          <Link to="/search?category=Development">Development</Link>
          <Link to="/search?category=Writing">Writing</Link>
          <Link to="/search?category=Marketing">Marketing</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;