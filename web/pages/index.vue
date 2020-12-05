<template>
  <div>
    {{ user }}
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters['user/user']
    },
    balance() {
      return this.$store.getters['user/balance']
    },
  },
}
</script>
