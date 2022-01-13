import {message} from 'ant-design-vue'

export const result = (response,authShowErrorMsg = true) => {
    const {data} = response;

    if((data.code === 0) && authShowErrorMsg) {
        message.error(data.msg)
    }

    return {
        success(cb) {
            if(data.code !== 0) {  
                cb(data,response)
            };
            return this;
        },
        fail(cb) {
            if(data.code === 0) {
                cb(data,response)
            }
            return this;
        },
        finally(cb) {
            cb(data,response)
            return this;
        }       
    }
}

export const clone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

/*这里是为了补全显示的时间，会在前面添加0 */
const timestampPadStart = (str) => {
    str = String(str)

    return str.padStart(2,'0')
}


export const formatTimestamp = (ts) => {
    const date = new Date(Number(ts))
    const YYYY = date.getFullYear();
    const MM = timestampPadStart(date.getMonth()+1);
    const DD = timestampPadStart(date.getDate());
    const hh = timestampPadStart(date.getHours());
    const mm = timestampPadStart(date.getMinutes());
    const ss = timestampPadStart(date.getSeconds());
    return `${YYYY}/${MM}/${DD} ${hh}:${mm}:${ss}`
}