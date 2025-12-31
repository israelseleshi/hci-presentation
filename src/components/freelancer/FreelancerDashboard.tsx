import React from 'react';

const FreelancerDashboard: React.FC = () => {
  return (
    <div className="px-md-4">
      <h1 className="fw-bold mb-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-light-subtle h-100">
            <div className="card-body">
              <h5 className="card-title">Active Applications</h5>
              <p className="card-text fs-2 fw-bold">4</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-light-subtle h-100">
            <div className="card-body">
              <h5 className="card-title">Invitations</h5>
              <p className="card-text fs-2 fw-bold">2</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-light-subtle h-100">
            <div className="card-body">
              <h5 className="card-title">Profile Views</h5>
              <p className="card-text fs-2 fw-bold">28</p>
            </div>
          </div>
        </div>
      </div>
      <h4 className="fw-bold mt-4 mb-3">Recent Activity</h4>
      <div className="card shadow-sm border-light-subtle">
        <div className="list-group list-group-flush">
          <div className="list-group-item">You applied for 'E-commerce Platform Development'</div>
          <div className="list-group-item">Your application for 'Mobile App UI/UX Design' was viewed.</div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
