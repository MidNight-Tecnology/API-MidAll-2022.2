const axios = require('axios');

const crud = axios.create({
  baseURL: "http://localhost:4512",
});

module.exports = {
  crud: crud,
}