export default {
    namespaced: true,
    state: {
        items: [
            {
                url: '/products',
                text: 'Products List'
            },
            {
                url: '/cart',
                text: 'Your Cart'
            },
            {
                url: '/checkout',
                text: 'с'
            },
        ]
    },
    getters: {
        item(state) {
            return state.items;
        }
    } 
}