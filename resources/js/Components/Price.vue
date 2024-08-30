<template>
  <span>{{ formattedPrice }}</span>
</template>
  
<script setup>
import {computed} from 'vue'
const props = defineProps({
    price: {
        type: [Number, String],
        default: 0,
        required: true,
    },
    locale: {
        type: String,
        default: 'en-US',
        required: false,
    },
    currency: {
        type: String,
        default: 'USD',
        required: false,
    },
})
const formattedPrice = computed(
    () => Number(props.price).toLocaleString(props.locale, {
        style: 'currency',
        currency: props.currency,
        maximumFractionDigits: 2,
    }),
)
</script>