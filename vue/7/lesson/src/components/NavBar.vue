<template>
    <div class="navbar">
        <router-link to="/products" class="link">Products List</router-link>
        <hr>
        <router-link to="/cart" class="link">Your Cart</router-link>
        <hr>
        <router-link to="/checkout" class="link">Order Now</router-link>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.navbar {
    width: 150px;
    height: 200px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 15px 0;

    hr {
        width: 100%;
        background-color: black;
        height: 1px;
        border: none;
    }

    .link {
        text-decoration: none;
        padding-left: 20px;
    }
}
</style>