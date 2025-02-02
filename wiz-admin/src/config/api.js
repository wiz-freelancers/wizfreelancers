const API_BASE_URL = 'http://localhost:8000/api';

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/token/`,
  SERVICES: `${API_BASE_URL}/services/`,
  TEAM: `${API_BASE_URL}/team/`,
  REFRESH_TOKEN: `${API_BASE_URL}/token/refresh/`,
};

export default API_BASE_URL; 