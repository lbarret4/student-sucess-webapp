import { RequestHandler } from 'express';

import TableRouter from 'tablerouter';
import { IApplications, Applications} from '../../db';

const isAdmin: RequestHandler = (req, res, next) => {

    if(!req.user || req.user.role !== 'guest') {
        return res.sendStatus(401);
    }

    return next();
}

export default new TableRouter<IApplications>(Applications, {
    canDelete: isAdmin,
    canWrite: isAdmin,
    canRead: isAdmin
}).Router