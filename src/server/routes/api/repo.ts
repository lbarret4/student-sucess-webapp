import * as express from 'express';

import { getUserCommitNum } from '../../utils/github';

const router = express.Router();

router.get('/:username', async (req, res, next) => {
    
    const username = req.params.username;
    
    try {
        let  github = await getUserCommitNum(username);
        res.json(await github);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
    
});

export default router;