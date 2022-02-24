import axios from 'axios';
import { del,get,post } from '../../helpers/request';
import {getToken} from '../../helpers/token';

axios.defaults.headers['Authorization'] = `Bearer ${getToken()}`;

export const add = (name,price,author,publishDate,classify,count) => {
    return post('/book/add',{
        name,price,author,publishDate,classify,count
     })
}

export const list = (data) => {
    return get(
        '/book/list',
        data
    )
}

export const remove = (id) => {
    return del(
        `/book/${id}`,
    )
}

export const updateCount = (data={}) => {
    return post(
        `/book/update/count`,
        data
    )
}

export const update = (data={}) => {
    return post(
        `/book/update`,
        data
    )
}

export const detail = (id) => {
    return get(
        `/book/detail/${id}`,
    );
}

export const addMany = (key) => {
    return post(
        '/book/addMany',{
            key
        }
    );
}

// export const login = (account,password) => {
//     return axios.post('http://localhost:3000/auth/login',{
//         account,
//         password
//     })
// }