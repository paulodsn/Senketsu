<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'SButton'
}
</script>

<style lang="scss" scoped>
    button {
        border: 1px solid #999;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25) inset;
        padding: 2px 5px;
    }
</style>