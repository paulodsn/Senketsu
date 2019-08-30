<template>
    <div>
        <span class="cloud"></span>
    </div>
</template>

<script>
export default {
    name: 'Cloud'
}
</script>

<style lang="scss" scoped>
    div {
        background-color: #000;
        width: 50px;
        height: 10px;
        padding: 20px 50px;

        .cloud {
            background-color: #fff;
            border-radius: 48px;
            display: inline-block;
            height: 16px;
            position: relative;
            width: 48px;

            &::before,
            &::after {
                background-color: #fff;
                border-radius: 50%;
                content: '';
                height: 14px;
                position: absolute;
                right: 7px;
                top: -6px;
                width: 14px;
            }

            &::after {
                background: #fff;
                height: 23px;
                left: 7px;
                right: auto;
                top: -10px;
                width: 23px;
            }
        }
    }
</style>