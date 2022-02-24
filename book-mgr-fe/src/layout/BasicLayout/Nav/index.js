import {ref,defineComponent,onMounted} from 'vue';
import {useRouter,useRoute} from 'vue-router';
import menu from '../../../config/menu/index'

export default defineComponent({
    setup() {
        const router = useRouter();
        const route = useRoute();

        const openKeys = ref(['杂项']);
        const selectedKeys = ref([]);

        onMounted(() => {
            selectedKeys.value = [route.path];
            // console.log(route);

            menu.forEach((item) => {
                (item.children || []).forEach((child) => {
                    if(child.url === route.path) {
                        openKeys.value.push(item.title)
                    }
                })
            })
        });

        const to = (url) => {
            router.push(url);
        };

        return {
            openKeys,
            selectedKeys,
            menu,
            to
        };
    }
});