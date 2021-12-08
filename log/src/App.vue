<template>
    <div id="app">
        log
        <button class="change" @click="changeData">{{ number }}</button>
        <button class="change" @click="changeData">{{ number }}</button>
        <button class="change" @click="makeError">make error</button>
        <button @click="changeData1">{{ number }}</button>
        <button @click="href('/bi')">go bi</button>
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
    public number = 6;
    public testdata = '';

    created() {
        this.testdata = process.env;
        console.log(this.testdata)
    }

    href(fullRouter: string) {
        history.pushState({}, 'bi', fullRouter)
    }

    changeData() {
        this.number++
        console.log(456)
        console.timeEnd('click')
    }

    makeError() {
        // @ts-ignore
        doing()
    }

    changeData1() {
        this.number--
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
