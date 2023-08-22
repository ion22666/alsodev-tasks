<template>
    <a @click="$router.push({ path: base + '/restaurant/' + props.partner.name })" class="card card-restaurant">
        <img :src="props.partner.image" alt="image" class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title">{{ props.partner.name }}</h3>
                <span class="card-tag tag">{{ props.partner.time_of_delivery }}</span>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
                <div class="rating">{{ props.partner.stars }}</div>
                <div class="price">{{ props.partner.price }} ₽</div>
                <div class="category">{{ props.partner.kitchen }}</div>
            </div>
            <!-- /.card-info -->
        </div>
        <!-- /.card-text -->
    </a>
    <!-- /.card -->
</template>

<script setup>
import { defineProps } from 'vue';
import { base } from '@/main';

const props = defineProps({
    partner: {
        type: Object,
        required: true,
    },
    data() {
        return {
            base,
        };
    },
});
</script>
