export const state = () => ({
    cart: []
  })
  
  export const mutations = {
    add(state, product) {
      state.cart.push({
        product,
      })
    },
    remove(state, { product }) {
      state.product.splice(state.product.indexOf(product), 1)
    },
    addCart(state, product) {
        state.cart.push({
          product
        })
      }
  }