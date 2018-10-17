import { RequestHandler } from 'express';

import TableRouter from 'tablerouter';
import { IUserActivities, UserActivities, IUser} from '../../db';

const isAdmin: RequestHandler = (req, res, next) => {

    if(!req.user || req.user.role !== 'admin' || req.user.role !== 'guest') {
        return res.sendStatus(401);
    }

    return next();
}

export default new TableRouter<IUserActivities>(UserActivities, {
    canDelete: isAdmin,
    canWrite: isAdmin,
    canRead: isAdmin
}).Router