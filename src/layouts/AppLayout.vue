<template>
    <AppHeader></AppHeader>
    <main class="main">
        <slot></slot>
    </main>
    <AuthWindow />
    <AppFooter></AppFooter>
</template>
<script>
import AppHeader from '../components/Header.vue';
import AppFooter from '../components/Footer.vue';
import AuthWindow from '@/components/AuthWindow.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
        AuthWindow,
    },
};
</script>
