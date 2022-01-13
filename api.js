// Importando o Axios
const axios = require("axios");

// Estanciando o axios create
const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
});

// Exportando a api
module.exports = api;