import { Deploy } from '../../Models/Deploy.js';

export const createDeploy = async (req, res) => {
    const deploy = new Deploy({
        deployName: req.body.deployName,
        tasks: req.body.tasks,
    });

    try {
        const savedDeploy = await deploy.save();
        res.json(savedDeploy);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

export const getDeploys = async (req, res) => {
    try {
        const deploys = await Deploy.find();
        res.json(deploys);
    } catch (err) {
        res.status(400).send(err);
    }
};

export const deleteDeploy = async (req, res) => {
    try {
        const deletedDeploy = await Deploy.findByIdAndDelete(req.params.id);
        res.json(deletedDeploy);
    } catch (err) {
        res.status(400).send(err);
    }
};

export const deleteAllDeploys = async (req, res) => {
    try {
        const deletedDeploys = await Deploy.deleteMany();
        res.json(deletedDeploys);
    } catch (err) {
        res.status(400).send(err);
    }
};
