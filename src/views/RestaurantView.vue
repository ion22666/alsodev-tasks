<template>
    <div class="container">
        <section class="menu">
            <div class="section-heading">
                <h2 class="section-title restaurant-title">{{ partner.name }}</h2>
                <div class="card-info">
                    <div class="rating">{{ partner.stars }}</div>
                    <div class="price">От {{ partner.price }} ₽</div>
                    <div class="category">{{ partner.kitchen }}</div>
                </div>
                <!-- /.card-info -->
            </div>
            <div style="display: flex; width: fit-content; align-items: center; margin: 1rem 0; gap: 1rem">
                Order by:
                <div @click="orderProducts = orderProductsMap['cheapest']" :class="orderProducts.key === 'cheapest' && 'selected'" style="opacity: 0.6; cursor: pointer; padding: 0.2rem 0.4rem; border-radius: 0.6rem; border: 0.2rem solid rgb(22, 210, 100); background-color: rgb(164, 221, 164)">
                    cheapest
                </div>
                <div @click="orderProducts = orderProductsMap['expensive']" :class="orderProducts.key === 'expensive' && 'selected'" style="opacity: 0.6; cursor: pointer; padding: 0.2rem 0.4rem; border-radius: 0.6rem; border: 0.2rem solid rgb(179, 29, 56); background-color: rgb(174, 31, 62)">
                    most expensive
                </div>
            </div>

            <div class="cards cards-menu">
                <FoodCard v-for="product in partner.products" :key="product.id" :product="product" />
            </div>
            <!-- /.cards -->
        </section>
    </div>
</template>

<script>
import api from '../api/mockApi';
import FoodCard from '../components/FoodCard.vue';

export default {
    name: 'RestaurantView',
    components: {
        FoodCard,
    },
    data() {
        return {
            partner: {
                name: '',
                time_of_delivery: 0,
                stars: 0,
                price: 0,
                kitchen: '',
                image: '',
                products: [],
            },
            orderProducts: {
                key: '',
                fc: () => null,
            },
            orderProductsMap: {
                cheapest: {
                    key: 'cheapest',
                    fc: (a, b) => a.price - b.price,
                },
                expensive: {
                    key: 'expensive',
                    fc: (a, b) => b.price - a.price,
                },
            },
        };
    },
    async mounted() {
        this.partner = await api.getPartener(this.$route.params?.name);
        if (this.partner) {
            this.orderProducts.key && this.partner.products.sort(this.orderProducts.fc);
        }
    },
    watch: {
        orderProducts(newValue) {
            newValue.key && this.partner?.products.sort(newValue.fc);
        },
    },
};
</script>

<style>
.selected {
    opacity: 1 !important;
}
</style>
