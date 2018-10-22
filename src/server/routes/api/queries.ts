import * as express from 'express';
import { Queries } from '../../db';

const router = express.Router();

router.get('/commitnumber/:id/:start/:end', async (req, res, next) => {

    try {
        res.json(await Queries.GetCommitNum(req.params.id, req.params.start, req.params.end));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/interviewresults/:id/:start/:end', async (req, res, next) => {
    try {
        res.json(await Queries.GetInterviewResults(req.params.id, req.params.start, req.params.end));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get(`/numberintweek/:id/:start/:end`, async (req, res, next) => {
    try {
        res.json(await Queries.GetNumIntWeek(req.params.id, req.params.start, req.params.end));
        console.log(req.params.start);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/numberjobapps/:id/:start/:end', async (req, res, next) => {
    try {
        res.json(await Queries.GetNumJobApp(req.params.id, req.params.start, req.params.end));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/numbermockint/:id/:start/:end', async (req, res, next) => {
    try {
        res.json(await Queries.GetNumMockInt(req.params.id, req.params.start, req.params.end));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/numbernetact/:id/:start/:end', async (req, res, next) => {
    try {
        res.json(await Queries.GetNumNetworkAct(req.params.id, req.params.start, req.params.end));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;