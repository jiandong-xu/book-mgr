const request = (arg,isReject) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(isReject) {
                reject('出错了')
                return;
            }
            console.log(arg);
            resolve(arg+1)
        },300)
    })
}

const fn =  async() => {
    const res1 = await request(10)
    const res2 = await request(res1)
    const res3 = await request(res2)
    const res4 = await request(res3)
    const res5 = await request(res4)
    const res6 = await request(res5)
    console.log(res6);
}
fn()
// request(1)
// .then((res1) => {
//     return request(res1,true)
// })
// // .catch((msg) => {
// //     console.log(msg);
// //     return Promise.resolve()
// // })
// .then((res2) => {
//     return request(res2)
// })
// .then((res3) => {
//     return request(res3)
// })
// .then((res4) => {
//     return request(res4)
// })
// .then((res5) => {
//     return request(res5)
// })