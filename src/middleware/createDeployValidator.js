export const createDeployValidator = (req, res, next) => {
    const { deployName, tasks } = req.body;
    if (!deployName) {
        return res.status(400).json({
            message: 'Deploy name is required',
        });
    }
    if (typeof deployName !== 'string') {
        return res.status(400).json({
            message: 'Deploy name must be a string',
        });
    }
    if (deployName.length < 3) {
        return res.status(400).json({
            message: 'Deploy name must contain at least three character',
        });
    }
    if (!tasks) {
        return res.status(400).json({
            message: 'Tasks are required',
        });
    }
    if (!Array.isArray(tasks)) {
        return res.status(400).json({
            message: 'Tasks must be an array',
        });
    }
    if (tasks.length === 0) {
        return res.status(400).json({
            message: 'Tasks must contain at least one task',
        });
    }

    next();
};
