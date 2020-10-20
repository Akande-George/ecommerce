<template>
  <div>
      <div id="item">
          <v-card flat>
              <v-row>
                  <div class="col-2">
                      <img :src="src" width="100%" class="rounded" alt="">
                  </div>
                  <div class="col-3">
                      <p class="title">{{ name }}</p>
                      <p>{{ description }}</p>
                  </div>
                  <div class="col">
                      <v-card-actions class="pt-7">
                          <v-btn
                        class="mx-2"
                        fab
                        dark
                        small
                        color="deep-orange darken-4"
                        >
                        <v-icon dark>
                            mdi-minus
                        </v-icon>
                        </v-btn>
                        <p><v-card flat outlined class="mx-2 mt-2 pa-2">1</v-card></p>
                        <v-btn
                        class="mx-2"
                        fab
                        dark
                        small
                        color="deep-orange darken-4"
                        >
                        <v-icon dark>
                            mdi-plus
                        </v-icon>
                        </v-btn>
                      </v-card-actions>
                  </div>
                  <div class="col-2">
                      <p class="title mt-10">$ <span>{{ price }}</span></p>
                  </div>
                  <div class="col">
                      <v-btn
                        class="mx-2"
                        fab
                        dark
                        small
                        color="indigo darken-4"
                        >
                        <v-icon dark>
                            mdi-delete
                        </v-icon>
                        </v-btn>
                  </div>
              </v-row>
              <v-divider></v-divider>
          </v-card>
      </div>
  </div>
</template>

<script>
export default {
    props: ['name', 'price', 'description', 'src']
}
</script>

<style>

</style>