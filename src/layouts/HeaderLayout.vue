<template>
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
</template>

<script>
export default {
    name: 'HandlerLayout',
};
</script>

<style lang="less" scoped>
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
</style>
