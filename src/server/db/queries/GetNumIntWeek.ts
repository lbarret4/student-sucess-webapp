import pool from '../pool';

export default (userid: any, start: any, end: any) => { 
    return new Promise<IQueryGetInterviewResults>((resolve, reject) => {
        pool.query(`
        SELECT
            count(i.userid) as NumberOfInterviews
        FROM 
            interviews i 
        join 
            users u on i.userid = u.id
        WHERE 
            i.userid = ?
        and 
            i._created 
        BETWEEN 
            "?" and "?"`,
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

export interface IQueryGetInterviewResults {
    NumberOfInterviews?: number;
}