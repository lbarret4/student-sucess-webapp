import pool from '../pool';

export default (userid: any, start: any, end: any) => { 
    return new Promise<IQueryGetNumCommitWeek>((resolve, reject) => {
        pool.query(`
        SELECT 
            Sum(number_commits) as NumsofCommitsaWk 
        FROM 
            Commits c 
        join 
            github g on g.id = c.github_id
        WHERE 
            g.userid = ?  
        AND 
            c._created 
        BETWEEN 
            ? 
        AND 
            ?`,
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

export interface IQueryGetNumCommitWeek{
    NumsofCommitsaWk?: number;   
}