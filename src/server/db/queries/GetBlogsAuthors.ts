import pool from '../pool';

export default () => { 
    return new Promise<IQueryGetBlogsAuthorsResult>((resolve, reject) => {
        pool.query(`
        SELECT 
            u.firstname, u.lastname, b.heroku_link
        FROM 
            blogs b 
        join 
            users u on b.userid = u.userid;`, (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export interface IQueryGetBlogsAuthorsResult {
    firstname?: string;
    lastname?: string;
    heroku_link?: string;
}