<template>
  <div class="pa-16 col-md-6 col-sm-11 col-xs-11 mx-auto">
    <v-card class="pa-10">
        <img class="pb-5" src="~/assets/logo.png" alt="">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="onSubmit"
        >

            <v-text-field
            v-model="form.email"
            label="E-mail"
            required
            filled
            ></v-text-field>

            <v-text-field
            v-model="form.password"
            label="Password"
            required
            filled
            ></v-text-field>

            <v-checkbox
            v-model="checkbox"
            label="Do you agree?"
            required
            ></v-checkbox>

            <v-btn
            :disabled="!valid"
            type="submit"
            color="deep-orange darken-4 white--text"
            class="mr-4"
            >
            Validate
            </v-btn>

            <v-btn
            color="indigo darken-4 white--text"
            class="mr-4"
            @click="reset"
            >
            Reset Form
            </v-btn>
        </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
    data: () => ({
      valid: true,
      form: {
        password: '',
        email: '',
      },
      checkbox: false,
    }),

    methods: {
      async onSubmit () {
        // this.$refs.form.validate()
        try {
          let response = await this.$auth.loginWith('local', { data: this.form })
         console.log(response)
        } catch (err) {
            console.log(err)
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    },
}
</script>

<style>

</style>