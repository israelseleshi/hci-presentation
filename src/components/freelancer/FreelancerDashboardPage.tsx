import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { FiGrid, FiSearch, FiFileText, FiUser, FiBell, FiLogOut, FiMenu, FiMessageSquare, FiShield } from 'react-icons/fi';
import { Dropdown } from 'react-bootstrap';
import { FreelancerApplicationsProvider } from '../../contexts/FreelancerApplicationsContext';

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
        className="d-flex flex-column flex-shrink-0 p-3 bg-light text-dark"
        style={{
          width: collapsed ? '80px' : '280px',
          height: '100vh',
          transition: 'width 0.3s',
          position: 'sticky',
          top: 0,
          borderRight: '1px solid rgba(0,0,0,0.12)',
        }}
      >
        <div className={`d-flex align-items-center mb-3 ${collapsed ? 'justify-content-center' : ''}`}>
          <button className="btn btn-outline-secondary" onClick={() => setCollapsed(!collapsed)}>
            <FiMenu size={20} />
          </button>
          {!collapsed && <span className="fs-4 ms-2 text-dark">Freelancer Panel</span>}
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto" style={{ ['--bs-nav-pills-link-active-bg' as any]: '#0d6efd' }}>
          <li className="nav-item">
            <NavLink to="/freelancer/dashboard" end className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active text-white' : 'text-dark'}`}>
              <FiGrid />
              {!collapsed && <span className="ms-2">Dashboard</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="find-work" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active text-white' : 'text-dark'}`}>
              <FiSearch />
              {!collapsed && <span className="ms-2">Find Work</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="applications" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active text-white' : 'text-dark'}`}>
              <FiFileText />
              {!collapsed && <span className="ms-2">My Applications</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="profile" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active text-white' : 'text-dark'}`}>
              <FiUser />
              {!collapsed && <span className="ms-2">Profile</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="messages" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active text-white' : 'text-dark'}`}>
              <FiMessageSquare />
              {!collapsed && <span className="ms-2">Messages</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="id-verification" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active text-white' : 'text-dark'}`}>
              <FiShield />
              {!collapsed && <span className="ms-2">Upload ID</span>}
            </NavLink>
          </li>
        </ul>
        <hr />
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
              <Dropdown.Item href="#">New gig matching your skills</Dropdown.Item>
              <Dropdown.Item href="#">Your proposal was accepted</Dropdown.Item>
              <Dropdown.Item href="#">Payment received</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <FreelancerApplicationsProvider>
          <Outlet />
        </FreelancerApplicationsProvider>
      </div>
    </div>
  );
};

export default FreelancerDashboardPage;
