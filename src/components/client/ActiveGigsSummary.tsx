import React from 'react';

const ActiveGigsSummary: React.FC = () => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-white">
        <h4 className="card-title mb-0">Active Gigs Summary</h4>
      </div>
      <div className="card-body">
        <div className="list-group list-group-flush">
          <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-0">Website Redesign for Local Business</h6>
              <small className="text-muted">Posted 2 hours ago</small>
            </div>
            <span className="badge bg-primary rounded-pill">3 Applicants</span>
          </div>
          <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-0">Plumbing Repair - Bathroom Renovation</h6>
              <small className="text-muted">Posted 4 hours ago</small>
            </div>
            <span className="badge bg-primary rounded-pill">5 Applicants</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveGigsSummary;
