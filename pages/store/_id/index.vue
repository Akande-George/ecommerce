<template>
  <v-app>
      <Navbar />
      <v-main>
          <section id="one" class="pt-12">
              <v-container>
                  <v-row class="col-md-10 col-sm-12 col-xs-12 mx-auto">
                      <div class="col-md-6 col-sm-12 col-xs-12 pt-16">
                          <img :src="currentProduct.imageURL" style="width:100%;" alt="">
                      </div>
                      <div class="col-md-6 col-sm-12 col-xs-12 pl-8">
                          <h1 class="display-3 font-weight-bold deep-orange--text text--darken-4">{{ currentProduct.name }}</h1>
                          <!-- <h2 class="display-2 deep-orange--text text--darken-4">By <span class="font-weight-medium black--text">Tolucyrpto</span></h2> -->
                          <v-card
                                class="mx-auto"
                                depressed
                                flat
                            >
                                <v-card-title class="font-weight-medium display-2">
                                ${{ currentProduct.price }}
                                </v-card-title>

                                <v-card-text>
                                {{currentProduct.description}}
                                </v-card-text>

                                <v-divider class="mx-4"></v-divider>

                                <v-card-text>
                                <span class="subheading">Select size</span>

                                <v-chip-group
                                    v-model="selection"
                                    active-class="deep-orange--text text--darken-4"
                                    mandatory
                                >
                                    <v-chip
                                    v-for="size in sizes"
                                    :key="size"
                                    :value="size"
                                    >
                                    {{ size }}
                                    </v-chip>
                                </v-chip-group>
                                <span class="subheading mt-3">Tags</span>
                                <v-chip-group>
                                    <v-chip
                                    v-for="tag in tags"
                                    :key="tag.index"
                                    :value="tag"
                                    >
                                    {{ tag }}
                                    </v-chip>
                                </v-chip-group>
                                </v-card-text>

                                <v-card-actions>
                                <v-list-item>
                                    <v-btn
                                    block
                                    class="white--text"
                                    color="deep-orange darken-4"
                                >
                                    Add to Cart
                                </v-btn>
                                </v-list-item>
                                </v-card-actions>
                                <v-card-actions>
                                    <v-list-item>
                                    <v-btn
                                    block
                                    class="black--text"
                                >
                                    Checkout
                                </v-btn>
                                </v-list-item>
                                </v-card-actions>
                            </v-card>
                          <!-- <v-row class="mt-8">
                                <div class="col-2 deep-orange mx-3" id="box"></div>
                                <div class="col-2 indigo darken-4 mx-3" id="box"></div>
                                <div class="col-2 yellow mx-3" id="box"></div>
                                <div class="col-2 brown mx-3" id="box"></div>
                            </v-row> -->
                      </div>
                  </v-row>
              </v-container>
          </section>
          <v-divider></v-divider>
          <section id="two" class="py-10">
              <v-container>
                  <v-row class="col-md-9 col-sm-11 col-xs-11 mx-auto">
                      <div class="col-md-7 col-sm-12 col-xs-12 pa-8 indigo lighten-5">
                          <h1 class="title font-weight-bold">Description</h1>
                          <v-divider class="mr-13"></v-divider>
                          <p>{{ currentProduct.description }}</p>
                      </div>
                      <div class="col-md-5 col-sm-12 col-xs-12">
                          <h1 class="title font-weight-bold">Reviews</h1>
                          <v-divider class="mr-13"></v-divider>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ullam? Et tempore rerum ea fugit provident perspiciatis quo, mollitia quasi quaerat</p>
                      </div>
                  </v-row>
              </v-container>
          </section>
          <Footer />
      </v-main>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import Product from '~/components/Product'
import Footer from '~/components/Footer'
import axios from 'axios'
export default {
    components: {
        Navbar,
        Footer,
        Product
    },
    async asyncData () {
        const {data} = await axios.get(`https://schon-api.herokuapp.com/user/account/product`)
        return {
            products: data.data.products,
        }
        console.log(data.data.products)
    },
    data () {
        return {
            selection: '08',
            sizes: [
                '04', '06', '08', '10', '12', '14',
            ],
            tags: [
                'electronics', 'gadgets', 'fashion',
            ],
        }
    },
    computed: {
        currentProduct () {
            return this.products.find(p =>  p.id == this.$route.params.id)
        }
    },
}
</script>

<style scoped>
#box {
      width: 50px;
      height: 50px;
    }
</style>