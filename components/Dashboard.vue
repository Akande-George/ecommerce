<template>
  <div class="indigo lighten-5">
      <section>
          <div>
            <v-card
                    color="grey lighten-4"
                    flat
                    app
                >
                    <v-toolbar>
                    <v-app-bar-nav-icon
                    @click.stop="drawer = !drawer"
                    >

                    </v-app-bar-nav-icon>

                    <v-toolbar-title>Dashboard</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                    </v-toolbar>
                </v-card>

                <v-navigation-drawer
                    v-model="drawer"
                    app
                    absolute
                    temporary
                    color="indigo darken-3 white--text"
                    >
                    <v-list-item>
                        <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>
                    <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="title white--text">
                        Sandra Adams
                        </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>

                    <v-divider class="white"></v-divider>

                    <v-list>
                        <v-list-item link >
                            <v-list-item-icon>
                                <v-icon class="white--text">mdi-ticket</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title class="white--text">Dashboard</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link >
                            <v-list-item-icon>
                                <v-icon class="white--text">mdi-ticket</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content @click="userShow">
                                <v-list-item-title class="white--text">Users</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link >
                            <v-list-item-icon>
                                <v-icon class="white--text">mdi-ticket</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content @click="orderShow">
                                <v-list-item-title class="white--text">Orders</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link >
                            <v-list-item-icon>
                                <v-icon class="white--text">mdi-ticket</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title class="white--text">Shipping</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link >
                            <v-list-item-icon>
                                <v-icon class="white--text">mdi-ticket</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content @click="itemShow">
                                <v-list-item-title class="white--text">Products</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider class="white"></v-divider>
                        <v-list-item link >
                            <v-list-item-icon>
                                <v-icon class="white--text">mdi-ticket</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title class="white--text">Settings</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
        </div>
      </section>
      <section>
          <div class="px-10 py-5">
          <div >
              <v-btn class="px-10 py-5 justify-end" depressed color="indigo darken-3 white--text">Overview</v-btn>
          </div>
      </div>
      <div class="row py-2 px-10">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <v-chip class="ma-2 py-5 px-8" color="primary" x-large label>
                <v-icon left>
                    mdi-account-circle-outline
                </v-icon>
                <span class="text-h5 ma-0 font-weight-black px-5">34</span> Orders
            </v-chip>
          </div> 
           <div class="col-md-4 col-sm-12 col-xs-12">
            <v-chip class="ma-2 py-5 px-8" color="primary" x-large label>
                <v-icon left>
                    mdi-account-circle-outline
                </v-icon>
                <span class="text-h5 ma-0 font-weight-black px-5">34</span> Orders Pending
            </v-chip>
          </div> 
           <div class="col-md-4 col-sm-12 col-xs-12">
            <v-chip class="ma-2 py-5 px-8" color="primary" x-large label>
                <v-icon left>
                    mdi-account-circle-outline
                </v-icon>
                <span class="text-h5 ma-0 font-weight-black px-5">34</span> Orders Fulfilled
            </v-chip>
          </div>         
      </div>
      </section>
      <section v-if="order">
        <Order />
      </section>
      <section v-if="items">
        <Items />
      </section>
      <section v-if="users">
        <Users />
      </section>
      
  </div>
</template>

<script>
import Order from "~/components/dash/Order"
import Items from "~/components/dash/Items"
import Users from "~/components/dash/Users"

export default {
    components: {
        Order,
        Items,
        Users
    },
    data () {
        return {
            drawer: null,
            order: true,
            items: false,
            users: false
        }
    },

    methods: {
        itemShow () {
            this.items = true,
            this.order = false,
            this.users = false
        },
        orderShow () {
            this.items = false,
            this.order = true,
            this.users = false
        },
        userShow () {
            this.items = false,
            this.order = false,
            this.users = true
        }
    }
}
</script>

<style>

</style>