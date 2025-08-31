<template>
    <div class="header">
        <div>
            <h2>Lesson 7</h2>
            <h4 v-show="inCart">In Cart: {{ inCart }}</h4>
        </div>
        <hr>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('cart', { 
            inCart: 'cnt'
        }),
    }  
}

</script>

<style lang="scss" scoped>
.header {
    padding: 0;
    margin: 0;
    position: fixed;
    width: 100%;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 100px;
    }
}
</style>