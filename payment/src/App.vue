<template>
  <div id="app">
    <div class="logo"><h1>PAYMENT</h1></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/checkPayment">About</router-link>
      <router-link to="/success">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped >
h1{
  width: 280px;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  text-indent: -999px;
  background-image: url(./assets/icons/svg/logo.svg);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1280px;
  margin: 0 auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
