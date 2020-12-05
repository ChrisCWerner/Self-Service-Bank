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
      <span class="title mx-2">{{ user.nickname }}</span>
      <v-avatar :size="36"><v-img src="chris.jpg" /></v-avatar>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      user: {},
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user')) || {}
  },
}
</script>

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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
