import {defineComponent,reactive} from 'vue';
import {book} from '../../../service'
import {message} from 'ant-design-vue'
import {result,clone} from '../../../helpers/utils/index'

const defaultFormData = {
    name:'',
    price:0,
    author:'',
    publishDate:0,
    classify:'',
    count:0
}

export default defineComponent({
    props:{
        show:Boolean
    },
    setup(props,context) {
        const addForm = reactive(clone(defaultFormData))

        const submit = async () => {
            // console.log(addForm);
            const form = clone(addForm);//深拷贝
            // console.log(form);
            form.publishDate = addForm.publishDate.valueOf();//转化时间戳
            const res = await book.add(form.name,form.price,form.author,form.publishDate,form.classify,form.count)
            console.log(form.name,form.price,form.author,form.publishDate,form.classify);
            result(res).success((d,{data}) => {
                // console.log('111');
                Object.assign(addForm,defaultFormData)//提交后用初始化对象覆盖原提交表单
                message.success(data.msg)
            })
        }

        const close = () => {
            context.emit('update:show',false)
        }

        return {
            addForm,
            submit,
            props,
            close
        }
    }
})