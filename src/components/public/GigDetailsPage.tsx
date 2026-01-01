import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from './LandingPage/Header';

const allGigs = [
  { id: 1, title: 'Website Redesign for Local Business', category: 'Web Design', description: 'Need a modern website redesign for our e-commerce store', location: 'Bole', budget: '5000 - 10000', postedTime: '2 hours ago', isNew: true },
  { id: 2, title: 'Plumbing Repair - Bathroom Renovation', category: 'Plumbing', description: 'Complete bathroom plumbing work including pipe installation', location: 'Kazanchis', budget: '2000 - 3500', postedTime: '4 hours ago', isNew: false },
  { id: 3, title: 'English Tutoring for High School Students', category: 'Tutoring', description: 'Need experienced English teacher for exam preparation', location: 'Bole', budget: '500 - 800', postedTime: '1 day ago', isNew: false },
  { id: 4, title: 'Graphic Designer for Logo Branding', category: 'Design', description: 'Create a new logo and branding guide for a startup.', location: 'Arada', budget: '3000 - 5000', postedTime: '2 days ago', isNew: true },
  { id: 5, title: 'Social Media Manager', category: 'Marketing', description: 'Manage social media accounts and create content.', location: 'Lideta', budget: '4000 - 6000', postedTime: '3 days ago', isNew: false },
  { id: 6, title: 'Mobile App Developer (React Native)', category: 'Software Development', description: 'Build a cross-platform mobile app.', location: 'Nifas Silk', budget: '25000 - 40000', postedTime: '5 days ago', isNew: false },
];

const GigDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const gig = allGigs.find(g => g.id === parseInt(id || ''));

  return (
    <>
      <Header />
      <div className="container my-5">
        <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>Back to Search</button>
        {gig ? (
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h1 className="fw-bold">{gig.title}</h1>
              <p className="text-muted">{gig.category}</p>
              <p>{gig.description}</p>
              <p><strong>Location:</strong> {gig.location}</p>
              <p><strong>Budget:</strong> {gig.budget} Birr</p>
              <p><strong>Posted:</strong> {gig.postedTime}</p>
              <Link to="/login" className="btn btn-primary">Apply for this Gig</Link>
            </div>
          </div>
        ) : (
          <div className="alert alert-warning">Gig not found.</div>
        )}
      </div>
    </>
  );
};

export default GigDetailsPage;
