import pool from '../pool';

export default (userid?: any) => { 
    return new Promise<IQueryGetInterviewResults>((resolve, reject) => {
        pool.query(`
        SELECT
            i.employer_id, i.interview_date
        FROM 
            interviews i 
        join 
            users u on i.userid = u.userid
        WHERE 
            i.userid = ?`,
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
    employer_id?: number;
    interview_date?: Date;
}