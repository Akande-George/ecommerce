<template>
  <div class="mt-8 mx-10 mb-5" style="overflow-x:auto;">
      <div class="row px-5 py-3">
          <v-btn class="col-2" depressed color="primary">Products</v-btn>
          <v-spacer></v-spacer>
          <v-btn class="col-3" depressed color="primary">Add Product</v-btn>
      </div>
      <v-card outlined >
        <v-simple-table>
            <template v-slot:default>
            <thead class="indigo lighten-4">
                <tr>
                <th class="text-left text-h6">
                    ID
                </th>
                <th class="text-left text-h6">
                    Product Name
                </th>
                <th class="text-left text-h6">
                    Description
                </th>
                <th class="text-left text-h6">
                    Category
                </th>
                <th class="text-left text-h6">
                    Price (N)
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in products"
                :key="item.id"
                >
                <td class="body-1">{{ item.id }}</td>
                <td class="body-1">{{ item.name }}</td>
                <td class="body-1">{{ item.description }}</td>
                <td class="body-1">{{ item.category }}</td>
                <td class="body-1">{{ item.price }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    components: {},
    data () {
        return {
            products: []
        }
    },

    methods: {
        async getProducts () {
            const {data} = await axios.get(`https://schon-api.herokuapp.com/user/account/product`)
            this.products= data.data.products,
            console.log(data.data.products)
        }
    },
    mounted () {
        this.getProducts ()
    }
  }
</script>  