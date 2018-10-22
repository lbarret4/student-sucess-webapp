import pool from '../pool';

export default (userid: any, start: any, end: any) => { 
    return new Promise<IQueryGetWeeklySummary>((resolve, reject) => {
        pool.query(`
        SELECT
            j.activity_content, j._created
        FROM 
            job_activities j 
		join 
            user_activities ua on ua.activityid =j.id
        join 
            users u on ua.userid = u.id
        WHERE 
            ua.userid = ?`
        , [userid, start, end], 
            (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export interface IQueryGetWeeklySummary {
    activity_content?: string;
    _created?: Date
}