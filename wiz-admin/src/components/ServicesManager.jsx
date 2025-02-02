import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ServicesManager = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    icon: '',
    order: 0
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await api.get('/services/');
      setServices(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch services');
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
        await api.patch(`/services/${editingId}/`, formDataObj);
      } else {
        await api.post('/services/', formDataObj);
      }

      fetchServices();
      resetForm();
    } catch (err) {
      setError(editingId ? 'Failed to update service' : 'Failed to create service');
    }
  };

  const handleEdit = (service) => {
    setEditingId(service.id);
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon,
      order: service.order,
      image: null // Reset image since we don't want to show the old file input
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: '',
      description: '',
      image: null,
      icon: '',
      order: 0
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await api.delete(`/services/${id}/`);
        fetchServices();
      } catch (err) {
        setError('Failed to delete service');
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
      <h2 className="mb-4">Manage Services</h2>

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

      {/* Add/Edit Service Form */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{editingId ? 'Edit Service' : 'Add New Service'}</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
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
              <label className="form-label">Icon</label>
              <input
                type="text"
                className="form-control"
                value={formData.icon}
                onChange={(e) => setFormData({...formData, icon: e.target.value})}
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
                {editingId ? 'Update Service' : 'Add Service'}
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

      {/* Services List */}
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
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id}>
                  <td>{service.title}</td>
                  <td>{service.description.substring(0, 100)}...</td>
                  <td>
                    <img 
                      src={service.image}
                      alt={service.title}
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        objectFit: 'cover',
                        border: '1px solid #ddd',
                        borderRadius: '4px'
                      }}
                      onError={(e) => {
                        console.log('Failed to load image:', service.image);
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/50?text=No+Image';
                      }}
                    />
                  </td>
                  <td>{service.order}</td>
                  <td>
                    <div className="btn-group">
                      <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => handleEdit(service)}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(service.id)}
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

export default ServicesManager; 