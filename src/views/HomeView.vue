<template>
    <div class="container">
        <section class="container-promo">
            <section class="promo pizza">
                <h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
                <p class="promo-text">Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком</p>
            </section>
            <!-- <section class="promo kebab">
					<h1 class="promo-title">Шашлыки на майские <br> со скидкой 35%</h1>
					<p class="promo-text">
						Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD
					</p>
				</section>
				<section class="promo vegetables">
					<h1 class="promo-title">Скидка 20% на всю еду <br> по промокоду LOVE.JS</h1>
					<p class="promo-text">
						Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду
					</p>
				</section>
				<section class="promo sushi">
					<h1 class="promo-title">Сеты со скидкой до 30% <br> в ресторанах</h1>
					<p class="promo-text">
						Скидки на сеты до 30 мая по промокоду DADADA
					</p>
				</section> -->
        </section>
        <section class="restaurants">
            <div class="section-heading">
                <h2 class="section-title">Рестораны</h2>
                <label class="search">
                    <input type="text" class="input input-search" placeholder="Поиск блюд и ресторанов" />
                </label>
            </div>
            <div class="cards cards-restaurants">
                <RestaurantComponent v-for="partner in parteners" :key="partner.name" :partner="partner" />
            </div>
            <!-- /.cards -->
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import RestaurantComponent from '../components/RestaurantComponent.vue';

import api from '../api/mockApi';

const products = ref([]);
const parteners = ref([]);

onMounted(async () => {
    products.value = await api.getProducts(); // <div>
    parteners.value = await api.listParteners(); // <div>
});
</script>
