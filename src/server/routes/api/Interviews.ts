import { RequestHandler } from 'express';

import TableRouter from 'tablerouter';
import { IInterviews, Interviews } from '../../db';

export default new TableRouter<IInterviews>(Interviews, {}).Router