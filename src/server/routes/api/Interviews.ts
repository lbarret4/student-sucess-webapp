import { RequestHandler } from 'express';

import TableRouter from 'tablerouter';
import { IInterviews, Interviews } from '../../db';

const isAdmin: RequestHandler = (req, res, next) => {

    if(!req.user || req.user.role !== 'guest') {
        return res.sendStatus(401);
    }

    return next();
}

export default new TableRouter<IInterviews>(Interviews, {
    canDelete: isAdmin,
    canWrite: isAdmin,
    canRead: isAdmin
}).Router