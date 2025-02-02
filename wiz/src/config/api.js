const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://wiz-freelancers-backend.onrender.com/api'
  : 'http://localhost:8000/api';

export default API_BASE_URL; 