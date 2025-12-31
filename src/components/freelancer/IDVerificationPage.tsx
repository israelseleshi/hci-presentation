import React from 'react';
import toast from 'react-hot-toast';
import { FiUpload } from 'react-icons/fi';

const IDVerificationPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Document submitted for verification!');
  };
  return (
    <div className="px-md-4">
      <h1 className="fw-bold mb-4">ID Verification</h1>
      <div className="card shadow-sm border-light-subtle">
        <div className="card-body p-4">
          <h4 className="fw-bold">Upload Your Document</h4>
          <p className="text-muted">Please upload a clear photo of your Kebele ID or Residence ID to verify your account. This helps build trust on the platform.</p>
          <hr />
          <div className="alert alert-info">Your documents are secure and will only be used for verification purposes.</div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="idType" className="form-label">Document Type</label>
              <select id="idType" className="form-select">
                <option>Kebele ID</option>
                <option>Residence ID</option>
                <option>Passport</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="idUpload" className="form-label">Upload File</label>
              <div className="input-group">
                <input type="file" className="form-control" id="idUpload" />
                <span className="input-group-text"><FiUpload /></span>
              </div>
              <div className="form-text">Please upload a clear JPG, PNG, or PDF file.</div>
            </div>
            <div className="text-end mt-4">
              <button type="submit" className="btn btn-primary">Submit for Verification</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IDVerificationPage;
