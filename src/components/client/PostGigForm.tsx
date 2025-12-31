import React from 'react';
import toast from 'react-hot-toast';

const PostGigForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Gig posted successfully!');
  };
  return (
    <div className="card mx-auto" style={{ maxWidth: '800px' }}>
      <div className="card-body">
        <h3 className="card-title mb-4">Create a New Gig</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="gigTitle" className="form-label">Gig Title</label>
            <input type="text" className="form-control" id="gigTitle" placeholder="e.g., Website Redesign for Local Business" />
          </div>
          <div className="mb-3">
            <label htmlFor="gigDescription" className="form-label">Description</label>
            <textarea className="form-control" id="gigDescription" rows={4} placeholder="Describe the work to be done, including scope, deliverables, and any specific requirements."></textarea>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="gigCategory" className="form-label">Category</label>
              <select id="gigCategory" className="form-select">
                <option selected>Choose a category...</option>
                <option>Web Design</option>
                <option>Plumbing</option>
                <option>Tutoring</option>
                <option>Electrical</option>
                <option>Software Development</option>
                <option>Design</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="gigBudget" className="form-label">Budget (Birr)</label>
              <input type="text" className="form-control" id="gigBudget" placeholder="e.g., 5000 - 10000" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="gigLocation" className="form-label">Location (Sub-city)</label>
            <select id="gigLocation" className="form-select">
              <option value="" disabled selected>Select sub-city...</option>
              <option>Addis Ketema</option>
              <option>Akaky Kaliti</option>
              <option>Arada</option>
              <option>Bole</option>
              <option>Gullele</option>
              <option>Kirkos</option>
              <option>Kolfe Keranio</option>
              <option>Lideta</option>
              <option>Nifas Silk-Lafto</option>
              <option>Yeka</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Post Gig</button>
        </form>
      </div>
    </div>
  );
};

export default PostGigForm;
