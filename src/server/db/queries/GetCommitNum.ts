import pool from '../pool';

export default () => { 
    return new Promise<IQueryGetCommitNum>((resolve, reject) => {
        pool.query(`
        SELECT
            g.id, g.github_link, c.number_commits, c.check_date
        FROM 
            github g join commits c on g.userid = c.github_id;`, 
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
    id: number;
    github_link: string;
    number_commits: number;
    check_date: Date;
}