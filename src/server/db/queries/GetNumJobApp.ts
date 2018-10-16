import pool from '../pool';

export default (userid?: any) => { 
    return new Promise<IQueryGetCommitNum>((resolve, reject) => {
        pool.query(`
        Select
            count(a.company_info)
        From
	        applications a
        join
            users u on u.userid = a.userid
        join
            employer_info ei on a.company_info = ei.id
        WHERE
            u.userid = ?`, 
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

export interface IQueryGetCommitNum {
    company_info?: number;
}