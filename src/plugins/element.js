/*
 * @Author: 吴涛
 * @Date: 2021-06-03 14:54:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-28 09:54:27
 * @Description: 按需引入elementUI
 */
import Vue from "vue";
import { Dialog } from "element-ui";
import { Loading } from "element-ui";
import { Drawer } from "element-ui";
import { Pagination } from "element-ui";
import { Table } from "element-ui";
import { Select } from "element-ui";
import { Option } from "element-ui";
import { Input } from "element-ui";
import { Checkbox } from "element-ui";
import { Button } from "element-ui";
import { MessageBox } from "element-ui";
import { Message } from "element-ui";
import { Tooltip } from "element-ui";
import { Popover } from "element-ui";
import { TimePicker } from "element-ui";
import { DatePicker } from "element-ui";
import { Image } from "element-ui";
Vue.use(Dialog);
Dialog.props.lockScroll.default = false;
Vue.use(Loading);
Vue.use(Drawer);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Button);
Vue.prototype.$message = Message;
Vue.prototype.$messagebox = MessageBox;
Vue.use(Tooltip);
Vue.use(Popover);
Vue.use(TimePicker);
Vue.use(DatePicker);
Vue.use(Image);
