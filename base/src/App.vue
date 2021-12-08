<template>
    <div id="base-wrapper">
        <div class="layout-header" id="base-header">

        </div>
        <div id="base-view"></div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
    components: {},
})
export default class App extends Vue {
    created() {
        localStorage.setItem('key', 'base')
    }
}
</script>

<style lang="scss">
#base-wrapper {
    @include flex-column-start-start;
    height: 100%;
    width: 100%;
    #base-view{
        flex: 1;
        >div{
            height: 100%;
            width: 100%;
        }
    }
}
</style>
