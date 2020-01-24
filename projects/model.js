const db = require('../data/config');

const fetchProjects = () => {
    return db('projects');
};

const fetchResources = () => {
    return db('resources');
};

const fetchTasks = () => {
    return db('tasks')
        .join('projects', 'tasks.project_id', '=', 'projects.id')
        .select('projects.name', 'projects.description', 'tasks.description AS task', 'tasks.notes', 'tasks.completed');
};
// does it matter which table joins?

const addProject = project => {
    return db('projects').insert(project);
};

const addResource = (id, resource) => {
    return db('resources').insert({name: resource.name, description: resource.description, project_id: id});
};

const addTask = (id, task) => {
    return db('tasks').insert({description: task.description, notes: task.notes, completed: task.completed, project_id: id})
};

module.exports = {
    fetchProjects,
    fetchResources,
    fetchTasks,
    addProject,
    addResource,
    addTask
};