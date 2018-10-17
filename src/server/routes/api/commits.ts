import { RequestHandler } from 'express';

import TableRouter from 'tablerouter';
import { ICommits, Commits} from '../../db';

const isAdmin: RequestHandler = (req, res, next) => {

    if(!req.user || req.user.role !== 'admin' || req.user.role !== 'guest') {
        return res.sendStatus(401);
    }

    return next();
}

export default new TableRouter<ICommits>(Commits, {
    canDelete: isAdmin,
    canWrite: isAdmin,
    canRead: isAdmin
}).Router