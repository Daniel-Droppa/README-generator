const axios = require("axios")

const api = {
  getUser: function(username) {
    return axios.get(`https://api.github.com/users/${username}`)
    
  }
};

module.exports = api;
