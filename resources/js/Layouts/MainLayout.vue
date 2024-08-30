<template>
  <!--
  <Link href="/">Main</Link>&nbsp;
  <Link href="/hello">Show</Link>&nbsp;
  -->
  <Link :href="route('listing.index')">Listing</Link>&nbsp;
  <Link :href="route('listing.create')">Create</Link>
  <hr />
  <div v-if="flashSuccess" class="success">
    {{ flashSuccess }}
  </div>
  

  <!-- <div>The page with time {{ timer }}</div> -->
  <slot>Default</slot> <!-- The content of any components that uses this (MainLayout) components will appear here! -->
</template>

<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
//import {ref} from 'vue'
//const timer = ref(0)
//setInterval(()=> timer.value++, 1000)

const page = usePage()
const flashSuccess = computed(
    () => page.props.flash.success,
)
</script>

<style scoped>
  .success {
    background-color: rgb(86, 238, 86);
    color: white;
  }
</style>