<template>
  <div class="pa-16 col-md-6 col-sm-11 col-xs-11 mx-auto">
    <v-card class="pa-5">
        <img class="pb-5" src="~/assets/logo.png" alt="">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Fullname"
            filled
            required
            ></v-text-field>

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            filled
            ></v-text-field>

            <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            filled
            ></v-text-field>

            <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'User is required']"
            label="user"
            required
            filled
            ></v-select>

            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
            ></v-checkbox>

            <v-btn
            :disabled="!valid"
            color="deep-orange darken-4 white--text"
            class="mr-4"
            @click="validate"
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
      name: '',
      nameRules: [
        v => !!v || 'Full Name is required',
        v => (v && v.length <= 30) || 'Name must be less than 30 characters',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Full Name is required',
        v => (v && v.length <= 30) || 'Name must be less than 30 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'seller',
        'buyer',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>

<style>

</style>