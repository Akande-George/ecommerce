<template>
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