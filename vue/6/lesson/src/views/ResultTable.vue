<template>
    <div class="table">
        <table>
            <tr v-for="(item, index) in info" :key="index">
                <td>{{ info[index].name }}</td>
                <td>{{ info[index].value }}</td>
            </tr>
        </table>
        <button @click="goHome" class="send">
            Домой
        </button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'info'
        ])
    },
    methods: {
        goHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.table {
    margin-top: 20px;
}

table {
    width: 500px;
    margin: 0 auto;
    border-collapse: collapse;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden; 

    td {
        width: 50%;
        width: 500px;
        padding: 10px 15px;
        border: 1px solid #ddd;
        text-align: left;
    }
}

.send {
    width: 100px;
    height: 30px;
    border: 1px gray solid;
    background-color: rgb(46, 140, 228);
    color: white;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: rgb(32, 114, 190);
    }

}
</style>