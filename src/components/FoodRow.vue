<template>
    <div class="food-row">
        <span class="food-name">{{ item.product.name }}</span>
        <strong class="food-price">{{ item.product.price }} ₽</strong>
        <div class="food-counter">
            <button class="counter-button" @click="$store.commit('addProductToCart', { product: item.product, count: -1 })">-</button>
            <span class="counter">{{ item.quantity }}</span>
            <button class="counter-button" @click="$store.commit('addProductToCart', { product: item.product, count: 1 })">+</button>
            <button class="counter-button" @click="$store.commit('removeItemToCart', item.product)" style="color: red; border-color: red; margin: 0.1rem">&times;</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
};
</script>
