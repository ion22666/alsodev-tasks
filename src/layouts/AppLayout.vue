<template>
    <AppHeader></AppHeader>
    <main class="main">
        <slot></slot>
    </main>
    <AuthModal />
    <CartModal />
    <AppFooter></AppFooter>
</template>
<script>
import AppHeader from '../components/Header.vue';
import AppFooter from '../components/Footer.vue';
import AuthModal from '@/components/AuthModal.vue';
import CartModal from '@/components/CartModal.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
        AuthModal,
        CartModal,
    },
};
</script>
