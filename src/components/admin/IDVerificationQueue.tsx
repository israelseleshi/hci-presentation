import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import ConfirmationModal from '../common/ConfirmationModal';

const IDVerificationQueue: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showApproveConfirm, setShowApproveConfirm] = useState(false);
  const [showRejectConfirm, setShowRejectConfirm] = useState(false);

  const verificationQueue = [
    {
      name: 'Abebe Bikila',
      email: 'abebe.bikila@example.com',
      idImage: 'https://via.placeholder.com/400x250.png?text=ID+Front',
      selfieImage: 'https://via.placeholder.com/400x250.png?text=Selfie',
    },
    {
      name: 'Tirunesh Dibaba',
      email: 'tirunesh.dibaba@example.com',
      idImage: 'https://via.placeholder.com/400x250.png?text=ID+Front',
      selfieImage: 'https://via.placeholder.com/400x250.png?text=Selfie',
    },
    {
      name: 'Haile Gebrselassie',
      email: 'haile.gebrselassie@example.com',
      idImage: 'https://via.placeholder.com/400x250.png?text=ID+Front',
      selfieImage: 'https://via.placeholder.com/400x250.png?text=Selfie',
    },
    {
      name: 'Kenenisa Bekele',
      email: 'kenenisa.bekele@example.com',
      idImage: 'https://via.placeholder.com/400x250.png?text=ID+Front',
      selfieImage: 'https://via.placeholder.com/400x250.png?text=Selfie',
    },
    {
      name: 'Meseret Defar',
      email: 'meseret.defar@example.com',
      idImage: 'https://via.placeholder.com/400x250.png?text=ID+Front',
      selfieImage: 'https://via.placeholder.com/400x250.png?text=Selfie',
    },
    {
      name: 'Derartu Tulu',
      email: 'derartu.tulu@example.com',
      idImage: 'https://via.placeholder.com/400x250.png?text=ID+Front',
      selfieImage: 'https://via.placeholder.com/400x250.png?text=Selfie',
    },
    {
      name: 'Fatuma Roba',
      email: 'fatuma.roba@example.com',
      idImage: 'https://via.placeholder.com/400x250.png?text=ID+Front',
      selfieImage: 'https://via.placeholder.com/400x250.png?text=Selfie',
    },
  ];

  const handleApprove = () => {
    toast.success(`${verificationQueue[selectedUser].name} has been approved.`);
  };

  const handleReject = () => {
    toast.error(`${verificationQueue[selectedUser].name} has been rejected.`);
  };

  const handleViewId = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: '#28a745',
              color: 'white',
            },
          },
          error: {
            style: {
              background: '#dc3545',
              color: 'white',
            },
          },
        }}
      />
      <h1 className="fw-bold mb-4">ID Verification Queue</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="list-group">
            {verificationQueue.map((user, index) => (
              <button
                key={index}
                type="button"
                className={`list-group-item list-group-item-action ${selectedUser === index ? 'active' : ''}`}
                onClick={() => setSelectedUser(index)}
              >
                {user.name}
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">User Details</h5>
            </div>
            <div className="card-body">
              <p><strong>Name:</strong> {verificationQueue[selectedUser].name}</p>
              <p><strong>Email:</strong> {verificationQueue[selectedUser].email}</p>
              <Button variant="primary" onClick={handleViewId}>View ID</Button>
            </div>
            <div className="card-footer text-end">
              <Button variant="success" className="me-2" onClick={() => setShowApproveConfirm(true)}>Approve</Button>
              <Button variant="danger" onClick={() => setShowRejectConfirm(true)}>Reject</Button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>ID Verification for {verificationQueue[selectedUser].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <h6>ID Document</h6>
              <img src={verificationQueue[selectedUser].idImage} alt="ID Document" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h6>Selfie</h6>
              <img src={verificationQueue[selectedUser].selfieImage} alt="Selfie" className="img-fluid" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>

      <ConfirmationModal
        show={showApproveConfirm}
        title="Approve ID Verification"
        body={(
          <div>
            Are you sure you want to approve <strong>{verificationQueue[selectedUser].name}</strong>?
          </div>
        )}
        confirmText="Approve"
        confirmVariant="success"
        onCancel={() => setShowApproveConfirm(false)}
        onConfirm={() => {
          setShowApproveConfirm(false);
          handleApprove();
        }}
      />

      <ConfirmationModal
        show={showRejectConfirm}
        title="Reject ID Verification"
        body={(
          <div>
            Are you sure you want to reject <strong>{verificationQueue[selectedUser].name}</strong>?
          </div>
        )}
        confirmText="Reject"
        confirmVariant="danger"
        onCancel={() => setShowRejectConfirm(false)}
        onConfirm={() => {
          setShowRejectConfirm(false);
          handleReject();
        }}
      />
    </div>
  );
};

export default IDVerificationQueue;
