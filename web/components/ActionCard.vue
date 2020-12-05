<template>
  <div class="center d-flex justify-center align-center">
    <v-card width="400px">
      <v-card-title>{{ cardTitle }}</v-card-title>
      <v-form ref="form" v-model="valid">
        <v-card-text>
          <slot name="card-text">
            <v-col cols="12">
              <v-row>
                <v-col cols="8">
                  <v-text-field
                    v-model="form.value"
                    name="value"
                    type="number"
                    :label="inputLabel"
                    :rules="inputRules"
                    required
                  />
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="form.currency"
                    name="currency"
                    type="text"
                    label="Moeda"
                    disabled
                  />
                </v-col>
              </v-row>
            </v-col>
          </slot>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled="!valid" @click="submit">{{ actionText }}</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { niceValue } from '~/utils/niceValue'
export default {
  props: {
    cardTitle: {
      type: String,
      default: () => '',
      required: true,
    },
    inputLabel: {
      type: String,
      default: () => '',
      required: true,
    },
    inputRules: {
      type: Array,
      default: () => [],
    },
    actionText: {
      type: String,
      default: () => '',
      required: true,
    },
    actionType: {
      type: String,
      default: () => '',
      required: true,
    },
  },
  data() {
    return {
      form: {
        value: '',
        currency: 'BRL',
      },
      valid: false,
    }
  },
  computed: {
    id() {
      return this.$store.getters['user/id']
    },
  },
  methods: {
    niceValue,
    async submit() {
      const res = await this.$axios.post(
        `users/${this.id}/${this.actionType}`,
        this.form
      )
      console.log(res)
      // todo redirect to transactions
    },
  },
}
</script>

<style scoped>
.center {
  height: 80vh;
}
</style>
