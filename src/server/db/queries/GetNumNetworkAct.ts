import pool from '../pool';

export default (userid?: any) => {
    return new Promise<IGetNumNetworkAct>((resolve, reject) => {
        pool.query(`
        Select
            n.net_activities, n.contact, n.company_name
        From 
            networking n
        join 
            users u on n.user = u.id
        Where
            u.id = ? `,
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

export interface IGetNumNetworkAct {
    net_activites?: string;
    contat?: string;
    company_name?: string;
};