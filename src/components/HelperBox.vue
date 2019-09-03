<template>
    <div class="helper-box">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'HelperBox',
}
</script>

<style lang="scss" scoped>
    .helper-box {
        background-color: #F1EFE6;
        border: 1px solid #d3cdae;
        font-size: 0.9em;
        padding: 10px;
        position: relative;
        width: 300px;
        box-shadow: 3px 3px 3px #AAA;

        &::before {
            border-color: transparent #D3CDAE transparent transparent;
            border-style: solid;
            border-width: 14px;
            content: "";
            left: -28px;
            margin-top: -14px;
            position: absolute;
            top: 50%;
        }
    }
</style>>