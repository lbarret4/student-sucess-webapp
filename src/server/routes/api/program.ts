import { RequestHandler } from 'express';

import TableRouter from 'tablerouter';
import { IProgram, Program} from '../../db';

const isAdmin: RequestHandler = (req, res, next) => {

        if(!req.user || req.user.role !== 'guest') {
            return res.sendStatus(401);
        }
    
        return next();
    }
    
    export default new TableRouter<IProgram>(Program, {
        canDelete: isAdmin,
        canWrite: isAdmin,
        canRead: isAdmin
}).Router