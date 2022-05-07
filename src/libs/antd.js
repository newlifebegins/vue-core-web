/*
 * @Author: wangwei
 * @Date: 2022-03-14 16:12:34
 * @LastEditTime: 2022-05-07 16:14:14
 * @FilePath: antd.js
 */
import {
    ConfigProvider,
    Button,
    DatePicker,
    Menu,
    Layout,
    Slider,
    Avatar,
    Space,
    Dropdown,
    Row,
    Col,
    Radio,
    Divider,
    Tree,
} from 'ant-design-vue';
const components = [
    ConfigProvider,
    Button,
    DatePicker,
    Menu,
    Layout,
    Slider,
    Avatar,
    Space,
    Dropdown,
    Row,
    Col,
    Radio,
    Divider,
    Tree,
];
export function setupAntd(app) {
    components.forEach(component => {
        app.use(component);
    });
}
