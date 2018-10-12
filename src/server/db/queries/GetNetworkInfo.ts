import pool from '../pool';

export default () => {
    return new Promise<IGetNetworkInfo>((resolve, reject) => {
        pool.query(`
        Select
            net_activites
        From networking `,
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
    net_activites?: number;
};