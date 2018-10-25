import TableRouter from 'tablerouter';
import { IQOTD, QOTD } from '../../db';

export default new TableRouter<IQOTD>(QOTD).Router;