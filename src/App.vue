<!--
 * @Author: wangwei
 * @Date: 2022-03-14 15:29:21
 * @LastEditTime: 2022-05-07 16:30:03
 * @FilePath: App.vue
-->
<template>
    <a-config-provider :locale="locale">
        <a-layout>
            <a-layout-sider v-model:collapsed="collapsed" collapsible>
                <div class="logo">wangwei</div>
                <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
                    <a-menu-item key="1" @click="$router.push('/tree')">
                        <user-outlined />
                        <span>tree</span>
                    </a-menu-item>
                    <a-menu-item key="2" @click="$router.push('/print')">
                        <video-camera-outlined />
                        <span>print</span>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <upload-outlined />
                        <span>nav 3</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header>
                    <a-dropdown placement="bottomRight">
                        <a-space>
                            <a-avatar :size="32">
                                <template #icon><UserOutlined /></template>
                            </a-avatar>
                            <span class="user">wangwei</span>
                        </a-space>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <span>个人中心</span>
                                </a-menu-item>
                                <a-menu-item>
                                    <span>个人设置</span>
                                </a-menu-item>
                                <a-menu-item>
                                    <span>退出登录</span>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </a-layout-header>
                <a-layout-content>
                    <router-view />
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-config-provider>
</template>

<script>
// import Print from './components/Print.vue';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh_CN');
export default {
    name: 'App',
    components: {
        // Print,
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    },
    setup() {
        const locale = ref(zhCN);
        return {
            locale,
            selectedKeys: ref([]),
            collapsed: ref(false),
        };
    },
};
</script>
<style lang="less" scoped>
.ant-layout {
    width: 100vw;
    height: 100vh;
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
    .ant-layout-header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background: #fff;
        padding: 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 0 20px;
        .user {
            font-size: 14px;
            color: #999;
        }
    }
    .ant-layout-content {
        margin: 16px;
        padding: 24px;
        background: #fff;
        min-height: 280px;
    }
}
</style>
