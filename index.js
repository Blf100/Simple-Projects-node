// Importando o express
const { request, response } = require("express");
const express = require("express");

// Importando api
const api = require("./api")

// Criando o servidor
const server = express();

// Designando a porta do server
server.listen(3333);

// Middleware para usar json
server.use(express.json());

// Rota Get: pokemon
server.get("/pokemon/:id", async (request, response) => {
  
  const { id } = request.params;
  
  try {
    const { data } = await api.get(`/pokemon/${id}`);

      return response.send({name: data.name});

  } catch (error) {
      response.send({error: error.message});
  }
});