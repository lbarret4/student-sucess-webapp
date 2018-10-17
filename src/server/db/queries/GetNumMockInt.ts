import pool from '../pool';

export default (userid?: any) => {
    return new Promise<IGetNumMockInt>((resolve, reject) => {
        pool.query(`
        Select
            cs.service_type
        From
	        career_services cs
        join
            users u on u.id = cs.userid
        WHERE
            cs.service_type = 4
        and 
            u.id = ?;"
            `, userid, 
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            });
    });
}

export interface IGetNumMockInt {
    service_type?: number;
};