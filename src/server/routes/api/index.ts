import * as express from 'express';
import * as passport from 'passport';

import usersRouter from './users';
import blogsRouter from './blogs';
import queriesRouter from './queries';
import CareerServicesRouter from './careerservices';
import InterviewsRouter from './Interviews';
import ApplicationsRouter from './applications';
import CommitsRouter from './commits';
import EmployerInfoRouter from './employerInfo';
import GithubRouter from './github';
import JobActivitiesRouter from './jobActivities';
import NetworkingRouter from './networking';
import ProgramRouter from './program';
import ServicesRouter from './services';
import UserActivitiesRouter from './userActivities';

const router = express.Router();

//Passport bearer authentication comes before any other api routes
//Calling from inside another request handler in order to continue even on auth failure
//We send back failures from within each router, but authenticate will populate the user on the request, etc.
router.use((req, res, next) => { 
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if(user) req.user = user;
        return next();
    })(req, res, next);
});

router.use('/users', usersRouter);
router.use('/blogs', blogsRouter);
router.use('/q', queriesRouter);
router.use('/interviews', InterviewsRouter);
router.use('/careerservices' , CareerServicesRouter);
router.use('/applications', ApplicationsRouter);
router.use('/commits', CommitsRouter);
router.use('/employerinfo', EmployerInfoRouter);
router.use('/github', GithubRouter);
router.use('/jobactivities', JobActivitiesRouter);
router.use('/networking', NetworkingRouter);
router.use('/program', ProgramRouter);
router.use('/services', ServicesRouter);
router.use('/useractivites', UserActivitiesRouter);

export default router;