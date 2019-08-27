<template>
    <div class="blockquote">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'SBlockquote'
}
</script>

<style lang="scss" scoped>
    .blockquote {
        color: #444;
        font-style: italic;

        &::before,
        &::after {
            color: #000;
            font-size: 3em;
        }

        &::before {
            content: "\201C"; 
        }

        &::after {
           content: "\201D"; 
        }
    }
</style>