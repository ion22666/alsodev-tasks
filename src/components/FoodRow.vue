<template>
    <div class="food-row">
        <span class="food-name">{{ product.name }}</span>
        <strong class="food-price">{{ product.price }} ₽</strong>
        <div class="food-counter">
            <button class="counter-button">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
};
</script>
