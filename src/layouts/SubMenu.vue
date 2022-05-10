<template>
    <a-sub-menu :key="menuInfo.name">
        <template #icon><MailOutlined /></template>
        <template #title>{{ menuInfo.meta.title }}</template>
        <template v-for="item in menuInfo.children">
            <template v-if="!item.children">
                <a-menu-item :key="item.name">
                    <router-link :to="{ name: item.name }">
                        <user-outlined />
                        <span>{{ item.meta.title }}</span>
                    </router-link>
                </a-menu-item>
            </template>
            <template v-else>
                <sub-menu :menu-info="item" :key="item.name" />
            </template>
        </template>
    </a-sub-menu>
</template>

<script>
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    MailOutlined,
} from '@ant-design/icons-vue';
export default {
    name: 'SubMenu',
    props: {
        menuInfo: {
            type: Object,
            default: () => ({}),
        },
    },
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        MailOutlined,
        PieChartOutlined,
    },
};
</script>

<style></style>
