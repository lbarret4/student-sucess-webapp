import pool from '../pool';

export default () => { 
    return new Promise<IQueryGetInterviewResults>((resolve, reject) => {
        pool.query(`
        SELECT
            i.contact as Contact, i.company_name as Company, i.phone, i.address, i.interview_date, i.scheduled_int, u.first_name as FirstName, u.last_name as LastName
        FROM 
            interviews i join users u on i.userid = u.userid;`, 
            (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export interface IQueryGetInterviewResults {
    contact?: string,
    company_name?: string,
    phone?: string,
    address?: string,
    interview_date?: Date,
    scheduled_int?: Boolean,
    first_name?: string,
    last_name?: string
}