import pool from '../pool';

export default (userid?: any) => { 
    return new Promise<IQueryGetCommitNum>((resolve, reject) => {
        pool.query(`
        SELECT
            c.number_commits, c.hash
        FROM 
            Commits c 
        join 
            github g on g.id = c.github_id
        WHERE 
            g.userid = ?`
        , userid, 
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
    number_commits?: number;
    hash?: string;
}