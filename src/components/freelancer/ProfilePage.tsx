import React from 'react';
import toast from 'react-hot-toast';

const ProfilePage: React.FC = () => {
  const handleBasicInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Basic information saved successfully!');
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Password changed successfully!');
  };

  return (
    <div className="px-md-4">
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
                <input type="password" className="form-control" id="currentPassword" />
              </div>
              <div className="col-md-4">
                <label htmlFor="newPassword" className="form-label">New password</label>
                <input type="password" className="form-control" id="newPassword" />
              </div>
              <div className="col-md-4">
                <label htmlFor="confirmPassword" className="form-label">Confirm new password</label>
                <input type="password" className="form-control" id="confirmPassword" />
              </div>
              <div className="col-12 text-end mt-4">
                <button type="submit" className="btn btn-success">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
