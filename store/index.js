export const state = () => ({
    products: 0,
    cart: 0
  })
  
  export const mutations = {
    increment(state) {
      state.products++
    }
  }