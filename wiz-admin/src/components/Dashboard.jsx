import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4">Admin Dashboard</h2>
      
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-cogs me-2"></i>
                Services
              </h5>
              <p className="card-text">Manage your services, add new ones, or update existing services.</p>
              <Link to="/services" className="btn btn-primary">
                Manage Services
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-users me-2"></i>
                Team Members
              </h5>
              <p className="card-text">Add or update team member profiles and information.</p>
              <Link to="/team" className="btn btn-primary">
                Manage Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 