<template>
    <header class="header">
        <a @click="$router.push({ path: '/' })" class="logo">
            <img src="img/icon/logo.svg" alt="Logo" />
        </a>
        <label class="address">
            <input type="text" class="input input-address" placeholder="Адрес доставки" />
        </label>
        <div class="buttons">
            <span class="user-name"></span>
            <button class="button button-primary button-auth" @click="$store.commit('openAuth')">
                <span class="button-auth-svg"></span>
                <span class="button-text">Войти</span>
            </button>
            <button class="button button-cart" id="cart-button">
                <span class="button-cart-svg"></span>
                <span class="button-text">Корзина</span>
            </button>
            <button class="button button-primary button-out">
                <span class="button-text">Выйти</span>
                <span class="button-out-svg"></span>
            </button>
        </div>
    </header>
</template>

<script>
import { base } from '@/main';

export default {
    name: 'AppFooter',
    data() {
        return {
            base,
        };
    },
};
</script>
