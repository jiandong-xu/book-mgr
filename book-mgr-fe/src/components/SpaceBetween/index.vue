<template>
    <div class="space-between">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .space-between {
        display: flex;
        justify-content: space-between;
    }
</style>