import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ConfirmationModal from '../common/ConfirmationModal';

const ModerationPanel: React.FC = () => {
  const [confirm, setConfirm] = useState<{ show: boolean; title: string; body: React.ReactNode; onConfirm: (() => void) | null }>({
    show: false,
    title: '',
    body: null,
    onConfirm: null,
  });

  const flaggedContent = [
    {
      id: 1,
      type: 'Gig',
      reportedBy: 'UserA',
      reason: 'Spam',
    },
    {
      id: 2,
      type: 'User',
      reportedBy: 'UserB',
      reason: 'Inappropriate content',
    },
    {
      id: 3,
      type: 'Gig',
      reportedBy: 'UserC',
      reason: 'Misleading information',
    },
  ];

  const handleDismiss = (id: number) => {
    toast.success(`Report ${id} has been dismissed.`);
  };

  const handleDelete = (id: number) => {
    toast.error(`Content ${id} has been deleted.`);
  };

  const handleBan = (id: number) => {
    toast.error(`User associated with content ${id} has been banned.`);
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
      <h1 className="fw-bold mb-4">Moderation Panel</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Reported By</th>
            <th>Reason</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flaggedContent.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>{item.reportedBy}</td>
              <td>{item.reason}</td>
              <td>
                <button className="btn btn-sm btn-secondary me-2" onClick={() => handleDismiss(item.id)}>Dismiss</button>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() =>
                    setConfirm({
                      show: true,
                      title: 'Delete Content',
                      body: (
                        <div>
                          Are you sure you want to delete content <strong>#{item.id}</strong>?
                        </div>
                      ),
                      onConfirm: () => handleDelete(item.id),
                    })
                  }
                >
                  Delete Content
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() =>
                    setConfirm({
                      show: true,
                      title: 'Ban User',
                      body: (
                        <div>
                          Are you sure you want to ban the user associated with content <strong>#{item.id}</strong>?
                        </div>
                      ),
                      onConfirm: () => handleBan(item.id),
                    })
                  }
                >
                  Ban User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ConfirmationModal
        show={confirm.show}
        title={confirm.title}
        body={confirm.body}
        onCancel={() => setConfirm({ show: false, title: '', body: null, onConfirm: null })}
        onConfirm={() => {
          const fn = confirm.onConfirm;
          setConfirm({ show: false, title: '', body: null, onConfirm: null });
          fn?.();
        }}
      />
    </div>
  );
};

export default ModerationPanel;
