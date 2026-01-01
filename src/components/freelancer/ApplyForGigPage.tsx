import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useFreelancerApplications } from '../../contexts/FreelancerApplicationsContext';

const allGigs = [
  { id: 1, title: 'Website Redesign for Local Business', category: 'Web Design', description: 'Need a modern website redesign for our e-commerce store', location: 'Bole', budget: '5000 - 10000', postedTime: '2 hours ago', isNew: true },
  { id: 2, title: 'Plumbing Repair - Bathroom Renovation', category: 'Plumbing', description: 'Complete bathroom plumbing work including pipe installation', location: 'Kazanchis', budget: '2000 - 3500', postedTime: '4 hours ago', isNew: false },
  { id: 3, title: 'English Tutoring for High School Students', category: 'Tutoring', description: 'Need experienced English teacher for exam preparation', location: 'Bole', budget: '500 - 800', postedTime: '1 day ago', isNew: false },
  { id: 4, title: 'Graphic Designer for Logo Branding', category: 'Design', description: 'Create a new logo and branding guide for a startup.', location: 'Arada', budget: '3000 - 5000', postedTime: '2 days ago', isNew: true },
  { id: 5, title: 'Social Media Manager', category: 'Marketing', description: 'Manage social media accounts and create content.', location: 'Lideta', budget: '4000 - 6000', postedTime: '3 days ago', isNew: false },
  { id: 6, title: 'Mobile App Developer (React Native)', category: 'Software Development', description: 'Build a cross-platform mobile app.', location: 'Nifas Silk', budget: '25000 - 40000', postedTime: '5 days ago', isNew: false },
];

const ApplyForGigPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const gig = allGigs.find(g => g.id === parseInt(id || ''));
  const { addApplication } = useFreelancerApplications();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gig) {
      addApplication({
        id: Date.now(),
        gigId: gig.id,
        gigTitle: gig.title,
        clientName: 'Client',
        status: 'Pending',
        dateApplied: new Date().toISOString().slice(0, 10),
        description: gig.description,
        budget: `${gig.budget} Birr`,
      });
    }
    toast.success('Application submitted successfully!');
    setTimeout(() => navigate('/freelancer/dashboard/find-work'), 2000);
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
      <h1 className="fw-bold mb-4">Apply for "{gig ? gig.title : `Gig #${id}`}"</h1>
      <div className="card shadow-sm border-light-subtle">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
              <textarea className="form-control" id="coverLetter" rows={6} placeholder="Explain why you are the best fit for this gig..."></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="proposedBudget" className="form-label">Your Proposed Budget (Birr)</label>
              <input type="text" className="form-control" id="proposedBudget" placeholder="e.g., 8000" />
            </div>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-secondary me-2" onClick={() => navigate('/freelancer/dashboard/find-work')}>Cancel</button>
              <button type="submit" className="btn btn-primary">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForGigPage;
