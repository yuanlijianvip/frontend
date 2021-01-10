// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import axios from 'axios';
import Vue from 'vue';
import authService from '@/services/authService';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
// eslint-disable-next-line
import vueiInfinite from 'vue-infinite-scroll';
import {
  Pagination,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Radio,
  Checkbox,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  Button,
  Table,
  TableColumn,
  DatePicker,
  Popover,
  Tooltip,
  Tabs,
  TabPane,
  Tag,
  Icon,
  Upload,
  Collapse,
  CollapseItem,
  Cascader,
  Loading,
  Message
} from 'element-ui';
import store from './store';
import 'vue-orgchart/dist/style.min.css';
import '@babel/polyfill';
import App from './App';
import router from './router';
import filter from './filter';
import './main.scss';
import './mock/mock';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Input);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Table);
Vue.use(DatePicker);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Icon);
Vue.use(Upload);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);

Vue.use(Loading.directive);
filter.init(Vue);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;


Vue.use(vueiInfinite);

Vue.config.productionTip = false;
Vue.component(CollapseTransition.name, CollapseTransition);
// Vue.prototype.$message = ElementUI.Message;
// use interceptor to add auth token to every request exception login

Vue.directive('focus', {
  bind(el, binding) {
    console.log("bind");
  },
  inserted(el) {
    console.log("instered");
    el.focus();
  }
})

axios.interceptors.request.use(config => {
  if (config.url.indexOf('/api/login') === -1) {
    const authToken = authService.getAuthToken();
    if (authToken) {
      config.headers.Authorization = authToken;
    }
  }
  return config;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // if (error.response.status === 401) {
    //   const currentUrl = router.currentRoute.fullPath;
    //   if (currentUrl.indexOf('/login') === -1) {
    //     router.push({
    //       path: '/login'
    //     });
    //   }
    // }
    return Promise.reject(error);
  }
);

window.eventBus = new Vue();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
