import axios from 'axios'

export const add = (name,price,author,publishDate,classify,count) => {
    return axios.post('http://localhost:3000/book/add',{
        name,price,author,publishDate,classify,count
     })
}

export const list = (data) => {
    return axios.get(
        'http://localhost:3000/book/list',
        {
            params:data,
        }
    )
}

export const remove = (id) => {
    return axios.delete(
        `http://localhost:3000/book/${id}`,
    )
}

export const updateCount = (data={}) => {
    return axios.post(
        `http://localhost:3000/book/update/count`,
        data
    )
}

export const update = (data={}) => {
    return axios.post(
        `http://localhost:3000/book/update`,
        data
    )
}

export const detail = (id) => {
    return axios.get(
        `http://localhost:3000/book/detail/${id}`,
    );
}

// export const login = (account,password) => {
//     return axios.post('http://localhost:3000/auth/login',{
//         account,
//         password
//     })
// }