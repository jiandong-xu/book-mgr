import {defineComponent,reactive} from 'vue';
import {user} from '../../../service'
import {message} from 'ant-design-vue'
import {result,clone} from '../../../helpers/utils/index'

const defaultFormData = {
    account:'',
    password:Number,
}

export default defineComponent({
    props:{
        show:Boolean
    },
    setup(props,context) {
        const addForm = reactive(clone(defaultFormData))

        const close = () => {
            context.emit('update:show',false)
        }

        const submit = async () => {
            const form = clone(addForm);//深拷贝

            const res = await user.add(form.account,form.password);

            result(res).success((d,{data}) => {
                // console.log('111');
                Object.assign(addForm,defaultFormData);//提交后用初始化对象覆盖原提交表单
                message.success(data.msg);
                close();
                context.emit('getList')
            })
        }

        

        return {
            addForm,
            submit,
            props,
            close
        }
    }
})