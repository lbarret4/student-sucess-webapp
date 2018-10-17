import * as express from 'express';
import { Queries } from '../../db';

const router = express.Router();

router.get('/commitnumber', async (req, res, next) => {

    try {
        res.json(await Queries.GetCommitNum());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/interviewresults', async (req, res, next) => {
    try {
        res.json(await Queries.GetInterviewResults());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/numberintweek', async (req, res, next) => {
    try {
        res.json(await Queries.GetNumIntWeek(req.params.userid, req.params.start, req.params.end));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/numberjobapps', async (req, res, next) => {
    try {
        res.json(await Queries.GetNumJobApp());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/numbermockint', async (req, res, next) => {
    try {
        res.json(await Queries.GetNumMockInt());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/numbernetact', async (req, res, next) => {
    try {
        res.json(await Queries.GetNumNetworkAct());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;