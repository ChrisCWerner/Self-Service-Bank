<template>
  <div class="content-height">
    <span class="title">Pagamento</span>
    <ActionCard
      card-title="Informe a quantia"
      input-label="Valor do pagamento"
      :input-rules="[
        (v) =>
          v <= balance.balance ||
          'Valor máximo disponível é ' + niceValue(balance),
        (v) =>
          v > 0 ||
          'Pagamento mínimo de ' + niceValue({ value: 0.01, currency }),
      ]"
      action-text="Pagar"
      action-type="payment"
    />
  </div>
</template>

<script>
import { niceValue } from '~/utils/niceValue'
export default {
  data() {
    return {
      currency: 'BRL',
    }
  },
  computed: {
    balance() {
      console.log(this.$store.getters['user/balance'])
      return this.$store.getters['user/balance']
    },
  },
  methods: { niceValue },
}
</script>
