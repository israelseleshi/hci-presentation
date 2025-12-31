import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface Application {
  id: number;
  gigTitle: string;
  clientName: string;
  status: 'Accepted' | 'Pending' | 'Rejected';
  dateApplied: string;
  description: string;
  budget: string;
}

const MyApplicationsPage: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 1,
      gigTitle: 'E-commerce Platform Development',
      clientName: 'Shopify Inc.',
      status: 'Accepted',
      dateApplied: '2025-12-28',
      description: 'Building a full-stack e-commerce platform with React and Node.js.',
      budget: '150,000 Birr',
    },
    {
      id: 2,
      gigTitle: 'Mobile App UI/UX Design',
      clientName: 'Creative Solutions',
      status: 'Pending',
      dateApplied: '2025-12-26',
      description: 'Designing a modern and intuitive user interface for a new mobile application.',
      budget: '80,000 Birr',
    },
    {
      id: 3,
      gigTitle: 'Data Analysis for Marketing Campaign',
      clientName: 'Data Insights Co.',
      status: 'Rejected',
      dateApplied: '2025-12-22',
      description: 'Analyzing marketing data to provide insights for future campaigns.',
      budget: '50,000 Birr',
    },
    {
      id: 4,
      gigTitle: 'Content Writing for Tech Blog',
      clientName: 'Tech Weekly',
      status: 'Pending',
      dateApplied: '2025-12-20',
      description: 'Writing engaging and informative articles for a technology blog.',
      budget: '25,000 Birr',
    },
  ]);

  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  const handleViewClick = (app: Application) => {
    setSelectedApp(app);
    setShowViewModal(true);
  };

  const handleWithdrawClick = (app: Application) => {
    setSelectedApp(app);
    setShowWithdrawModal(true);
  };

  const confirmWithdraw = () => {
    if (selectedApp) {
      setApplications(applications.filter((app) => app.id !== selectedApp.id));
      toast.success('Application withdrawn successfully!');
      setShowWithdrawModal(false);
      setSelectedApp(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Accepted':
        return 'bg-success';
      case 'Pending':
        return 'bg-warning text-dark';
      case 'Rejected':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div className="px-md-4">
      <h1 className="fw-bold mb-4">My Applications</h1>
      <div className="card shadow-sm border-light-subtle">
        <div className="card-header bg-white">
          <h5 className="mb-0">Submitted Applications</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Gig Title</th>
                  <th scope="col">Client</th>
                  <th scope="col">Date Applied</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td>
                      <div className="fw-bold">{app.gigTitle}</div>
                    </td>
                    <td className="text-muted">{app.clientName}</td>
                    <td className="text-muted">{app.dateApplied}</td>
                    <td>
                      <span className={`badge ${getStatusBadge(app.status)}`}>{app.status}</span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-success me-2" onClick={() => handleViewClick(app)}>View Gig</button>
                      {app.status === 'Pending' && (
                        <button className="btn btn-sm btn-outline-danger" onClick={() => handleWithdrawClick(app)}>Withdraw</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* View Gig Modal */}
      {selectedApp && (
        <div className={`modal fade ${showViewModal ? 'show d-block' : ''}`} tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedApp.gigTitle}</h5>
                <button type="button" className="btn-close" onClick={() => setShowViewModal(false)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Client:</strong> {selectedApp.clientName}</p>
                <p><strong>Budget:</strong> {selectedApp.budget}</p>
                <p>{selectedApp.description}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowViewModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Confirmation Modal */}
      {selectedApp && (
        <div className={`modal fade ${showWithdrawModal ? 'show d-block' : ''}`} tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Withdrawal</h5>
                <button type="button" className="btn-close" onClick={() => setShowWithdrawModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to withdraw your application for <strong>{selectedApp.gigTitle}</strong>?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowWithdrawModal(false)}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={confirmWithdraw}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyApplicationsPage;
