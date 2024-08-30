<template>
  <!--Note: this component must only have one div tag so that we can pass non-prop attributes such as styling class to it-->
  <div>
    <span class="font-bold">{{ listing.beds }}</span> bds <span class="text-gray-400">| </span>  
    <span class="font-bold">{{ listing.baths }}</span> ba <span
      class="text-gray-400"
    >| </span>
    <span class="font-bold">{{ listing.area }}</span> m²
  </div>
</template>
  
<script setup>
defineProps({
    listing: Object,
})
</script>