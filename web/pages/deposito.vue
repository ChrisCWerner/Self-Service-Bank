<template>
  <div class="content-height">
    <span class="title">Depósito</span>
    <ActionCard
      card-title="Informe a quantia"
      input-label="Valor do depósito"
      :input-rules="[
        (v) =>
          v >= 10 ||
          'Valor mínimo de depósito é ' + niceValue({ value: 10, currency }),
      ]"
      action-text="Depositar"
      action-type="deposit"
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
  methods: { niceValue },
}
</script>
