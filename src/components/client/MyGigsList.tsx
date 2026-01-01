import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import RateFreelancerModal from './RateFreelancerModal';
import { useClientGigs } from '../../contexts/ClientGigsContext';
import ConfirmationModal from '../common/ConfirmationModal';

const MyGigsList: React.FC = () => {
  const { gigs } = useClientGigs();
  const [showRateModal, setShowRateModal] = useState(false);
  const [showCompleteConfirm, setShowCompleteConfirm] = useState(false);

  const handleRateSubmit = (rating: number, feedback: string) => {
    console.log('Rating:', rating, 'Feedback:', feedback);
    toast.success('Freelancer rated successfully!');
    setShowRateModal(false);
  };
  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '900px' }}>
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
      <div className="card-header bg-white d-flex justify-content-between align-items-center">
        <h4 className="mb-0">My Gigs</h4>
      </div>
      <div className="table-responsive">
        <table className="table mb-0">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col">Posted</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {gigs.map((gig) => (
              <tr key={gig.id}>
                <td>{gig.title}</td>
                <td>
                  <span
                    className={`badge ${gig.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}
                  >
                    {gig.status}
                  </span>
                </td>
                <td>{gig.postedAt}</td>
                <td>
                  {gig.status === 'Active' && (
                    <button className="btn btn-sm btn-primary" onClick={() => setShowCompleteConfirm(true)}>
                      Mark as Completed
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <RateFreelancerModal
        show={showRateModal}
        onClose={() => setShowRateModal(false)}
        onSubmit={handleRateSubmit}
      />

      <ConfirmationModal
        show={showCompleteConfirm}
        title="Mark Gig as Completed"
        body={<div>Are you sure you want to mark this gig as completed?</div>}
        confirmText="Continue"
        confirmVariant="primary"
        onCancel={() => setShowCompleteConfirm(false)}
        onConfirm={() => {
          setShowCompleteConfirm(false);
          setShowRateModal(true);
        }}
      />
    </div>
  );
};

export default MyGigsList;
