import pool from '../pool';

export default (userid: any, start: any, end: any) => {
    return new Promise<IGetNumNetworkAct>((resolve, reject) => {
        pool.query(`
        Select
            count(n.user) as activitycount
        From 
            networking n
        join 
            users u on n.user = u.id
        Where
            u.id = ?
        AND
            n._created
        Between
            ? and ? 
        `
            ,[userid, start, end],
            (err, results) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            });
    });
}

export interface IGetNumNetworkAct {
    user?: any;
};