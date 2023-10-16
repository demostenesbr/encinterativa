<template>
  <HeaderMenu />
  <div class="tabs relative bottom-0 top-0 background-textured">
    <div class="container items-center mx-auto justify-center">
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <BuyCollectExchangeProducts />
      <HowToParticipate />
      <BuyCollectExchangeTabs />
      <WatchTheVideo />
      <ParticipantsProducts />
      <PartnersComponent />
    </div>
    <FooterMenu />
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
import HelloWorld from "./components/HelloWorld.vue";
import BuyCollectExchangeProducts from "./components/BuyCollectExchangeProducts.vue";
import HowToParticipate from "./components/HowToParticipate.vue";
import BuyCollectExchangeTabs from "./components/BuyCollectExchangeTabs.vue";
import WatchTheVideo from "./components/WatchTheVideo.vue";
import ParticipantsProducts from "./components/ParticipantsProducts.vue";
import PartnersComponent from "./components/PartnersComponent.vue";
import FooterMenu from "./components/FooterMenu.vue";
export default {
  name: "App",
  components: {
    HeaderMenu,
    HelloWorld,
    BuyCollectExchangeProducts,
    HowToParticipate,
    BuyCollectExchangeTabs,
    WatchTheVideo,
    ParticipantsProducts,
    PartnersComponent,
    FooterMenu,
  },
  views: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
