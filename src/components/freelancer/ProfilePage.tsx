import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import ConfirmationModal from '../common/ConfirmationModal';

const ProfilePage: React.FC = () => {
  const [showBasicConfirm, setShowBasicConfirm] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleBasicInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBasicConfirm(true);
  };

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPasswordConfirm(true);
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
      <h1 className="fw-bold mb-4">Settings</h1>
      <div className="card shadow-sm border-light-subtle">
        <div className="card-body p-4">
          {/* Basic Information Section */}
          <div className="mb-5">
            <h4 className="fw-bold">Basic information</h4>
            <p className="text-muted">View and update your personal details and account information.</p>
            <hr />
            <form className="row g-3 align-items-end" onSubmit={handleBasicInfoSubmit}>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" defaultValue="abebe.k" disabled />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" defaultValue="abebe.k@example.com" />
              </div>
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" defaultValue="Abebe" />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" defaultValue="Kebede" />
              </div>
              <div className="col-12 text-end mt-4">
                <button type="submit" className="btn btn-success">Save</button>
              </div>
            </form>
          </div>

          {/* Change Password Section */}
          <div>
            <h4 className="fw-bold">Change password</h4>
            <p className="text-muted">Update your password to keep your account secure.</p>
            <hr />
            <form className="row g-3 align-items-end" onSubmit={handlePasswordSubmit}>
              <div className="col-md-4">
                <label htmlFor="currentPassword" className="form-label">Verify current password</label>
                <div className="input-group">
                  <input type={showCurrentPassword ? 'text' : 'password'} className="form-control" id="currentPassword" />
                  <button className="btn btn-outline-secondary" type="button" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                    {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="newPassword" className="form-label">New password</label>
                <div className="input-group">
                  <input type={showNewPassword ? 'text' : 'password'} className="form-control" id="newPassword" />
                  <button className="btn btn-outline-secondary" type="button" onClick={() => setShowNewPassword(!showNewPassword)}>
                    {showNewPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="confirmPassword" className="form-label">Confirm new password</label>
                <div className="input-group">
                  <input type={showConfirmPassword ? 'text' : 'password'} className="form-control" id="confirmPassword" />
                  <button className="btn btn-outline-secondary" type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
              <div className="col-12 text-end mt-4">
                <button type="submit" className="btn btn-success">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ConfirmationModal
        show={showBasicConfirm}
        title="Save Basic Information"
        body={<div>Save changes to your basic information?</div>}
        confirmText="Save"
        confirmVariant="success"
        onCancel={() => setShowBasicConfirm(false)}
        onConfirm={() => {
          setShowBasicConfirm(false);
          toast.success('Basic information saved successfully!');
        }}
      />

      <ConfirmationModal
        show={showPasswordConfirm}
        title="Change Password"
        body={<div>Are you sure you want to change your password?</div>}
        confirmText="Change"
        confirmVariant="success"
        onCancel={() => setShowPasswordConfirm(false)}
        onConfirm={() => {
          setShowPasswordConfirm(false);
          toast.success('Password changed successfully!');
        }}
      />
    </div>
  );
};

export default ProfilePage;
