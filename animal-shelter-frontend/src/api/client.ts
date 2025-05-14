import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5092/api', // URL вашего ASP.NET Core сервера
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;