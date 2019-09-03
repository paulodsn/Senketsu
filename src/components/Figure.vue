<template>
    <figure>
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" 
            width="300"
        />
        <figcaption>
            Vue.js
            <small>
                The Progressive JavaScript Framework            
            </small>
        </figcaption>
    </figure>
</template>

<script>
export default {
    name: 'Figure',
}
</script>

<style lang="scss" scoped>
    figure {
        position: relative;

        img {
            display: block;
        }

        figcaption {
            bottom: 5px;
            margin: 0 5px;
            padding: 5px;
            position: absolute;
            width: 300px;
            background-color: rgba(0,0,0,0.5);
            color: #FFF;
        }
    }
</style>