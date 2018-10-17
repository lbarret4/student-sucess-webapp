import { RequestHandler } from 'express';

import TableRouter from 'tablerouter';
import { ICareerServices, CareerServices} from '../../db';

const isAdmin: RequestHandler = (req, res, next) => {

    if(!req.user || req.user.role !== 'guest') {
        return res.sendStatus(401);
    }

    return next();
}

export default new TableRouter<ICareerServices>(CareerServices, {
    canDelete: isAdmin,
    canWrite: isAdmin,
    canRead: isAdmin
}/*empty object is where u add privileges ex: canWrite, canDelete is Admin*/).Router