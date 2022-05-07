<!--
 * @Author: wangwei
 * @Date: 2022-04-10 23:35:29
 * @LastEditTime: 2022-05-07 16:18:23
 * @FilePath: Tree.vue
-->
<template>
    <a-row type="flex" justify="space-between" align="middle">
        <a-col :span="20">
            <a-radio-group :size="size" @change="onCheckedBtnGroupChange" v-model="allChecked" buttonStyle="solid">
                <a-radio-button value="2">局部选中</a-radio-button>
                <a-radio-button value="1">全选</a-radio-button>
                <a-radio-button value="0">全不选</a-radio-button>
            </a-radio-group>
            <a-divider type="vertical" />
            <a-radio-group :size="size" @change="onExpandedBtnGroupChange" v-model="allExpanded" buttonStyle="solid">
                <a-radio-button value="2">局部展开</a-radio-button>
                <a-radio-button value="1">展开所有</a-radio-button>
                <a-radio-button value="0">折叠所有</a-radio-button>
            </a-radio-group>
        </a-col>

        <a-col>
            <a-button type="primary" :size="size" href="javascript:;" @click="callBackData">
                <span>提交改动</span>
            </a-button>
        </a-col>
    </a-row>
    <a-tree
        :expandedKeys="innerExpandedKeys"
        :treeData="treeData"
        checkable
        :checkedKeys="innerCheckedKeys"
        @expand="onExpand"
        @check="onCheck"
    />
</template>
<script>
export default {
    props: {
        size: {
            // 控件规格
            type: String,
            default: 'small',
        },
        checkedKeys: {
            // 传递选中的key
            type: Array,
            default: function () {
                return [];
            },
        },
        expandedKeys: {
            // 传递需要展开的key
            type: Array,
            default: function () {
                return [];
            },
        },
        treeData: {
            type: Array,
            default: function () {
                return [
                    {
                        title: '0-0',
                        key: '0-0',
                        children: [
                            {
                                title: '0-0-0',
                                key: '0-0-0',
                                children: [
                                    { title: '0-0-0-0', key: '0-0-0-0' },
                                    { title: '0-0-0-1', key: '0-0-0-1' },
                                    { title: '0-0-0-2', key: '0-0-0-2' },
                                ],
                            },
                            {
                                title: '0-0-1',
                                key: '0-0-1',
                                children: [
                                    { title: '0-0-1-0', key: '0-0-1-0' },
                                    { title: '0-0-1-1', key: '0-0-1-1' },
                                    { title: '0-0-1-2', key: '0-0-1-2' },
                                ],
                            },
                            {
                                title: '0-0-2',
                                key: '0-0-2',
                            },
                        ],
                    },
                    {
                        title: '0-1',
                        key: '0-1',
                        children: [
                            { title: '0-1-0-0', key: '0-1-0-0' },
                            { title: '0-1-0-1', key: '0-1-0-1' },
                            { title: '0-1-0-2', key: '0-1-0-2' },
                        ],
                    },
                    {
                        title: '0-2',
                        key: '0-2',
                    },
                ];
            },
        },
    },
    data() {
        return {
            allChecked: '', // 全选按钮组
            allExpanded: '', // 全部展开按钮组
            innerCheckedKeys: [], // 选中的值
            innerExpandedKeys: [], //  展开的值
        };
    },

    computed: {
        switchDataSource() {
            // 勾选数据源
            return [
                {
                    type: 'ALL_CHECKED',
                    labelText: this.isAllChecked ? '全不选' : '全选',
                    checked: this.isAllChecked,
                },
                {
                    type: 'ALL_EXPAND',
                    labelText: this.isAllExpanded ? '折叠所有' : '展开所有',
                    checked: this.isAllExpanded,
                },
            ];
        },
        cacheEmitValue() {
            // 缓存响应的值
            return {
                checkedKeys: this.innerCheckedKeys,
                expandedKeys: this.innerExpandedKeys,
            };
        },
        getTreeAllKey() {
            // 获取树的所有key
            return this.getTreeKey(this.treeData);
        },
        getTreeAllGroupKey() {
            // 获取树的所有组key
            return this.getTreeKey(this.treeData, true);
        },
        isAllChecked() {
            // 是否全部勾选
            return this.innerCheckedKeys.length === this.getTreeAllKey.length;
        },
        isAllExpanded() {
            // 是否全部展开
            return this.innerExpandedKeys.length === this.getTreeAllGroupKey.length;
        },
    },

    methods: {
        onExpandedBtnGroupChange({ target: { value: expanedBtnGroupValue } }) {
            console.log('expanedBtnGroupValue: ', expanedBtnGroupValue);
            switch (expanedBtnGroupValue) {
                case '0':
                    this.innerExpandedKeys = [];
                    break;
                case '1':
                    this.innerExpandedKeys = this.getTreeAllGroupKey;
                    break;
                default:
                    this.innerExpandedKeys = ['0-0'];
                    break;
            }
        },
        onCheckedBtnGroupChange({ target: { value: checkedBtnGroupValue } }) {
            console.log('checkedBtnGroupValue: ', checkedBtnGroupValue);
            switch (checkedBtnGroupValue) {
                case '0':
                    this.innerCheckedKeys = [];
                    break;
                case '1':
                    this.innerCheckedKeys = this.getTreeAllKey;
                    break;
                default:
                    this.innerCheckedKeys = ['0-0'];
                    break;
            }
        },
        callBackData(emit) {
            // 响应改动的值
            if (emit) {
                this.$emit('change', this.cacheEmitValue);
            }
            return false;
        },
        onExpand(expandedKeys) {
            if (expandedKeys.length === this.getTreeAllGroupKey.length) {
                this.allExpanded = '1';
            } else {
                this.allExpanded = '2';
            }
            this.innerExpandedKeys = expandedKeys;
        },
        onCheck(checkedKeys) {
            if (checkedKeys.length === this.getTreeAllKey.length) {
                this.allChecked = '1';
            } else {
                this.allChecked = '2';
            }
            this.innerCheckedKeys = checkedKeys;
        },
        getTreeKey(arr, parent = false) {
            const dataList = [];
            const generateList = data => {
                for (let i = 0; i < data.length; i++) {
                    const { key, title, children } = data[i];
                    if (!parent) dataList.push({ key, title });
                    if (Array.isArray(children) && children.length > 0) {
                        if (parent) dataList.push({ key, title });
                        generateList(children);
                    }
                }
            };
            generateList(arr);
            return dataList.map(item => item.key);
        },
    },
};
</script>
