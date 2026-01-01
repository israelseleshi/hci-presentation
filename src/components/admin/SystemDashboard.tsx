import React from 'react';
import { FiUsers, FiBriefcase, FiCheckSquare } from 'react-icons/fi';

const SystemDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="fw-bold mb-4">System Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <FiUsers size={40} className="mb-3" />
              <h5 className="card-title">Total Users</h5>
              <p className="card-text fs-4">1,234</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <FiBriefcase size={40} className="mb-3" />
              <h5 className="card-title">Active Gigs</h5>
              <p className="card-text fs-4">567</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <FiCheckSquare size={40} className="mb-3" />
              <h5 className="card-title">Pending Verifications</h5>
              <p className="card-text fs-4">89</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5>Notifications</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">New user registered: Alex M.</li>
              <li className="list-group-item">ID for Kenenisa Bekele approved.</li>
              <li className="list-group-item">Gig 'Logo Design for Startup' reported for spam.</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5>Recent Activities</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Admin approved ID for Abebe Bikila.</li>
              <li className="list-group-item">Admin rejected ID for Tirunesh Dibaba.</li>
              <li className="list-group-item">Admin deleted content from Gig #123.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDashboard;
