import React, { useState } from 'react';
import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import { FiMenu, FiHome, FiSearch, FiClipboard, FiUser, FiLogOut, FiShield } from 'react-icons/fi';

const FreelancerDashboardPage: React.FC = () => {
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
        <div className="d-flex flex-column align-items-start mb-3">
          <button className="btn btn-outline-secondary mb-2" onClick={() => setCollapsed(!collapsed)}>
            <FiMenu size={20} />
          </button>
          {!collapsed && <span className="fs-4">Freelancer Dashboard</span>}
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/freelancer/dashboard" end className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
              <FiHome />
              {!collapsed && <span className="ms-2">Dashboard</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="find-work" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
              <FiSearch />
              {!collapsed && <span className="ms-2">Find Work</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="applications" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
              <FiClipboard />
              {!collapsed && <span className="ms-2">My Applications</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="profile" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
              <FiUser />
              {!collapsed && <span className="ms-2">Profile</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="id-verification" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
              <FiShield />
              {!collapsed && <span className="ms-2">ID Verification</span>}
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

export default FreelancerDashboardPage;
