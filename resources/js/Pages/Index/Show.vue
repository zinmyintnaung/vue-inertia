<template>
    This is a show page
    <p>I pass the value {{ message }}</p>
</template>

<script setup>
    defineProps({
        message: String
    })
</script>