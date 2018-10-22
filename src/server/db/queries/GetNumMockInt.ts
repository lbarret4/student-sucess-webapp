import pool from '../pool';

export default (userid: any, start: any, end: any) => {
    return new Promise<IGetNumMockInt>((resolve, reject) => {
        pool.query(`
        Select
            count(cs.service_type) as NumMockInt
        From
	        career_services cs
        join
            users u on u.id = cs.userid
        WHERE
            cs.service_type = 4
        and 
            u.id = ?
            `, [userid, start, end], 
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
    start?: any;
    end?: any;
};