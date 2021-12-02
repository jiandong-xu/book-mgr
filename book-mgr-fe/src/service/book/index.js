import axios from 'axios'

export const add = (name,price,author,publishDate,classify) => {
    return axios.post('http://localhost:3000/book/add',{
        name,price,author,publishDate,classify
     })
}

export const list = () => {
    return axios.get(
        'http://localhost:3000/book/list'
    )
}

// export const login = (account,password) => {
//     return axios.post('http://localhost:3000/auth/login',{
//         account,
//         password
//     })
// }