<template>
    <div @click.self="$store.commit('closeCart')" class="modal modal-cart" :style="{ display: isCartModalOpen ? 'flex' : 'none' }">
        <div class="modal-dialog">
            <div class="modal-header">
                <h3 class="modal-title">Корзина</h3>
                <button class="close" @click="$store.commit('closeCart')">&times;</button>
            </div>
            <!-- /.modal-header -->
            <div class="modal-body">
                <FoodRow v-for="item in items" :key="item.product.id" :item="item" />
            </div>
            <!-- /.modal-body -->
            <div class="modal-footer">
                <span class="modal-pricetag">{{ cartTotalPrice }} ₽</span>
                <div class="footer-buttons">
                    <button
                        class="button button-primary"
                        @click="
                            () => {
                                $router.push('/thank-for-ordering');
                                $store.commit('closeCart');
                            }
                        "
                    >
                        Оформить заказ
                    </button>
                    <button class="button clear-cart" @click="$store.commit('closeCart')">Отмена</button>
                </div>
            </div>
            <!-- /.modal-footer -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script>
import { computed } from 'vue';
import { getStore } from '../store';

import FoodRow from '../components/FoodRow.vue';

export default {
    components: {
        FoodRow,
    },
    setup() {
        const store = getStore();
        return {
            isCartModalOpen: computed(() => store.state.isCartModalOpen),
            cartTotalPrice: computed(() => store.getters.cartTotalPrice),
            items: computed(() => store.state.cart.items),
        };
    },
};
</script>
