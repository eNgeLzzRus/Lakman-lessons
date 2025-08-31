<template>
    <div>
        <h2>Lesson 6</h2>
        <div v-if="name !== null">
            <h4>Hello {{ info[0].value }}</h4>
        </div>
        <hr>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'info'
            ])
        }
    }
</script>