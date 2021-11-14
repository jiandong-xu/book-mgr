//方式一
// const fn = async() => {
//     return 1
// }

//方式二
// const fn = () => {
//     return new Promise((resolve,reject) => {
//         resolve(1);
//     })
// }

fn().then((res) => {
    console.log(res);
})