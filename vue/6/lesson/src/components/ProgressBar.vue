<template>
    <div class="progress">
        <div 
            class="progress-fill" 
            :style="{ width: progressPercent + '%' }"
        ></div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'getValidQuantity',
                'info'
            ]),
            progressPercent() {
                return (this.getValidQuantity / this.info.length) * 100;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .progress {
        margin: 20px auto 50px;
        background-color: rgb(226, 226, 226);
        width: 500px;
        height: 30px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .progress-fill {
        height: 100%;
        width: 0%;
        background-color: rgb(88, 145, 252);
        border-radius: 10px;
        transition: width 0.5s ease; 
    }
</style>