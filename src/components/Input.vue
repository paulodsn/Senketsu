<template>
    <div>
        <label for="">Label</label>
        <input type="text">
    </div>
</template>

<script>
export default {
    name: 'SInput',
}
</script>

<style lang="scss" scoped>
    input:focus {
        border-color: #35861B;
        box-shadow: 0 0 5px #35861B, 2px 2px 2px rgba(0,0,0,0.25) inset;
        outline: none;
    }
</style>