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
  background: #FF8C6E 0% 0% no-repeat padding-box;
}
.outFit {
  width: 100%;
  height: 100%;
  display: flex;
}
#leftMenu{
  width: 400px;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
  width: 800px;
  max-height: 800px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 3px solid #000000;
  position: relative;
  &::before {
    content: " ";
    display: block;
    width: 20px;
    height: 100%;
    background-color: #fff;
    border: 3px solid black;
    position: absolute;
    right: -26px;
    top: -4px;
    width: 20px;
    height: 100%;
    transform: skewY(45deg);
    transform-origin: top left;
  }
  &::after {
    content: " ";
    display: block;
    position: absolute;
    left: 20px;
    bottom: -26px;
    width: 100%;
    height: 20px;
    transform: skewX(45deg);
    transform-origin: bottom;
    border: 3px solid black;
    background-color: #fff;
  }
}
</style>
