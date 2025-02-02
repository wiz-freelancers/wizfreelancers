import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear tokens from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // Redirect to login page
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
              <Link to="/admin/dashboard" className="nav-link text-white">
                <i className="fas fa-tachometer-alt me-2"></i>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/services" className="nav-link text-white">
                <i className="fas fa-cogs me-2"></i>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/team" className="nav-link text-white">
                <i className="fas fa-users me-2"></i>
                Team Members
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/projects" className="nav-link text-white">
                <i className="fas fa-project-diagram me-2"></i>
                Projects
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
            <div>
              <Link to="/" className="btn btn-outline-primary me-2">
                <i className="fas fa-home me-2"></i>
                View Site
              </Link>
              <button 
                className="btn btn-outline-danger"
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt me-2"></i>
                Logout
              </button>
            </div>
          </div>
        </nav>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
