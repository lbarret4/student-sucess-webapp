import * as mysql from 'mysql';
import Table from 'tablecrud';

import pool from './pool';
import GetBlogsAuthors from './queries/GetBlogsAuthors';
import GetCommitNum from './queries/GetCommitNum';
import GetInterviewResults from './queries/GetInterviewResults';
import GetNetworkInfo from './queries/GetNetworkInfo';
import GetMockInterviews from './queries/GetMockInterviews';
import GetNumJobApp from './queries/GetNumJobApp';
import GetNumIntWeek from './queries/GetNumIntWeek';

export const Queries = {
    GetBlogsAuthors,
    GetCommitNum,
    GetInterviewResults,
    GetNetworkInfo,
    GetMockInterviews,
    GetNumJobApp,
    GetNumIntWeek,
};

export const Blogs = new Table<IBlog>(pool, 'blogs', {
    id: mysql.Types.INT24,
    userid: mysql.Types.INT24,
    heroku_link: mysql.Types.VARCHAR,
    __created: mysql.Types.DATETIME
});

export interface IBlog {
    id?: number;
    userid?: number;
    heroku_link?: string;
    __created: Date;
};

export const Users = new Table<IUser>(pool, 'users', {
    userid: mysql.Types.INT24,
    first_name: mysql.Types.VARCHAR,
    last_name: mysql.Types.VARCHAR,
    email: mysql.Types.VARCHAR,
    password: mysql.Types.VARCHAR,
    user_role: mysql.Types.VARCHAR,
    img: mysql.Types.BLOB,
    program_id: mysql.Types.INT24,
    dob: mysql.Types.VARCHAR,
    city: mysql.Types.VARCHAR,
    state: mysql.Types.VARCHAR,
    __created: mysql.Types.DATETIME
});

export interface IUser {
    userid?: number;
    email?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
    user_role?: string;
    img?: Blob;
    program_id?: number;
    dob?: string;
    city?: string;
    state?: string;
    __created?: Date;
};

export const AccessTokens = new Table<IAccessToken>(pool, 'tokens', {
    id: mysql.Types.INT24,
    userid: mysql.Types.INT24,
    token: mysql.Types.VARCHAR,
    expires: mysql.Types.DATETIME,
    __created: mysql.Types.DATETIME
});

export interface IAccessToken {
    id?: number;
    userid?: number;
    token?: string;
    expires?: Date;
    __created?: Date;
};

export const Interviews = new Table<IInterviews>(pool, 'interviews', {
    id: mysql.Types.INT24,
    userid: mysql.Types.INT24,
    interview_date: mysql.Types.DATETIME,
    employer_id: mysql.Types.INT24,
    int_attachments: mysql.Types.VARCHAR,
    challenge_rcvd: mysql.Types.DATETIME,
    challenge_due: mysql.Types.DATETIME,
    _created: mysql.Types.DATETIME
});

export interface IInterviews {
    id?: number;
    userid?: number;
    interview_date?: Date;
    employer_id?: number;
    int_attachments?: string;
    challenge_rcvd?: Date;
    challenge_due?: Date;
    _created?: Date;
};

export const Github = new Table<IGithub>(pool, 'github', {
    id: mysql.Types.INT24,
    userid: mysql.Types.VARCHAR,
    github_link: mysql.Types.VARCHAR,
    _created: mysql.Types.DATETIME
});

export interface IGithub {
    id?: number;
    userid?: number;
    github_link?: string;
    _created?: Date;
};

export const Services = new Table<IServices>(pool, 'services', {
    id: mysql.Types.INT24,
    service_type: mysql.Types.VARCHAR
});

export interface IServices {
    id?: number;
    service_type?: string;
};

export const CareerServices = new Table<ICareerServices>(pool, 'career_services', {
    id: mysql.Types.INT24,
    userid: mysql.Types.INT24,
    service_type: mysql.Types.INT24,
    _created: mysql.Types.DATETIME
});

export interface ICareerServices {
    id?: number;
    userid?: number;
    service_type?: number;
    _created?: Date;
};

export const Commits = new Table<ICommits>(pool, 'Commits', {
    id: mysql.Types.INT24,
    number_commits: mysql.Types.INT24,
    github_id: mysql.Types.INT24,
    hash: mysql.Types.VARCHAR,
    _created: mysql.Types.DATETIME
});

export interface ICommits {
    id?: number;
    number_commits?: number;
    github_id?: number;
    hash?: string;
    _created?: Date;
};

export const Applications = new Table<IApplications>(pool, 'applications', {
    id: mysql.Types.INT24,
    userid: mysql.Types.INT24,
    company_info: mysql.Types.INT24,
    date_submitted: mysql.Types.DATETIME
   
});

export interface IApplications {
    id?: number;
    userid?: number;
    company_info?: number;
    date_submitted?: Date;
    
};

export const EmployerInfo = new Table<IEmployerInfo>(pool, 'employer_info', {
    id: mysql.Types.INT24,
    contact: mysql.Types.VARCHAR,
    company_name: mysql.Types.VARCHAR,
    phone: mysql.Types.VARCHAR,
    address: mysql.Types.VARCHAR,
    address2: mysql.Types.VARCHAR,
    city: mysql.Types.VARCHAR,
    state: mysql.Types.VARCHAR,
    zip: mysql.Types.VARCHAR,
    _created: mysql.Types.DATETIME,
});

export interface IEmployerInfo {
    id?: number;
    contact?: string;
    company_name?: string;
    phone?: string;
    address?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    _created?: Date;
};

export const JobActivities = new Table<IJobActivities>(pool, 'job_activities', {
    id: mysql.Types.INT24,
    activity_content: mysql.Types.BLOB,
    _created: mysql.Types.DATETIME,
});

export interface IJobActivities {
    id?: number;
    activity_content?: string;
    _created?: Date;
};

export const Networking = new Table<INetworking>(pool, 'networking', {
    id: mysql.Types.INT24,
    user: mysql.Types.INT24,
    network_date: mysql.Types.DATETIME,
    contact: mysql.Types.VARCHAR,
    company_name: mysql.Types.VARCHAR,
    attachment: mysql.Types.VARCHAR,
    net_ativities: mysql.Types.LONGLONG,
    _created: mysql.Types.DATETIME,
});

export interface INetworking {
    id?: number;
    user?: number;
    network_date?: Date;
    contact?: string;
    company_name?: string;
    attachment?: string;
    net_ativities?: string;
    _created?: Date;
};

export const Program = new Table<IProgram>(pool, 'program', {
    id: mysql.Types.INT24,
    program_type: mysql.Types.VARCHAR
});

export interface IProgram {
    id?: number;
    program_type?: string;
};

export const UserActivities = new Table<IUserActivities>(pool, 'user_activities', {
    userid: mysql.Types.INT24,
    activityid: mysql.Types.INT24
});

export interface IUserActivities {
    userid?: number;
    activityid?: number;
};