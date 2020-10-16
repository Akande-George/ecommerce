<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar>

      <v-toolbar-title class="ma-4">
        <img src="~/assets/logo.png" alt="">
      </v-toolbar-title>

      <v-spacer></v-spacer>

        <div class="d-none d-md-block">
            <v-btn text color="indigo darken-4" to="/" class="mx-1">
            Home
            </v-btn>
            <v-btn text color="indigo darken-4" to="/about" class="mx-1">
            About
            </v-btn>
            <v-btn text color="indigo darken-4" to="/services" class="mx-1">
            Services
            </v-btn>
            <v-btn text color="indigo darken-4" to="/contact" class="mx-1">
            Contact Us
            </v-btn>

            <v-btn icon to="/cart">
                <v-icon x-large>mdi-cart</v-icon>
            </v-btn>

            <v-btn color="deep-orange darken-4" rounded dark large>
                Sign up
            </v-btn>
        </div>
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
                    :to="menu.src"
                    >
                    <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-btn icon to="/cart">
                            <v-icon x-large>mdi-cart</v-icon>
                        </v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn color="deep-orange darken-4" rounded dark large>
                            Sign up
                        </v-btn>
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
        { title: 'Home', src: '/' },
        { title: 'About', src: '/about' },
        { title: 'Services', src: '/services' },
        { title: 'Contacts', src: '/contacts' },
      ],
    })
}
</script>

<style>

</style>