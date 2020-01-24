const express = require('express');
const Project = require('./model');

const app = express.Router();

// fetch projects
app.get('/', (request, response) => {
    Project.fetchProjects()
        .then(res => response.status(200).json(res))
        .catch(err => {
            console.log(err);
            response.status(500).json({message: 'error fetching projects'});
        });
});
// if something is passed in the body will it still come through?

// fetch resources
app.get('/resources', (request, response) => {
    Project.fetchResources()
        .then(res => response.status(200).json(res))
        .catch(err => {
            console.log(err);
            response.status(500).json({message: 'error fetching resource'});
        });
});

// fetch tasks
app.get('/tasks', (request, response) => {
    Project.fetchTasks()
        .then(res => response.status(200).json(res))
        .catch(err => {
            console.log(err);
            response.status(500).json({message: 'error fetching tasks'});
        });
});

// add project
app.post('/', (request, response) => {
    Project.addProject(request.body)
        .then(res => response.status(200).json(res))
        .catch(err => {
            console.log(err);
            response.status(500).json({message: 'error adding project'});
        });
});
// returning?

// add resource
app.post('/:id/resources', (request, response) => {
    Project.addResource(request.params.id, request.body)
        .then(res => response.status(200).json(res))
        .catch(err => {
            console.log(err);
            response.status(500).json({message: 'error adding resource'});
        });
});

// add task
app.post('/:id/tasks', (request, response) => {
    Project.addTask(request.params.id, request.body)
        .then(res => response.status(200).json(res))
        .catch(err => {
            console.log(err);
            response.status(500).json({message: 'error adding task'});
        });
});
// ???

module.exports = app;