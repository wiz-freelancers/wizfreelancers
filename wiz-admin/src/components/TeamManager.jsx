import React, { useState, useEffect } from 'react';
import api from '../services/api';

const TeamManager = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
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
      const response = await api.get('/team/');
      setTeamMembers(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch team members');
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataObj = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null) {
          formDataObj.append(key, formData[key]);
        }
      });

      if (editingId) {
        await api.patch(`/team/${editingId}/`, formDataObj);
      } else {
        await api.post('/team/', formDataObj);
      }

      fetchTeamMembers();
      resetForm();
    } catch (err) {
      setError(editingId ? 'Failed to update team member' : 'Failed to create team member');
    }
  };

  const handleEdit = (member) => {
    setEditingId(member.id);
    setFormData({
      name: member.name,
      position: member.position,
      bio: member.bio,
      image: null, // Reset image since we don't want to show the old file input
      linkedin_url: member.linkedin_url || '',
      github_url: member.github_url || '',
      email: member.email,
      order: member.order
    });
  };

  const resetForm = () => {
    setEditingId(null);
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
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this team member?')) {
      try {
        await api.delete(`/team/${id}/`);
        fetchTeamMembers();
      } catch (err) {
        setError('Failed to delete team member');
      }
    }
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return 'https://via.placeholder.com/50?text=No+Image';
    
    // If it's already a full URL, return it
    if (imagePath.startsWith('http')) return imagePath;
    
    // Otherwise, construct the full URL
    return `${process.env.REACT_APP_API_URL || 'http://localhost:8000'}${imagePath}`;
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Manage Team Members</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
          <button 
            type="button" 
            className="btn-close float-end" 
            onClick={() => setError(null)}
          ></button>
        </div>
      )}

      {/* Add/Edit Team Member Form */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{editingId ? 'Edit Team Member' : 'Add New Team Member'}</h5>
          <form onSubmit={handleSubmit}>
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
              />
              {editingId && (
                <small className="text-muted">
                  Leave empty to keep the current image
                </small>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">LinkedIn URL</label>
              <input
                type="url"
                className="form-control"
                value={formData.linkedin_url}
                onChange={(e) => setFormData({...formData, linkedin_url: e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">GitHub URL</label>
              <input
                type="url"
                className="form-control"
                value={formData.github_url}
                onChange={(e) => setFormData({...formData, github_url: e.target.value})}
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
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                {editingId ? 'Update Team Member' : 'Add Team Member'}
              </button>
              {editingId && (
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={resetForm}
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Team Members List */}
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Email</th>
                <th>Image</th>
                <th>Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.position}</td>
                  <td>{member.email}</td>
                  <td>
                    <img 
                      src={member.image}
                      alt={member.name}
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        objectFit: 'cover',
                        border: '1px solid #ddd',
                        borderRadius: '4px'
                      }}
                      onError={(e) => {
                        console.log('Failed to load image:', member.image);
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/50?text=No+Image';
                      }}
                    />
                  </td>
                  <td>{member.order}</td>
                  <td>
                    <div className="btn-group">
                      <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => handleEdit(member)}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(member.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TeamManager; 