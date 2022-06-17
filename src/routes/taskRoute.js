import { Router } from 'express';
import {
    createTask,
    getTasks,
    deleteTask,
    updateTask,
    getTaskById,
} from '../controllers/taskController.js';

export const TaskRouter = () => {
    const router = Router();
    router
        .get('/', getTasks)
        .post('/', createTask)
        .delete('/deleteTask/:id', deleteTask)
        .post('/updateTask/:id', updateTask)
        .get('/getTaskById/:id', getTaskById);
    return router;
};
