<template>
  <v-card class="mx-10 mb-5" style="overflow-x:auto;">
      <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left text-h6">
                Users
            </th>
            <th class="text-left text-h6">
                Orders
            </th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="item in desserts"
            :key="item.name"
            >
            <td class="body-1">{{ item.name }}</td>
            <td class="body-1">{{ item.calories }}</td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>  