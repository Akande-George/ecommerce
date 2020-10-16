<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar>
      <v-spacer></v-spacer>

        <div class="d-none d-md-block">
            <v-btn text color="indigo darken-4" class="mx-1">
            All Products
            </v-btn>
            <v-btn text color="indigo darken-4" class="mx-1">
            Electronics
            </v-btn>
            <v-btn text color="indigo darken-4" class="mx-1">
            Fashion
            </v-btn>
            <v-btn text color="indigo darken-4"  class="mx-1">
            Gadgets
            </v-btn>
        </div>
        <v-spacer></v-spacer>
        <div class="d-md-none text-center">
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="" v-bind="attrs" v-on="on">
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(menu, index) in menus"
                    :key="index"
                    >
                    <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
    data: () => ({
      menus: [
        { title: 'All Products', src: '/store' },
        { title: 'Electronics', src: '/store' },
        { title: 'Fashion', src: '/store' },
        { title: 'Gadgets', src: '/store' },
      ],
    })
}
</script>

<style>

</style>