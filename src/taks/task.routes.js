'use strict'

const express = require('express'); //importar express
const api = express.Router(); //Crear una instancia del enrutador de express
const { addTask, getTasks } = require('./task.controller');

api.post('/add', addTask);//post: el usuario envía datos mediante la solicitud (Body)
api.get('/get', getTasks);

module.exports = api;