import axios from 'axios';
import * as express from 'express';

const router = express.Router();

router.get('/', (req: any, res: any) => {
    axios.get('http://quotes.rest/qod')
        .then((quote: any) => {
            
            let quotedata = quote.data.contents.quotes;
            return quotedata;
            
        })
        .then((response: any) => {
            return axios.post('http://localhost:3000/api/quote', { content: response});

        })
        .then((response: any) => {
            res.json(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

export default router;