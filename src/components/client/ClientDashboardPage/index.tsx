import React, { useState } from 'react';
import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import { FiMenu, FiHome, FiPlusSquare, FiClipboard, FiMessageSquare, FiLogOut, FiUsers } from 'react-icons/fi';

const ClientDashboardPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="d-flex">
      <div
        className={`d-flex flex-column flex-shrink-0 p-3 bg-light border-end ${collapsed ? 'align-items-center' : ''}`}
        style={{ width: collapsed ? '80px' : '280px', height: '100vh', transition: 'width 0.3s' }}
      >
        <div className="d-flex w-100 justify-content-between align-items-center mb-3">
          <button
            className="btn btn-outline-secondary"
            onClick={() => setCollapsed(!collapsed)}
          >
            <FiMenu size={20} />
          </button>
          {!collapsed && <span className="fs-4">Client Dashboard</span>}
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/client/dashboard" end className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
              <FiHome />
              {!collapsed && <span className="ms-2">Dashboard</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="post-gig" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
              <FiPlusSquare />
              {!collapsed && <span className="ms-2">Post a Gig</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="my-gigs" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
              <FiClipboard />
              {!collapsed && <span className="ms-2">My Gigs</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="messages" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
              <FiMessageSquare />
              {!collapsed && <span className="ms-2">Messages</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="applicant-review" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
              <FiUsers />
              {!collapsed && <span className="ms-2">Applicant Review</span>}
            </NavLink>
          </li>
        </ul>
        <button className="btn btn-danger w-100 mt-auto d-flex align-items-center justify-content-center" onClick={handleLogout}>
          <FiLogOut />
          {!collapsed && <span className="ms-2">Logout</span>}
        </button>
      </div>
      <div className="container mt-4 flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
};

export default ClientDashboardPage;
