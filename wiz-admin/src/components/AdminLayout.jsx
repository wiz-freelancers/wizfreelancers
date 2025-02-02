import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login');
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white" style={{ width: '250px', minHeight: '100vh' }}>
        <div className="p-3">
          <h4 className="text-white">Admin Dashboard</h4>
          <hr />
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link text-white">
                <i className="fas fa-tachometer-alt me-2"></i>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link text-white">
                <i className="fas fa-cogs me-2"></i>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link text-white">
                <i className="fas fa-users me-2"></i>
                Team Members
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
          <div className="container-fluid">
            <span className="navbar-brand">Admin Panel</span>
            <button 
              className="btn btn-outline-danger"
              onClick={handleLogout}
            >
              <i className="fas fa-sign-out-alt me-2"></i>
              Logout
            </button>
          </div>
        </nav>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout; 