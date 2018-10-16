import pool from '../pool';

export default (userid?: any) => { 
    return new Promise<IQueryGetInterviewResults>((resolve, reject) => {
        pool.query(`
        SELECT
            count(i.userid)
        FROM 
            interviews i 
        join 
            users u on i.userid = u.userid
        WHERE 
            i.userid = ?
        and 
            i._created 
        BETWEEN 
            "?" and "?"`,
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

export interface IQueryGetInterviewResults {
    userid?: number;
}