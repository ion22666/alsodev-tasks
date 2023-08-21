<template>
    <AppHeader></AppHeader>
    <main class="main">
        <router-view> </router-view>
    </main>
    <AppFooter></AppFooter>
</template>
<script>
import AppHeader from '../components/Header.vue';
import AppFooter from '../components/Footer.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
    },
};
</script>
