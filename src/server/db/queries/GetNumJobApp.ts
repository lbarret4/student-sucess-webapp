import pool from '../pool';

export default () => { 
    return new Promise<IQueryGetCommitNum>((resolve, reject) => {
        pool.query(`
        SELECT
            a.company_info, a.date_submitted
        FROM 
            applications a join employer_info ei on a.company_info = ei.id`, 
            (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export interface IQueryGetCommitNum {
    company_info?: number;
    date_submitted?: Date;
}