<!--
 * @Author: wangwei
 * @Date: 2022-03-14 15:29:21
 * @LastEditTime: 2022-05-10 15:25:39
 * @FilePath: App.vue
-->
<template>
    <a-config-provider :locale="locale">
        <a-layout>
            <sider-layout />
            <a-layout>
                <header-layout />
                <a-layout-content>
                    <router-view />
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-config-provider>
</template>

<script>
import HeaderLayout from '@/layouts/HeaderLayout.vue';
import SiderLayout from '@/layouts/SiderLayout.vue';
import { ref } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh_CN');
export default {
    name: 'App',
    components: {
        HeaderLayout,
        SiderLayout,
    },
    setup() {
        const locale = ref(zhCN);
        return {
            locale,
        };
    },
};
</script>
<style lang="less" scoped>
.ant-layout {
    width: 100vw;
    height: 100vh;

    .ant-layout-content {
        margin: 16px;
        padding: 24px;
        background: #fff;
        min-height: 280px;
    }
}
</style>
