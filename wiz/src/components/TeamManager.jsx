import React, { useState, useEffect } from 'react';

const TeamManager = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    bio: '',
    image: null,
    linkedin_url: '',
    github_url: '',
    email: '',
    order: 0
  });

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/team/');
      if (!response.ok) throw new Error('Failed to fetch team members');
      const data = await response.json();
      const membersList = data.results || data;
      setTeamMembers(Array.isArray(membersList) ? membersList : []);
      setLoading(false);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const formDataObj = new FormData();
      
      // Add each field to FormData
      Object.keys(formData).forEach(key => {
        if (key === 'image' && formData[key]) {
          formDataObj.append(key, formData[key]);
        } else if (formData[key]) {
          formDataObj.append(key, formData[key]);
        }
      });

      const response = await fetch('http://localhost:8000/api/team/', {
        method: 'POST',
        body: formDataObj,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to create team member');
      }

      const result = await response.json();
      console.log('Team member created:', result);

      // Reset form and refresh list
      setFormData({
        name: '',
        position: '',
        bio: '',
        image: null,
        linkedin_url: '',
        github_url: '',
        email: '',
        order: 0
      });
      fetchTeamMembers();

      alert('Team member added successfully!');
    } catch (err) {
      console.error('Error creating team member:', err);
      setError(err.message || 'Failed to create team member. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this team member?')) {
      try {
        const response = await fetch(`http://localhost:8000/api/team/${id}/`, {
          method: 'DELETE',
        });

        if (!response.ok) throw new Error('Failed to delete team member');
        
        fetchTeamMembers();
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) return (
    <div className="d-flex justify-content-center p-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="alert alert-danger m-3" role="alert">
      {error}
    </div>
  );

  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4">Manage Team Members</h2>
      
      {/* Show error message if exists */}
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setError(null)}
          ></button>
        </div>
      )}

      {/* Add Team Member Form */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">Add New Team Member</h5>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Position</label>
              <input
                type="text"
                className="form-control"
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Bio</label>
              <textarea
                className="form-control"
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                accept="image/*"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">LinkedIn URL</label>
              <input
                type="url"
                className="form-control"
                value={formData.linkedin_url}
                onChange={(e) => setFormData({...formData, linkedin_url: e.target.value})}
                placeholder="https://linkedin.com/in/username"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">GitHub URL</label>
              <input
                type="url"
                className="form-control"
                value={formData.github_url}
                onChange={(e) => setFormData({...formData, github_url: e.target.value})}
                placeholder="https://github.com/username"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Order</label>
              <input
                type="number"
                className="form-control"
                value={formData.order}
                onChange={(e) => setFormData({...formData, order: parseInt(e.target.value)})}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-plus me-2"></i>
              Add Team Member
            </button>
          </form>
        </div>
      </div>

      {/* Team Members List */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">Current Team Members</h5>
          {teamMembers.length === 0 ? (
            <p className="text-center text-muted">No team members found</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Image</th>
                    <th>Email</th>
                    <th>Order</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member) => (
                    <tr key={member.id}>
                      <td>{member.name}</td>
                      <td>{member.position}</td>
                      <td>
                        <img 
                          src={`http://localhost:8000${member.image}`} 
                          alt={member.name}
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                          className="rounded"
                        />
                      </td>
                      <td>{member.email}</td>
                      <td>{member.order}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(member.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamManager; 