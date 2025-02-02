import React, { useState, useEffect } from 'react';

const ServicesManager = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    icon: '',
    order: 0
  });

  // Fetch services
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/services/');
      if (!response.ok) throw new Error('Failed to fetch services');
      const data = await response.json();
      // Handle both array and paginated responses
      const servicesList = data.results || data;
      setServices(Array.isArray(servicesList) ? servicesList : []);
      setLoading(false);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Clear any previous errors
    
    try {
      const formDataObj = new FormData();
      
      // Add each field to FormData
      formDataObj.append('title', formData.title);
      formDataObj.append('description', formData.description);
      if (formData.image) {
        formDataObj.append('image', formData.image);
      }
      formDataObj.append('icon', formData.icon);
      formDataObj.append('order', formData.order);

      const response = await fetch('http://localhost:8000/api/services/', {
        method: 'POST',
        body: formDataObj,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to create service');
      }
      
      // Success
      const result = await response.json();
      console.log('Service created:', result);
      
      // Reset form and refresh list
      setFormData({ 
        title: '', 
        description: '', 
        image: null, 
        icon: '', 
        order: 0 
      });
      fetchServices();
      
      // Show success message
      alert('Service created successfully!');
    } catch (err) {
      console.error('Error creating service:', err);
      setError(err.message || 'Failed to create service. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        const response = await fetch(`http://localhost:8000/api/services/${id}/`, {
          method: 'DELETE',
        });

        if (!response.ok) throw new Error('Failed to delete service');
        
        fetchServices(); // Refresh the list
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
      <h2 className="mb-4">Manage Services</h2>
      
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

      {/* Add Service Form */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">Add New Service</h5>
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
                accept="image/*"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Icon (FontAwesome class)</label>
              <input
                type="text"
                className="form-control"
                value={formData.icon}
                onChange={(e) => setFormData({...formData, icon: e.target.value})}
                placeholder="e.g., fa-code"
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
              Add Service
            </button>
          </form>
        </div>
      </div>

      {/* Services List */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">Current Services</h5>
          {services.length === 0 ? (
            <p className="text-center text-muted">No services found</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover">
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
                      <td>{service.description.substring(0, 50)}...</td>
                      <td>
                        <img 
                          src={`http://localhost:8000${service.image}`} 
                          alt={service.title}
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                          className="rounded"
                        />
                      </td>
                      <td>{service.order}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(service.id)}
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

export default ServicesManager;
