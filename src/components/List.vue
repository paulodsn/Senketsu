<template>
  <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Quatro</li>
  </ul>
</template>

<script>
export default {
    name: 'List',
}
</script>

<style lang="scss" scoped>
    ul {
        height: 35px;
        list-style: none;
        padding: 0;
        width: 210px;
        background-color: #CCC;
        color: #FFF;
        border: 1px solid rgba(0, 0, 0, 0.3);
    }

    li {
        float: left;
        line-height: 35px;
        font-size: 0.9em;
        width: 50px;
        text-align: center;
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        border-right: 1px solid rgba(0, 0, 0, 0.3);

        &:first-child {
            border-left: none;
        }

        &:last-child {
            border-right: none;
        }
    }
</style>>