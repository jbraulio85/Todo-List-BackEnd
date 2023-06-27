'use strict'

const express = require('express'); //importar express
const api = express.Router(); //Crear una instancia del enrutador de express
const { addTask, getTasks, deleteTask, updateTask } = require('./task.controller');

api.post('/add', addTask);//post: el usuario envía datos mediante la solicitud (Body)
api.get('/get', getTasks);
api.post('/update', updateTask);
api.delete('/delete', deleteTask);

module.exports = api;