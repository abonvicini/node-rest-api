import { Router } from 'express';
import {
    getDeploys,
    createDeploy,
    deleteDeploy,
    deleteAllDeploys,
} from '../controllers/deployController.js';
import { createDeployValidator } from '../middleware/createDeployValidator.js';

export const DeployRouter = () => {
    const router = Router();
    router
        .get('/', getDeploys)
        .post('/', createDeployValidator, createDeploy)
        .delete('/deleteDeploy/:id', deleteDeploy)
        .delete('/deleteAllDeploys', deleteAllDeploys);
    return router;
};
