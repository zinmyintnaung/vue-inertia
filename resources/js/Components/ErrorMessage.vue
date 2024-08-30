<template>
  <div v-if="props.error" class="input-error">
    {{ props.error }}
  </div>
</template>

<script setup>
const props = defineProps({
    error: String,
})
</script>
