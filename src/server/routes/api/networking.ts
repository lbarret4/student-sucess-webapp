import { RequestHandler } from 'express';

import TableRouter from 'tablerouter';
import { INetworking, Networking} from '../../db';

const isAdmin: RequestHandler = (req, res, next) => {

    if(!req.user || req.user.role !== 'guest') {
        return res.sendStatus(401);
    }

    return next();
}

export default new TableRouter<INetworking>(Networking, {
    canDelete: isAdmin,
    canWrite: isAdmin,
    canRead: isAdmin
}).Router