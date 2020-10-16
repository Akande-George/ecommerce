<template>
  <v-app>
      <Navbar />
      <v-main>
          <div class="pa-10 indigo lighten-4">
              <h1 class="display-2">Store</h1>
          </div>
          <ShopBar />
          <v-container>
              <v-row class="col-11 mx-auto">
                <div class="col-md-4 col-sm-6 col-xs-12" v-for="product in products" :key="product.id">
                <Product :productName="product.name" :price="product.price" :salePrice="product.price" :src="product.imageURL" :description="product.description" :link="`/store/${product.id}`"/>
                </div>
            </v-row>
          </v-container>
          <Footer />
      </v-main>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import ShopBar from '~/components/ShopBar'
import Product from '~/components/Product'
import Footer from '~/components/Footer'
import axios from 'axios'

export default {
    components: {
        Navbar,
        Product
    },
    async asyncData () {
        const {data} = await axios.get(`https://schon-api.herokuapp.com/user/account/product`)
        return {
            products: data.data.products
        }
        console.log(data.data.products)
    },
    data () {
        return {
            
        }
    }
}
</script>

<style>

</style>