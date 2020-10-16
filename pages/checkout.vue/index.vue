<template>
  <v-app>
      <Navbar />
      <v-main>
          <v-container>
              <v-row>
                  <div class="col-md-7 col-sm-12 col-xs-12">
                      <div class="col-md-9 col-sm-11 col-xs-11 mx-auto">
                          <CheckoutForm />
                      </div>
                  </div>
                  <div class="col-md-5 col-sm-12 col-xs-12">
                      <div>
                          <CartItem />
                      </div>
                  </div>
              </v-row>
          </v-container>
      </v-main>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import CheckoutForm from '~/components/CheckoutForm'
import axios from 'axios'
export default {
    components: {
        Navbar,
        CheckoutForm
    },
    async asyncData () {
        const {data} = await axios.get(`https://schon-api.herokuapp.com/user/account/product`)
        return {
            products: data.data.products,
        }
        console.log(data.data.products)
    },
    data () {
        
    },
    computed: {
        currentProduct () {
            return this.products.find(p =>  p.id == this.$route.params.id)
        }
    },
    mounted () {

    }
}
</script>

<style>

</style>