import * as mysql from 'mysql';
import Table from 'tablecrud';

import pool from './pool';
import GetBlogsAuthors from './queries/GetBlogsAuthors';
import GetCommitNum from './queries/GetCommitNum';
import GetInterviewResults from './queries/GetInterviewResults';

export const Queries = {
    GetBlogsAuthors,
    GetCommitNum,
    GetInterviewResults    
}

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
}

export const Users = new Table<IUser>(pool, 'users', {
    userid: mysql.Types.INT24,
    first_name: mysql.Types.VARCHAR,
    last_name: mysql.Types.VARCHAR,
    email: mysql.Types.VARCHAR,
    password: mysql.Types.VARCHAR,
    user_role: mysql.Types.VARCHAR,
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
    user_role: string;
    dob?: string;
    city?: string;
    state?: string;
    __created?: Date;
}

export const AccessTokens = new Table<IAccessToken>(pool, 'accesstokens', {
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
}

export const Interviews = new Table<IInterviews>(pool, 'interviews', {
    id: mysql.Types.INT24,
    userid: mysql.Types.INT24,
    contact: mysql.Types.VARCHAR,
    company_name: mysql.Types.VARCHAR,
    phone: mysql.Types.VARCHAR,
    address: mysql.Types.VARCHAR,
    interview_date: mysql.Types.DATETIME,
    scheduled_int: mysql.Types.TINY,
    _created: mysql.Types.DATETIME
});

export interface IInterviews {
    id?: number;
    userid?: number;
    contact?: string;
    company_name?: string;
    phone?: string;
    address?: string;
    interview_date?: Date;
    scheduled_int?: Boolean;
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

export interface IGithub {
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