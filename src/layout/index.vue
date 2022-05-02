<template>
    <div :class="classObj" class="app-wrapper">
    <div v-if="app.device==='mobile'&&app.sidebar.opened" class="drawer-bg" @click="handeClick"/>
    <h1>
        <router-link to="/login">login</router-link>
    </h1>
    <div class="main-container">
        <div :class="{'fixed-header':fixedHeader}">
            {{fixedHeader}}
        </div>
        <AppMain />
    </div>
    </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import AppMain from './components/AppMain.vue'

const store =  useStore()
const app = reactive(store.state.app)
const fixedHeader = ref(store.state.settings.fixedHeader)
const classObj = computed(()=>({
    hideSidebar: !app.sidebar.opened,
    openSidebar: app.sidebar.opened,
    withoutAnimation: app.sidebar.withoutAnimation,
    mobile: app.device === 'mobile'
}))

const handeClick = () => {
    store.dispatch('/app/closeSideBar',{withoutAnimation: false})
}
</script>

<style scoped lang="scss">
    @import "@/style/mixin.scss";
    @import "@/style/variables.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.mobile.openSidebar{
        position: fixed;
        top: 0;
        }
    }
    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }

    .fixed-header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: calc(100% - #{$sideBarWidth});
        transition: width 0.28s;
    }

    .hideSidebar .fixed-header {
        width: calc(100% - 54px)
    }

    .mobile .fixed-header {
        width: 100%;
    }
</style>