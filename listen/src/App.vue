<template>
    <div id="app">
        <button>
            <router-link to="/log">
                log
            </router-link>
        </button>
        <button>
            <router-link to="/log/about">
                log/about
            </router-link>
        </button>
        <button>
            <router-link to="/bi">
                bi
            </router-link>
        </button>
        <button>
            <router-link to="/bi/about">
                bi/about
            </router-link>
        </button>

    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
    components: {},
    watch: {
        $route: 'routeListen'
    }
})
export default class App extends Vue {

    public testdata = '';

    created() {
        this.testdata = process.env;
        console.log(this.testdata)
    }

    routeListen(){
        console.log(this.$route)
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background: $themeColor;
}
</style>
