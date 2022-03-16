/*
 * @Author: wangwei
 * @Date: 2022-03-14 16:12:34
 * @LastEditTime: 2022-03-15 10:40:33
 * @FilePath: antd.js
 */
import { Button, DatePicker } from 'ant-design-vue';
export function setupAntd(app) {
    app.use(Button).use(DatePicker);
}
