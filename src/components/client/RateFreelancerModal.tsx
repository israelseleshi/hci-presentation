import React, { useState } from 'react';
import { FiStar } from 'react-icons/fi';

interface RateFreelancerModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (rating: number, feedback: string) => void;
}

const RateFreelancerModal: React.FC<RateFreelancerModalProps> = ({ show, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    onSubmit(rating, feedback);
    setRating(0);
    setFeedback('');
  };

  return (
    <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Rate Freelancer</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Rating</label>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    size={24}
                    onClick={() => setRating(star)}
                    style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
                  />
                ))}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="feedback" className="form-label">Feedback</label>
              <textarea
                id="feedback"
                className="form-control"
                rows={3}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Provide your feedback..."
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit Rating</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateFreelancerModal;
