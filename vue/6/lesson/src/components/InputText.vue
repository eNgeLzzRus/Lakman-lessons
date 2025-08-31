<template>
    <div class="input">
        <div class="name__valid">
            <label>{{ item.name }}</label>
            <div v-if="item.value" class="validationVisual">
                <span v-if="item.pattern.test(item.value)" class="isValid">✓</span>
                <span v-else class="isNotValid">✗</span>
            </div>
        </div>
        
        <br>
        <input 
            type="text" 
            class="name" 
            :pattern="item.pattern" 
            @input="onInput"
        >
    </div>
</template>

<script>
    export default {
        props: {
            index: Number,
            item: Object,
        },
        methods: {
            onInput(e) {
                this.$store.commit('setValue', [this.index, e.target.value])
                if (this.item.pattern.test(e.target.value)) {
                    this.$store.commit('changeQuantity', 1);
                }   else {
                    this.$store.commit('changeQuantity', -1);
                }
            },
        }
    }
</script>

<style lang="scss"> 
    input {
        width: 100%;
        margin-top: 5px;
        box-sizing: border-box;
        padding: 7px 20px;
        border-radius: 5px;
        border: 1px rgb(175, 175, 175) solid;
        outline: none;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

        &:focus {
            border: 1px gray solid;
        }
    }

    .name__valid {
        display: flex;
    }

    .validationVisual {
        margin-left: 10px;
        width: 20px;
        height: 20px;
    }

    .isValid, .isNotValid {
        border-radius: 10px;
        padding: 0 3px;
        color: white;
        font-size: 12px;
    }

    .isValid {
        background-color: green;
    }

    .isNotValid {
        background-color: red;
        border-radius: 10px;
    }
</style>