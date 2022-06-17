import { Task } from '../../Models/Task.js';

export const createTask = async (req, res) => {
    const task = new Task({
        taskName: req.body.taskName,
        owner: req.body.owner,
        description: req.body.description,
        status: req.body.status,
    });

    try {
        const savedTasks = await task.save();
        res.json(savedTasks);
    } catch (err) {
        res.status(400).send(err);
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(400).send(err);
    }
};

export const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        res.json(deletedTask);
    } catch (err) {
        res.status(400).send(err);
    }
};

export const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
        );
        res.json(updatedTask);
    } catch (err) {
        res.status(400).send(err);
    }
};

export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (err) {
        res.status(400).send(err);
    }
};
