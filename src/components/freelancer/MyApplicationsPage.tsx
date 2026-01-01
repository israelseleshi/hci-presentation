import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useFreelancerApplications, type FreelancerApplication } from '../../contexts/FreelancerApplicationsContext';
import ConfirmationModal from '../common/ConfirmationModal';
import RateFreelancerModal from '../client/RateFreelancerModal';

const MyApplicationsPage: React.FC = () => {
  const { applications } = useFreelancerApplications();
  const [selectedApp, setSelectedApp] = useState<FreelancerApplication | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showRateModal, setShowRateModal] = useState(false);

  const handleViewClick = (app: FreelancerApplication) => {
    setSelectedApp(app);
    setShowViewModal(true);
  };

  const handleWithdrawClick = (app: FreelancerApplication) => {
    setSelectedApp(app);
    setShowWithdrawModal(true);
  };

  const confirmWithdraw = () => {
    if (selectedApp) {
      toast.success('Application withdrawn successfully!');
      setShowWithdrawModal(false);
      setSelectedApp(null);
    }
  };

  const finishedWorks = applications.filter((a) => a.status === 'Accepted');

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
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            padding: '16px',
            fontSize: '1.1rem',
          },
          success: {
            style: {
              background: '#28a745',
              color: 'white',
            },
          },
        }}
      />
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

      <div className="card shadow-sm border-light-subtle mt-4">
        <div className="card-header bg-white">
          <h5 className="mb-0">Finished Works</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Gig Title</th>
                  <th scope="col">Client</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {finishedWorks.map((app) => (
                  <tr key={`finished-${app.id}`}>
                    <td>
                      <div className="fw-bold">{app.gigTitle}</div>
                    </td>
                    <td className="text-muted">{app.clientName}</td>
                    <td>
                      <span className={`badge ${getStatusBadge(app.status)}`}>{app.status}</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                          setSelectedApp(app);
                          setShowRateModal(true);
                        }}
                      >
                        Rate Client
                      </button>
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

      <ConfirmationModal
        show={!!selectedApp && showWithdrawModal}
        title="Confirm Withdrawal"
        body={(
          <div>
            Are you sure you want to withdraw your application for <strong>{selectedApp?.gigTitle}</strong>?
          </div>
        )}
        confirmText="Withdraw"
        confirmVariant="danger"
        onCancel={() => setShowWithdrawModal(false)}
        onConfirm={confirmWithdraw}
      />

      <RateFreelancerModal
        show={showRateModal}
        onClose={() => setShowRateModal(false)}
        onSubmit={() => {
          toast.success('Rating submitted successfully!');
          setShowRateModal(false);
        }}
      />
    </div>
  );
};

export default MyApplicationsPage;
