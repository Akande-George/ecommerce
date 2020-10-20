<template>
  <v-app>
      <Navbar />
      <v-main>
          <v-container class="col-md-8 col-sm-12 col-xs-12 mx-auto py-12">
            <div v-for="product in products" :key="product.id">
                <CartItem :src="product.imageURL" :name="product.name" :description="product.description" :price="product.price" />
            </div>
            <CartTotal />
          </v-container>
      </v-main>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import CartItem from '~/components/CartItem'
import CartTotal from '~/components/CartTotal'
import axios from 'axios'
export default {
    components: {
        Navbar,
        CartItem,
        CartTotal
    },
    data () {
        return {
            carts: []
        }
    },
    async asyncData () {
        const {data} = await axios.get(`https://schon-api.herokuapp.com/user/account/product`)
        return {
            products: data.data.products
        }
    },
}
</script>

<style>

</style>