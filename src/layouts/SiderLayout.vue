<template>
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo">wangwei</div>
        <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" theme="light">
            <template v-for="item in menus">
                <template v-if="!item.children">
                    <a-menu-item :key="item.name">
                        <router-link :to="{ name: item.name }">
                            <user-outlined />
                            <span>{{ item.meta.title }}</span>
                        </router-link>
                    </a-menu-item>
                </template>
                <template v-else>
                    <sub-menu :key="item.key" :menu-info="item" />
                </template>
            </template>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import { ref, defineComponent } from 'vue';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    MailOutlined,
} from '@ant-design/icons-vue';
import SubMenu from '@/layouts/SubMenu';
import { routes } from '@/router';

export default defineComponent({
    name: 'SiderLayout',
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        MailOutlined,
        PieChartOutlined,
        'sub-menu': SubMenu,
    },
    computed: {
        /*eslint-disable */
        // defaultOpenKeys: {
        //     get: function () {
        //         let matched = this.$route.matched;
        //         console.log(matched);
        //         // return [matched[matched.length - 2].name];
        //         this.openKeys = [matched[matched.length - 2].name];
        //         // return this.openKeys;
        //     },
        //     set: function (newVal) {
        //         // console.log(newVal);
        //         this.openKeys = [newVal[1]];
        //     },
        // },
        /*eslint-enable */
        // defaultSelectedKeys() {
        //     const matched = this.$route.matched;
        //     return [matched[matched.length - 1].name];
        // },
    },
    setup() {
        const collapsed = ref(false);
        return {
            collapsed,
            selectedKeys: ref(['print']),
            openKeys: ref(['tree']),
            menus: routes,
        };
    },
});
</script>

<style lang="less" scoped>
.ant-layout-sider {
    background: #fff;
    .logo {
        width: 100%;
        height: 64px;
        font-size: 22px;
        color: #000;
        line-height: 64px;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
    /deep/ .ant-layout-sider-trigger {
        background: #fff;
        color: #000;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
    }
}
</style>
