<template>
  <div>
      <h3 class="display-1 font-weight-thin mb-5">Payment Details</h3>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name on Card"
        outlined
        required
        filled
        ></v-text-field>

        <v-text-field
        v-model="cardNumber"
        :counter="10"
        :rules="numberRules"
        label="Card Number"
        outlined
        required
        filled
        ></v-text-field>
        <p class="subtitle1 mt-3">Expiration Date</p>
        <v-row>
            <div class="col-4">
                <v-text-field
                v-model="dd"
                :counter="2"
                :rules="dd"
                label="dd"
                outlined
                required
                filled
                ></v-text-field>
            </div>
            <div class="col-4">
                <v-text-field
                v-model="mm"
                :counter="2"
                :rules="mm"
                label="mm"
                outlined
                required
                filled
                ></v-text-field>
            </div>
            <div class="col-4">
                <v-text-field
                v-model="cvv"
                :counter="3"
                :rules="cvv"
                label="CVV"
                outlined
                required
                filled
                ></v-text-field>
            </div>
        </v-row>

        <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
        ></v-checkbox>

        <v-btn
        :disabled="!valid"
        color="indigo darken-4 white--text px-8 py-4"
        class="mr-4"
        @click="pay"
        >
        Pay Now
        </v-btn>

        <v-btn
        color="deep-orange darkent-4 white--text"
        class="mr-4"
        @click="reset"
        >
        Reset Form
        </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15) || 'Name must be less than 15 characters',
      ],
      cardNumber: '',
      numberRules: [
        v => !!v || 'Card number is required',
        v => (v && v.length <= 15) || 'Name must be less than 15 characters',
      ],
      mm: '',
      mm: [
        v => !!v || 'Card number is required',
        v => (v && v.length <= 3) || 'Name must be equal to 2 characters',
      ],
      dd: '',
      dd: [
        v => !!v || 'Card number is required',
        v => (v && v.length <= 3) || 'Name must be equal to 2 characters',
      ],
      cvv: '',
      cvv: [
        v => !!v || 'Card number is required',
        v => (v && v.length <= 3) || 'Name must be equal to 2 characters',
      ],
      checkbox: false,
    }),

    methods: {
      pay () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
}
</script>

<style>

</style>