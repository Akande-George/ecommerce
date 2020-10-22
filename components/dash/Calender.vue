<template>
    <div
      class="my-2"
    >
      <v-date-picker
        v-model="date"
        @contextmenu:year="contextMenu"
        @dblclick:date="dblClick"
        @mouseenter:month="mouseEnter"
        @mouseleave:month="mouseLeave"
      ></v-date-picker>
    </div>
</template>

<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      done: [false, false, false],
      mouseMonth: null,
    }),

    methods: {
      contextMenu (year, event) {
        this.$set(this.done, 2, true)

        event.preventDefault()

        alert(`You have activated context menu for year ${year}`)
      },
      dblClick (date) {
        this.$set(this.done, 0, true)

        alert(`You have just double clicked the following date: ${date}`)
      },
      mouseEnter (month) {
        this.$set(this.done, 1, true)
        this.mouseMonth = month
      },
      mouseLeave () {
        this.mouseMonth = null
      },
    },
  }
</script>