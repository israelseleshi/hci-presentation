import React, { useState } from 'react';
import toast from 'react-hot-toast';
import RateFreelancerModal from './RateFreelancerModal';

interface Gig {
  id: number;
  title: string;
  status: 'Active' | 'Completed';
  postedAt: string;
}

const mockGigs: Gig[] = [
  { id: 1, title: 'Website Redesign', status: 'Active', postedAt: '2025-12-25' },
  { id: 2, title: 'Plumbing Repair', status: 'Completed', postedAt: '2025-11-20' },
];

const MyGigsList: React.FC = () => {
  const [showRateModal, setShowRateModal] = useState(false);

  const handleRateSubmit = (rating: number, feedback: string) => {
    console.log('Rating:', rating, 'Feedback:', feedback);
    toast.success('Freelancer rated successfully!');
    setShowRateModal(false);
  };
  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '900px' }}>
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
            {mockGigs.map((gig) => (
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
                    <button className="btn btn-sm btn-primary" onClick={() => setShowRateModal(true)}>
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
    </div>
  );
};

export default MyGigsList;
