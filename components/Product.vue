<template>
  <v-card :loading="loading" class="px-3 mx-auto">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img height="250" :src="src"></v-img>
    <v-spacer></v-spacer>
    <h2 class="mt-3" style="width:100%;"><v-btn style="width:100%;" class="subtile1" :to="link" depressed>{{ productName }}</v-btn></h2>
    <small class="mx-4 px-3 text-center">{{ description }}</small>
    <v-spacer></v-spacer>
    <div class="text-center">
      <span class="title deep-orange--text text--darken-4 text-decoration-line-through">$ <span>{{ price}}</span></span>
      <span class="title indigo--text text--darken-4">$ <span>{{ salePrice }}</span></span>
    </div>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating class="col-8 mx-auto" :value="rating" color="amber" dense half-increments readonly size="24"></v-rating>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text text-center" column>
        <v-spacer></v-spacer>
        <v-btn class="indigo darken-4 white--text" >Add to Cart</v-btn>
        <v-spacer></v-spacer>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
import store from '~/store'
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),
    props: ['productName', 'price', 'salePrice', 'src', 'rating', 'description', 'link'],

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
    created () {
        async products => {
        const {data} = await axios.get(`https://schon-api.herokuapp.com/user/account/product`)
        this.$store.state.products = data.data.products
      }
    }
  }
</script>