<template>
  <Link href="/">
    Main
  </Link>&nbsp;
  <Link href="/hello">
    Show
  </Link>
     
  <div>The page with time {{ timer }}</div>
  <slot>Default</slot> <!-- The content of any components that uses this (MainLayout) components will appear here! -->
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import {ref} from 'vue'
const timer = ref(0)
setInterval(()=> timer.value++, 1000)
</script>