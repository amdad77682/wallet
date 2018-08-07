import axios from "axios";

var instance = axios.create({
  validateStatus: function(status) {
    return status >= 200 && status < 399;
  }
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
