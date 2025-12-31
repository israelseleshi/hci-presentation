import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../LandingPage/Header';

interface Gig {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  budget: string;
  postedTime: string;
}

// Mock gigs – in real app fetch from API
const gigs: Gig[] = [
  {
    id: '1',
    title: 'Website Redesign',
    category: 'Web Design',
    description: 'Revamp existing business website to modern responsive design.',
    location: 'Bole',
    budget: '20,000',
    postedTime: '2 days ago',
  },
  {
    id: '2',
    title: 'Plumbing Repair',
    category: 'Plumbing',
    description: 'Fix leaking pipes and install new faucets in bathroom.',
    location: 'Arada',
    budget: '8,000',
    postedTime: '5 days ago',
  },
];

const GigDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const gig = gigs.find((g) => g.id === id);

  if (!gig) {
    return (
      <>
        <Header />
        <div className="container mt-4">
          <div className="alert alert-warning">Gig not found.</div>
          <Link to="/freelancer/dashboard/find-work" className="btn btn-secondary">Back to Search</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mt-4">
        <Link to="/freelancer/dashboard/find-work" className="btn btn-outline-secondary mb-3">← Back to Search</Link>
        <div className="bg-white p-4 rounded shadow-sm border border-light-subtle">
          <h1 className="fw-bold mb-3">{gig.title}</h1>
          <p className="text-muted mb-2">Category: {gig.category}</p>
          <p>{gig.description} This project will require close collaboration with the client, adherence to quality standards, and timely delivery. Applicants should provide a portfolio showcasing relevant experience.</p>
          <hr />
          <p><strong>Location:</strong> {gig.location}</p>
          <p><strong>Budget:</strong> {gig.budget} Birr</p>
          <p><strong>Posted:</strong> {gig.postedTime}</p>
          <div className="d-grid gap-2 mt-4">
            <Link to="/login" className="btn btn-warning">Apply for this Gig</Link>
            <Link to="/freelancer/dashboard/find-work" className="btn btn-outline-secondary">Back to Search</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GigDetailsPage;
