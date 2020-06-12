<template>
  <div class="outFit">
    <div id="leftMenu">
      <LeftMenu></LeftMenu>
    </div>
    <div id="app">
      <HelloWorld />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import LeftMenu from "./components/LeftMenu.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    LeftMenu
  }
};
</script>

<style lang="scss">
html,body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FF8C6E 0% 0% no-repeat padding-box;
}
.outFit {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
}
#app {
  // display: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // display: flex;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
  width: 800px;
  max-height: 800px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 3px solid #000000;
}
</style>
