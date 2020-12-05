<template>
  <div>
    <span class="title">Resumo</span>
    <div class="center d-flex justify-center align-center">
      <v-card width="400px">
        <v-card-title>Saldo: {{ niceValue(balance) }}</v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
import { niceValue } from '~/utils/niceValue'
export default {
  computed: {
    user() {
      return this.$store.getters['user/user']
    },
    balance() {
      return this.$store.getters['user/balance']
    },
  },
  methods: {
    niceValue,
  },
}
</script>

<style scoped>
.center {
  height: 80vh;
}
</style>
