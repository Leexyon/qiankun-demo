<template>
    <div class="menu">
        <button>
            <router-link to="/log">
                log App
            </router-link>
        </button>
        <button>
            <router-link to="/log/about">
                log App /about
            </router-link>
        </button>
        <button>
            <router-link to="/bi">
                bi App
            </router-link>
        </button>
        <button>
            <router-link to="/bi/about">
                bi App /about
            </router-link>
        </button>
        <button>
            <router-link to="/dolphin">
                dolpin App /dolpin
            </router-link>
        </button>
    </div>


</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Route} from "vue-router";

@Component({
    components: {},
    watch: {
        $route: 'routeListen'
    }
})
export default class App extends Vue {

    public testdata = '';

    created() {
    }

    mounted() {
        this.testdata = process.env;
        console.log(this.testdata)
        this.eventListen()
    }

    routeListen(n:  Route,l: Route) {
        // 路由权限监控
        console.log('路由权限拦截', this.$route)
        if (n.path === '/bi') {
            alert('没有权限登录bi系统')
            window.history.pushState('', '', l.fullPath)
        }
    }

    listenHandler(e: Event) {
        console.log(123)
        console.log('全局click事件监控,当前event', e)
        console.log('全局click事件监控,当前的路由', this.$route.path)
        // css 选择器 原则 找到唯一
        // 是否需要限制
        // 限制方案
        if (false) {
            e.stopPropagation()
        }
    }

    eventListen() {
        window.addEventListener('click', this.listenHandler, true);
        //    true是在捕获阶段   addEventlistern 是从 window 最高 也就最快执行     false 是冒泡
    }


    beforeDestroy() {
        /*
        * *
        *     移除全局监听click*
        * *
        */
        window.addEventListener('click', this.listenHandler, true);
    }

}
</script>

<style lang="scss">
.menu {
    width: 100%;
    background: #a5a5a5;
    height: auto;
    @include flex-row-around-center;
    padding: 1rem;
    button{
        border-radius: 0;
        border: 0;
    }
}
</style>
