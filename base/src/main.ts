import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {registerMicroApps} from "qiankun";
const qiankunConfig = require('../qiankun.config.js')

registerMicroApps(qiankunConfig.macroApps);


Vue.config.productionTip = false;

export function createApp() {
    const app = new Vue({
        router,
        store,
        render: (h) => h(App),
    }).$mount(`#${qiankunConfig.APP_ROOT_EL_NAME}`);
    return {
        router,
        store,
        app,
    };

}

