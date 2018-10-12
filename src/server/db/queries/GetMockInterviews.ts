import pool from '../pool';

export default () => {
    return new Promise<IGetMockInterview>((resolve, reject) => {
        pool.query(`
        Select
            u.first_name, u.last_name, s.service_type, cs._created
        From career_services cs
            join services s on s.service_type = cs.service_type
            join users u on u.userid = cs.userid
            WHERE s.service_type = "Mock Interview"
            `,
            (err, results) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            });
    });
}

export interface IGetMockInterview {
    first_name?: string;
    last_name?: string;
    service_type?: number;
    _created?: Date;
};