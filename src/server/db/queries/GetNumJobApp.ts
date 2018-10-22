import pool from '../pool';

export default (userid: any, start: any, end: any) => { 
    return new Promise<IQueryGetNumJobApp>((resolve, reject) => {
        pool.query(`
        Select
            count(a.userid) as count
        From
	        applications a
        WHERE
            a.userid = ?
        and
            a.date_submitted
        Between
            ? and ?`, 
            [userid, start, end],
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
    start?: any;
    end?: any;
}