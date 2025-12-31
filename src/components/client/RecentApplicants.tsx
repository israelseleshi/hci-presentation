import React from 'react';

const RecentApplicants: React.FC = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h4 className="card-title mb-0">Recent Applicants</h4>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Abebe Kebede</strong> applied for 'Plumbing Repair'
            <span className="text-muted float-end">15 minutes ago</span>
          </li>
          <li className="list-group-item">
            <strong>Almaz Tesfaye</strong> applied for 'Website Redesign'
            <span className="text-muted float-end">1 hour ago</span>
          </li>
          <li className="list-group-item">
            <strong>Yonas Berhe</strong> applied for 'Plumbing Repair'
            <span className="text-muted float-end">3 hours ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentApplicants;
