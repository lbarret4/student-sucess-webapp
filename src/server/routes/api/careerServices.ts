import TableRouter from 'tablerouter';
import { ICareerServices, CareerServices} from '../../db';

export default new TableRouter<ICareerServices>(CareerServices, {}/*empty object is where u add privileges ex: canWrite, canDelete is Admin*/).Router