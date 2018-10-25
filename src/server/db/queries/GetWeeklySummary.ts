import pool from '../pool';

export default (userid: any) => { 
    return new Promise<IQueryGetWeeklySummary>((resolve, reject) => {
        pool.query(`
        SELECT
            j.activity_content as content, j._created as date
        FROM 
            job_activities j 
		join 
            user_activities ua on ua.activityid =j.id
        join 
            users u on ua.userid = u.id
        WHERE 
            ua.userid = ?`
        ,userid, 
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