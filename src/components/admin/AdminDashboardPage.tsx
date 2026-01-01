import React, { useState } from 'react';
import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import { FiMenu, FiGrid, FiShield, FiSlash, FiLogOut, FiBell } from 'react-icons/fi';
import { Dropdown } from 'react-bootstrap';

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
        style={{ width: collapsed ? '80px' : '280px', height: '100vh', transition: 'width 0.3s', position: 'sticky', top: 0 }}
      >
        <div className={`d-flex align-items-center ${collapsed ? 'justify-content-center' : 'justify-content-between'} mb-3`}>
          {!collapsed && <span className="fs-4">Admin Panel</span>}
          <button className="btn btn-outline-light" onClick={() => setCollapsed(!collapsed)}>
            <FiMenu size={20} />
          </button>
        </div>
        <hr className="text-secondary" />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/admin/dashboard" end className={({ isActive }) => `nav-link d-flex align-items-center text-white ${isActive ? 'active' : ''}`}>
              <FiGrid />
              {!collapsed && <span className="ms-2">Dashboard</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="id-verification" className={({ isActive }) => `nav-link d-flex align-items-center text-white ${isActive ? 'active' : ''}`}>
              <FiShield />
              {!collapsed && <span className="ms-2">ID Verification</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="moderation" className={({ isActive }) => `nav-link d-flex align-items-center text-white ${isActive ? 'active' : ''}`}>
              <FiSlash />
              {!collapsed && <span className="ms-2">Moderation</span>}
            </NavLink>
          </li>
        </ul>
        <hr className="text-secondary" />
        <button className="btn btn-danger w-100 d-flex align-items-center justify-content-center" onClick={handleLogout}>
          <FiLogOut />
          {!collapsed && <span className="ms-2">Logout</span>}
        </button>
      </div>
      <div className="container mt-4 flex-grow-1">
        <div className="d-flex justify-content-end mb-3">
          <Dropdown align="end">
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              <FiBell />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">New user registered</Dropdown.Item>
              <Dropdown.Item href="#">ID for Kenenisa Bekele approved</Dropdown.Item>
              <Dropdown.Item href="#">Gig reported for spam</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
