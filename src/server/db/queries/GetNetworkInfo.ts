import pool from '../pool';

export default (userid?: any) => {
    return new Promise<IGetNetworkInfo>((resolve, reject) => {
        pool.query(`
        Select
            n.net_activities, n.contact, n.company_name
        From 
            networking n
        join 
            users u on n.user = u.userid
        Where
            u.userid = ? `,
            userid,
            (err, results) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            });
    });
}

export interface IGetNetworkInfo {
    net_activites?: Blob;
    contat?: string;
    company_name?: string;
};