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
export default {
    components: {
        Navbar,
        CheckoutForm
    }
}
</script>

<style>

</style>