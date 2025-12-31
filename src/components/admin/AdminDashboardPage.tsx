import React, { useState } from 'react';
import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import { FiMenu, FiGrid, FiShield, FiSlash, FiLogOut } from 'react-icons/fi';

const AdminDashboardPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="d-flex">
      <div
        className={`d-flex flex-column flex-shrink-0 p-3 bg-dark text-white`}
        style={{ width: collapsed ? '80px' : '280px', height: '100vh', transition: 'width 0.3s' }}
      >
        <div className="d-flex flex-column align-items-start mb-3">
          <button className="btn btn-outline-light mb-2" onClick={() => setCollapsed(!collapsed)}>
            <FiMenu size={20} />
          </button>
          {!collapsed && <span className="fs-4">Admin Panel</span>}
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/admin/dashboard" end className={({ isActive }) => `nav-link d-flex align-items-center text-white ${isActive ? 'active' : ''}`}>
              <FiGrid />
              {!collapsed && <span className="ms-2">Dashboard</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="id-verification" className={({ isActive }) => `nav-link d-flex align-items-center text-white ${isActive ? 'active' : ''}`}>
              <FiShield />
              {!collapsed && <span className="ms-2">ID Verification</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="moderation" className={({ isActive }) => `nav-link d-flex align-items-center text-white ${isActive ? 'active' : ''}`}>
              <FiSlash />
              {!collapsed && <span className="ms-2">Moderation</span>}
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

export default AdminDashboardPage;
