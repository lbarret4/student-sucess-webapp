import pool from '../pool';

export default (userid?: any) => { 
    return new Promise<IQueryGetNumJobApp>((resolve, reject) => {
        pool.query(`
        Select
            count(a.userid)
        From
	        applications a
        WHERE
            a.userid = ?`, 
            userid,
            (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export interface IQueryGetNumJobApp {
    userid?: number;
}