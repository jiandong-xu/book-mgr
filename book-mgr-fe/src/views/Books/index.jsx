import { defineComponent,ref,onMounted} from "vue";
import {book} from '../../service'
import {message,Modal,Input} from 'ant-design-vue'
import {result,formatTimestamp} from '../../helpers/utils'
import AddOne from "./AddOne/index.vue"; 
import Update from './Update/index.vue'

import { Item } from "ant-design-vue/lib/menu";

export default defineComponent ({
    components: {
        AddOne,
        Update
    },
    setup() {
        const columns = [
            {
                title:'书名',
                dataIndex:'name'
            },
            {
                title:'作者',
                dataIndex:'author'
            },
            {
                title:'价格',
                dataIndex:'price'
            },
            {
                title:'库存',
                slots: {
                    customRender:'count'
                }
            },
            {
                title:'出版日期',
                dataIndex:'publishDate',
                slots:{
                    customRender:'publishDate'
                }
            },
            {
                title:'分类',
                dataIndex:'classify'
            },
            {
                title:'操作',
                slots:{
                    customRender:'actions'
                }
            },
        ]//代表每一个列的配置项
        //代表表格的一行

        const show = ref(false);
        const showUpdateModal = ref(false);
        const list = ref([]);
        const total = ref(0);
        const curPage = ref(1);//当前页
        const keyword = ref('');//搜索框关键字
        const isSearch = ref(false)//标记当前是否在搜索状态，控制返回按钮显示
        const curEditBook = ref({});

        //获取书记列表
        const getList = async () => {
            const res = await book.list({
                page:curPage.value,
                size:10,
                keyword:keyword.value
            });
           
            // console.log(res);
            result(res).success(({data}) => {
                const {list:l,total:t} = data;
                list.value = l;
                total.value = t;
            })
        }
        
        onMounted(async () => {
            getList();
        })

        //切换页码
        const setPage = (page) => {
            curPage.value = page;
           
            getList(); 
        }

        // const setShow = (bool) => {
        //     show.value = bool
        // }

        //出发搜索
        const onSearch = () => {
            getList();
            isSearch.value = !!keyword.value;
        }

        //回到全部列表
        const backAll = () => {
            keyword.value = '';
            isSearch.value = false;
            getList();

        }
        
        //删除一本图书
        const remove = async ({text:record}) => {
            const {_id} = record;

            const res = await book.remove(_id);

            result(res) 
            .success(({msg}) => {
                message.success(msg)

                // const idx = list.value.findIndex((item) => {
                //     return Item._id === _id
                // })
                // list.value.splice(idx,1)

                getList();
            })
        }


        const updateCount = (type,record) => {
            let word = '增加';

            if(type === 'OUT_COUNT') {
                word = '减少'
            }

            Modal.confirm({
                title:`要${word}多少库存`,
                content: (
                    <div> 
                        <Input class="_book_input_count"/>
                    </div>
                ),
                onOk:async() => {
                    const el = document.querySelector('._book_input_count')
                    let num = el.value;
                   const res = await book.updateCount({
                        id:record._id,
                        num,
                        type,
                    })

                    result(res)
                    .success((data) => {
                        if(type === type) {
                            //入库操作
                            num = Math.abs(num);
                           
                        }else{
                            //出库操作
                            num = -Math.abs(num)                            
                        }

                        const one = list.value.find((item) => {
                            return item._id === record._id
                        });

                        if(one) {
                            one.count = one.count+num

                            message.success(`成功${word} ${Math.abs(num)} 本书`)
                            getList();
                        }

                    })
                }
            })
        }

        const update = ({record}) => {
            showUpdateModal.value = true;
            curEditBook.value = record;
        }

        const updateCurBook = (newDate) => {
            Object.assign(curEditBook.value,newDate)
        }

        return {
            columns,
            show,
            list, 
            formatTimestamp,
            curPage,
            total,
            getList,
            setPage,
            keyword,
            onSearch,
            backAll,
            isSearch,
            remove,
            updateCount,
            showUpdateModal,
            update,
            curEditBook,
            updateCurBook
            // setShow
        }
    }
})