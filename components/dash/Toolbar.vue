<template>
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
                <v-list-group
                    v-for="item in items"
                    :key="item.title"
                    v-model="item.active"
                    class="white--text"
                    color="white"
                    no-action
                >
                    <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon class="blue--text text--lighten-2" v-text="item.action"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="blue--text text--lighten-4">
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                    </template>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    components: {},
    data () {
      return {
        drawer: null,
        items: [
        {
          action: 'mdi-ticket',
          items: [{ title: 'List Item' }],
          title: 'Dashboard',
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
          ],
          title: 'Content',
        },
        {
          action: 'mdi-school',
          items: [{ title: 'List Item' }],
          title: 'Customers',
        },
        {
          action: 'mdi-run',
          items: [{ title: 'List Item' }],
          title: 'Orders',
        },
        {
          action: 'mdi-bottle-tonic-plus',
          items: [{ title: 'List Item' }],
          title: 'Shipping',
        },
        {
          action: 'mdi-content-cut',
          items: [{ title: 'List Item' }],
          title: 'Product',
        }
      ],
      }
    },
}
</script>

<style>

</style>