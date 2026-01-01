import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { FiGrid, FiPlusSquare, FiBriefcase, FiMessageSquare, FiBell, FiLogOut, FiMenu } from 'react-icons/fi';
import { Dropdown } from 'react-bootstrap';
import { ClientGigsProvider } from '../../contexts/ClientGigsContext';

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
        <div className={`d-flex align-items-center ${collapsed ? 'justify-content-center' : 'justify-content-between'} mb-3`}>
          {!collapsed && <span className="fs-4 text-dark">Client Panel</span>}
          <button className="btn btn-outline-secondary" onClick={() => setCollapsed(!collapsed)}>
            <FiMenu size={20} />
          </button>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto" style={{ ['--bs-nav-pills-link-active-bg' as any]: '#0d6efd' }}>
          <li className="nav-item">
            <NavLink to="/client/dashboard" end className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active text-white' : 'text-dark'}`}>
              <FiGrid />
              {!collapsed && <span className="ms-2">Dashboard</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="post-gig" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active text-white' : 'text-dark'}`}>
              <FiPlusSquare />
              {!collapsed && <span className="ms-2">Post a Gig</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="my-gigs" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active text-white' : 'text-dark'}`}>
              <FiBriefcase />
              {!collapsed && <span className="ms-2">My Gigs</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="messages" className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active text-white' : 'text-dark'}`}>
              <FiMessageSquare />
              {!collapsed && <span className="ms-2">Messages</span>}
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
              <Dropdown.Item href="#">New proposal for your gig</Dropdown.Item>
              <Dropdown.Item href="#">Message from a freelancer</Dropdown.Item>
              <Dropdown.Item href="#">Payment processed</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <ClientGigsProvider>
          <Outlet />
        </ClientGigsProvider>
      </div>
    </div>
  );
};

export default ClientDashboardPage;
