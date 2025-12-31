import React, { useState } from 'react';

const conversationsData = [
  { id: 1, name: 'Abebe Kebede', time: '3 days ago', lastMessage: 'Regarding the plumbing repair job...', messages: [{sender: 'other', text: 'Hello, I saw your post for the plumbing repair job.'}, {sender: 'me', text: 'Hi Abebe, thanks for reaching out. Are you available to start next week?'}] },
  { id: 2, name: 'Almaz Tesfaye', time: '5 days ago', lastMessage: 'I am interested in the website redesign project.', messages: [{sender: 'other', text: 'I am interested in the website redesign project.'}] },
  { id: 3, name: 'Yonas Berhe', time: '1 week ago', lastMessage: 'Question about the electrical installation.', messages: [{sender: 'other', text: 'Question about the electrical installation.'}] },
  { id: 4, name: 'Fatuma Ahmed', time: '1 week ago', lastMessage: 'Can you provide more details on the logo design?', messages: [{sender: 'other', text: 'Can you provide more details on the logo design?'}] },
  { id: 5, name: 'Daniel Tadesse', time: '2 weeks ago', lastMessage: 'Follow up on the mobile app development.', messages: [{sender: 'other', text: 'Follow up on the mobile app development.'}] },
  { id: 6, name: 'Sara Gebre', time: '2 weeks ago', lastMessage: 'Interested in the tutoring position.', messages: [{sender: 'other', text: 'Interested in the tutoring position.'}] },
];

const Messages: React.FC = () => {
  const [activeConversationId, setActiveConversationId] = useState(1);

  const activeConversation = conversationsData.find(c => c.id === activeConversationId);

  return (
    <div className="card h-100">
      <div className="row g-0 h-100">
        <div className="col-4 border-end">
          <div className="p-3">
            <h4 className="mb-3">Conversations</h4>
            <div className="list-group">
              {conversationsData.map(convo => (
                <a href="#" key={convo.id} className={`list-group-item list-group-item-action ${activeConversationId === convo.id ? 'active' : ''}`} onClick={(e) => {e.preventDefault(); setActiveConversationId(convo.id);}}>
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
            <div className="p-3 d-flex flex-column" style={{height: '100%'}}>
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
                  <button className="btn btn-primary" type="button">Send</button>
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
