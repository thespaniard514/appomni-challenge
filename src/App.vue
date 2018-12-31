<template>
  <main id="app">
    <nav id="nav">
      <router-link to="/">View Contacts</router-link> |
      <router-link to="/contacts/create">Create Contacts</router-link>
    </nav>
    <section id="main">
      <router-view/>
    </section>
  </main>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 1500px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #42b983;
    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
#main {
  padding: 30px;
}
</style>
