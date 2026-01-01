import React, { useState } from 'react';

const conversationsData = [
  {
    id: 1,
    name: 'Client A',
    time: '2 hours ago',
    lastMessage: 'Can you start tomorrow?',
    messages: [
      { sender: 'other', text: 'Hello, I liked your proposal. Can you start tomorrow?' },
      { sender: 'me', text: 'Yes, I can start tomorrow morning.' },
    ],
  },
  {
    id: 2,
    name: 'Client B',
    time: '1 day ago',
    lastMessage: 'Please share your portfolio.',
    messages: [{ sender: 'other', text: 'Please share your portfolio.' }],
  },
];

const Messages: React.FC = () => {
  const [activeConversationId, setActiveConversationId] = useState(1);

  const activeConversation = conversationsData.find((c) => c.id === activeConversationId);

  return (
    <div className="card h-100">
      <div className="row g-0 h-100">
        <div className="col-4 border-end">
          <div className="p-3">
            <h4 className="mb-3">Conversations</h4>
            <div className="list-group">
              {conversationsData.map((convo) => (
                <a
                  href="#"
                  key={convo.id}
                  className={`list-group-item list-group-item-action ${activeConversationId === convo.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveConversationId(convo.id);
                  }}
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{convo.name}</h5>
                    <small>{convo.time}</small>
                  </div>
                  <p className="mb-1">{convo.lastMessage}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="col-8">
          {activeConversation && (
            <div className="p-3 d-flex flex-column" style={{ height: '100%' }}>
              <div className="flex-grow-1">
                <h4 className="mb-3">Chat with {activeConversation.name}</h4>
                {activeConversation.messages.map((msg, index) => (
                  <div key={index} className={`mb-2 ${msg.sender === 'me' ? 'text-end' : ''}`}>
                    <div className={`${msg.sender === 'me' ? 'bg-primary text-white' : 'bg-light'} d-inline-block p-2 rounded`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Type your message..." />
                  <button className="btn btn-primary" type="button">
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
