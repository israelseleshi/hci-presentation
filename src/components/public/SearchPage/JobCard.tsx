import React from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface JobCardProps {
  id: number;
  title: string;
  category: string;
  description: string;
  location: string;
  budget: string;
  postedTime: string;
  isNew: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ id, title, category, description, location, budget, postedTime, isNew }) => {
  return (
    <div className="card h-100 shadow-sm border-light-subtle p-3">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title fw-bold mb-1">{title}</h5>
          {isNew && <span className="badge bg-warning text-dark">New</span>}
        </div>
        <p className="text-muted small mb-2">{category}</p>
        <p className="card-text mb-3">{description}</p>
        
        <hr />

        <div className="d-flex flex-column text-muted mt-auto">
          <div className="d-flex align-items-center mb-2">
            <FaMapMarkerAlt className="me-2" /> {location}
          </div>
          <div className="d-flex align-items-center mb-2">
            <FaDollarSign className="me-2" /> {budget} Birr
          </div>
          <div className="d-flex align-items-center">
            <FaClock className="me-2" /> {postedTime}
          </div>
        </div>

        <div className="row g-2 mt-3">
          <div className="col">
            <Link to={`/gig/${id}`} className="btn btn-outline-secondary w-100">View Details</Link>
          </div>
          <div className="col">
            <Link to="/login" className="btn btn-warning w-100">Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;