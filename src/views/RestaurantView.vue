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
        };
    },
    async mounted() {
        this.partner = await api.getPartener(this.$route.params?.name);
    },
};
</script>
