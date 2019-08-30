<template>
    <div class="text-strip">
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'TextStrip',
    props: {
        text: {
            type: String, 
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
    .text-strip {
        background-color: #990000;
        color: #ffffff;
        font-size: 1.2em;
        left: -10px;
        padding: 5px 0;
        position: relative;
        text-align: center;

        &::before{
            border-color: transparent #7c0000 #7c0000 transparent;
            border-style: solid;
            border-width: 5px;
            content: "";
            left: 0;
            position: absolute;
            top: -10px;
        }

        &::after {
            border-color: transparent transparent #7c0000 #7c0000;
            border-style: solid;
            border-width: 5px;
            content: "";
            right: 0;
            position: absolute;
            top: -10px;
        }
    }
</style>