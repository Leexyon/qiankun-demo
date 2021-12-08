<template>
    <div id="app">
        bi
        <router-link to="/about">/about</router-link>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
    components: {},
})
export default class App extends Vue {

    public testdata = '';

    created() {
        this.testdata = process.env;
        console.log(this.testdata)
        this.init()
        localStorage.setItem('key', 'bi')
        console.log('bi------------------', localStorage.getItem('key'))
    }

    init() {
        fetch('/api/log')
            .then(response => response.json())
            .then(data => console.log(data));
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
    background: $themeColor;
}
</style>
