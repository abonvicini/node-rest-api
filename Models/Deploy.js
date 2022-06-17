import mongoose from 'mongoose';
import { Task } from './Task.js';

const TaskSchema = new Task().schema;

const DeploySchema = mongoose.Schema({
    deployName: {
        type: String,
        required: true,
    },
    tasks: {
        type: [TaskSchema],
        required: true,
    },
});

export const Deploy = mongoose.model('Deploy', DeploySchema);
