<template>
  <div>
    <span class="title">Extrato de transações</span>
    <div class="content">
      <v-card
        v-for="transaction in transactions"
        :key="transaction.id"
        width="400px"
        class="my-4"
      >
        <v-card-title>
          {{ types[transaction.type].text }}
          <v-spacer />
          <v-icon>{{ types[transaction.type].icon }}</v-icon>
        </v-card-title>
        <v-card-text>
          <p>
            <span class="font-weight-bold">Valor: </span
            >{{ niceValue(transaction) }}
          </p>
          <p>
            <span class="font-weight-bold">Data: </span
            >{{ niceDate(transaction.timestamp) }}
          </p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import { niceValue } from '~/utils/niceValue'
import { niceDate } from '~/utils/niceDate'
export default {
  data() {
    return {
      transactions: [],
      types: {
        deposit: {
          text: 'Depósito',
          icon: 'mdi-import',
        },
        redemption: {
          text: 'Resgate',
          icon: 'mdi-export',
        },
        payment: {
          text: 'Pagamento',
          icon: 'mdi-cash',
        },
      },
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/user']
    },
  },
  mounted() {
    this.fetchTransactions()
  },
  methods: {
    niceDate,
    niceValue,
    async fetchTransactions() {
      const res = await this.$axios('transactions/user/' + this.user.id)
      if (res.status < 400) {
        this.transactions = res.data
      }
    },
  },
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
