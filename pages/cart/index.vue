<template>
  <v-app>
      <Navbar />
      <v-main>
          <v-container class="col-md-8 col-sm-12 col-xs-12 mx-auto py-12">
            <div>
                <CartItem />
                <CartItem />
                <CartItem />
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
export default {
    components: {
        Navbar,
        CartItem,
        CartTotal
    }
}
</script>

<style>

</style>