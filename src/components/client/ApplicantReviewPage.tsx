import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FiCheckCircle } from 'react-icons/fi';

interface Applicant {
  id: number;
  name: string;
  bio: string;
  verified: boolean;
  skills: string[];
  experience: string;
}

const ApplicantReviewPage: React.FC = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([
    { id: 1, name: 'Abebe Kebede', bio: 'Experienced web developer with 5+ years in React.', verified: true, skills: ['React', 'Node.js', 'TypeScript'], experience: '5+ Years' },
    { id: 2, name: 'Chaltu Girma', bio: 'Full-stack developer specializing in MERN stack.', verified: false, skills: ['MongoDB', 'Express', 'React', 'Node.js'], experience: '3 Years' },
    { id: 3, name: 'Yosef Tadesse', bio: 'UI/UX designer with a passion for clean interfaces.', verified: true, skills: ['Figma', 'Adobe XD', 'User Research'], experience: '4 Years' },
  ]);

  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleViewProfile = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setShowProfileModal(true);
  };

  const handleHire = (applicant: Applicant) => {
    toast.success(`Hired ${applicant.name}!`);
  };

  const handleReject = (applicant: Applicant) => {
    toast.error(`Rejected ${applicant.name}.`);
    setApplicants(applicants.filter(a => a.id !== applicant.id));
  };

  return (
    <div className="px-md-4">
      <h1 className="fw-bold mb-4">Applicants for Website Redesign</h1>
      <div className="card shadow-sm border-light-subtle">
        <div className="card-body">
          <div className="list-group">
            {applicants.map(applicant => (
              <div key={applicant.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">{applicant.name}</h5>
                  <p className="mb-1 text-muted">{applicant.bio}</p>
                  {applicant.verified && <span className="text-success"><FiCheckCircle /> Verified</span>}
                </div>
                <div>
                  <button className="btn btn-outline-secondary me-2" onClick={() => handleViewProfile(applicant)}>View Profile</button>
                  <button className="btn btn-primary me-2" onClick={() => handleHire(applicant)}>Hire</button>
                  <button className="btn btn-danger" onClick={() => handleReject(applicant)}>Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View Profile Modal */}
      {selectedApplicant && (
        <div className={`modal fade ${showProfileModal ? 'show d-block' : ''}`} tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedApplicant.name}'s Profile</h5>
                <button type="button" className="btn-close" onClick={() => setShowProfileModal(false)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Experience:</strong> {selectedApplicant.experience}</p>
                <p><strong>Bio:</strong> {selectedApplicant.bio}</p>
                <p><strong>Skills:</strong></p>
                <div>
                  {selectedApplicant.skills.map(skill => (
                    <span key={skill} className="badge bg-secondary me-1">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowProfileModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantReviewPage;
