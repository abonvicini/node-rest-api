import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

export const Task = mongoose.model('Task', TaskSchema);
