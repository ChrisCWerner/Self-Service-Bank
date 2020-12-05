<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" clipped app>
      <v-list>
        <v-list-item nuxt to="/">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Resumo </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="extrato">
          <v-list-item-icon>
            <v-icon>mdi-view-list</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Extrato </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="deposito">
          <v-list-item-icon>
            <v-icon>mdi-import</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Depósito </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="resgate">
          <v-list-item-icon>
            <v-icon>mdi-export</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Resgate </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="pagamento">
          <v-list-item-icon>
            <v-icon>mdi-cash</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Pagamento </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar clipped-left app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Auto Atendimento</v-toolbar-title>
      <v-spacer />
      <span class="title mx-2" v-text="user.nickname" />
      <v-avatar :size="36"><v-img :src="user.avatar" /></v-avatar>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container class="content" fluid>
        <div v-if="loading" class="content-height loader">
          <v-progress-circular
            :size="88"
            :width="8"
            color="#3B82F6"
            indeterminate
          />
        </div>
        <Nuxt v-else />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    }
  },
  computed: {
    loading() {
      return !this.user.id
    },
    user() {
      return this.$store.getters['user/user']
    },
  },
  mounted() {
    this.$store.dispatch('user/getUser', { id: '78' })
  },
}
</script>

<style scoped>
.content {
  min-height: 100%;
}
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.content-height {
  min-height: calc(100vh - 88px);
}
</style>
