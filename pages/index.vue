<template>
  <v-app>
    <Navbar />
    <v-main>
      <div id="hero">
        <section id="one" height="100" class="py-12">
          <v-container class="pt-16">
            <div class="col-md-6 mx-auto text-center">
              <h1 class="display-2 font-weight-black indigo--text text--darken-4" 6rem>The Future in</h1>
              <h1 class="display-2 font-weight-black deep-orange--text text--darken-4 pt-5" 6rem>Renewable Energy</h1>
              <p class="subtitle-1 pt-4 indigo--text text--darken-4">We supply homes and business  with  renewable energy solutions that deliver financial savings and carbon reductions.</p>
              <v-btn depressed large color="indigo darken-4" class="mr-6" rounded dark to="/shop">
                  Shop
              </v-btn>
              <v-btn depressed large rounded class="" to="/contact">
                  Contact
              </v-btn>
            </div>
          </v-container>
        </section>
        <section id="two" class="py-12 text-center">
          <h1 class="indigo--text text--darken-4 mt-6">Our <span class="deep-orange--text text--darken-4">Mission</span></h1>
          <p class="col-9 col-xs-8 mx-auto">Schon Peesol Energy RC:912767 was established in 2010 in order to supply alternative energy solutions for its customers both in Nigeria and abroad. Schon Peesol Energy is a company that is active in the promotion, planning and implementation of alternative energy systems. Since its inception, the company has made its goal to be the standard setter for the alternative energy industry and to bring clean, green electricity both to the urban environment and the periphery. We operate across Nigeria and around the globe.</p>
        </section>
      </div>
      <div id="hero-2">
        <section id="three" class="py-12 text-center">
        <h1 class="indigo--text text--darken-4 mt-6">Featured <span class="deep-orange--text text--darken-4">Products</span></h1>
        <v-container>
          <v-row class="col-11 mx-auto">
            <div class="col-md-3 col-sm-6 col-xs-12" v-for="product in products" :key="product.id">
              <Product :productName="product.productName" :price="product.price" :salePrice="product.salePrice" :src="require(`../assets/${product.src}.png`)" :link="product.link" />
            </div>
          </v-row>
        </v-container>
      </section>
      <section id="four" class="py-12 text-center">
        <h1 class="indigo--text text--darken-4 mt-6">Our <span class="deep-orange--text text--darken-4">Clients</span></h1>
        <v-container>
          <v-row>
            <div class="col-md-2 col-sm-4 col-xs-sm-4">
              <img src="../assets/netflix.png" style="width:90x;">
            </div>
            <div class="col-md-2 col-sm-4 col-xs-sm-4">
              <img src="../assets/drawkit.png" style="width:90px;">
            </div>
            <div class="col-md-2 col-sm-4 col-xs-sm-4">
              <img src="../assets/cinemax.png" style="width:90px;">
            </div>
            <div class="col-md-2 col-sm-4 col-xs-sm-4">
              <img src="../assets/google.png" style="width:90px;">
            </div>
            <div class="col-md-2 col-sm-4 col-xs-sm-4">
              <img src="../assets/stripe.png" style="width:110px;">
            </div>
            <div class="col-md-2 col-sm-4 col-xs-sm-4">
              <img src="../assets/netflix.png" style="width:110px;">
            </div>
          </v-row>
        </v-container>
      </section>
      </div>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import Product from '~/components/Product'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar,
    Product,
    Footer
  },
  data () {
    return {
      products: [
        {
          productName: 'Birthday',
          price: '300',
          salePrice: '200',
          src: 'product1',
          link: '/shop/product',
          rating: '4'
        },
        {
          productName: 'Anniversary',
          price: '400',
          salePrice: '270',
          src: 'product2',
          link: '/shop/product',
          rating: '4'
        },
        {
          productName: 'Christmas',
          price: '300',
          salePrice: '210',
          src: 'product3',
          link: '/shop/product',
          rating: '4'
        },
        {
          productName: "Valetine's Day",
          price: '1300',
          salePrice: '290',
          src: 'product4',
          link: '/shop/product',
          rating: '4'
        }
      ]
    }
  }
}
</script>

<style scoped>
#hero {
  background: url('../assets/backgroundtopright.svg'), url('../assets/backgroundbottomleft.svg');
  background-position: top right, bottom left;
  background-repeat: no-repeat;
}

#hero-2 {
  background: url('../assets/background2.svg'), url('../assets/background2.svg');
  background-position: top right, bottom left;
  background-repeat: no-repeat;
}
</style>