import axios from 'axios'
import jwtDecode from 'jwt-decode'

// instantiate axios
const apiService = axios.create()

const baseUrl = 'http://localhost:3001';

apiService.getToken = function () {
  return localStorage.getItem('token')
}

apiService.setToken = function (token) {
  localStorage.setItem('token', token)
  return token
}

apiService.getCurrentUser = function () {
  const token = this.getToken()
  console.log(token)
  if (token) return jwtDecode(token)
  return null
}

apiService.login = function (credentials) {
  return this({ method: 'post', url: baseUrl + '/api/users/login', data: credentials })
    .then((serverResponse) => {
      const token = serverResponse.data.token
      if (token) {
        // sets token as an included header for all subsequent api requests
        this.defaults.headers.common.token = this.setToken(token)
        return jwtDecode(token)
      } else {
        return false
      }
    })
}

// logIn and register functions could be combined into one since the only difference is the url we're sending a request to..
apiService.register = function (userInfo) {
  return this({ method: 'post', url: baseUrl + '/api/users/register', data: userInfo })
    .then((serverResponse) => {
      const token = serverResponse.data.token
      if (token) {
        // sets token as an included header for all subsequent api requests
        this.defaults.headers.common.token = this.setToken(token)
        return jwtDecode(token)
      } else {
        return false
      }
    })
}

apiService.getUsers = function (users) {
  return this({ method: 'get', url: baseUrl + '/api/users', data: users })
    .then((serverResponse) => {
      console.log(serverResponse.data);
      users = serverResponse.data;
    })
}

// apiService.getUsers

apiService.logout = function () {
  localStorage.removeItem('token')
  delete this.defaults.headers.common.token
  return true
}

apiService.defaults.headers.common.token = apiService.getToken()

export default apiService;