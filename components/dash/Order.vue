<template>
  <v-card class="mx-10 mb-5" style="overflow-x:auto;">
      <v-simple-table>
        <template v-slot:default>
        <thead class="indigo lighten-2">
            <tr>
            <th class="text-left text-h6 white--text">
                ID
            </th>
            <th class="text-left text-h6 white--text">
                USER
            </th>
            <th class="text-left text-h6 white--text">
                ORDER
            </th>
            <th class="text-left text-h6 white--text">
                TOTAL COST
            </th>
            <th class="text-left text-h6 white--text">
                PAID
            </th>
            <th class="text-left text-h6 white--text">
                PAY METHOD
            </th>
            <th class="text-left text-h6 white--text">
                STATUS
            </th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="order in orders"
            :key="order.id"
            >
            <td class="body-1">{{ order.id }}</td>
            <td class="body-1">{{ order.user_id}}</td>
            <td class="body-1">{{ order.order }}</td>
            <td class="body-1">{{ order.totalCost }}</td>
            <td class="body-1">{{ order.paid }}</td>
            <td class="body-1">{{ order.payMethod }}</td>
            <td class="body-1">{{ order.delivered }}</td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        orders: [],
      }
    },

    methods: {
        async getProducts () {
            const {data} = await axios.get(`https://schon-api.herokuapp.com/user/account/order/1`)
            this.orders= data.data.products,
            console.log(data.data.products)
        }
    },
    mounted () {
        this.getProducts ()
    }
  }
</script>  