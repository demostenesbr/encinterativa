<script>
import HoriziontalRibbon from "./icons/HoriziontalRibbon.vue";
import LogoMainCompany from "./items/LogoMainCompany.vue";
import FAQRegulation from "./menus/FAQRegulation.vue";
import FooterParagraph from "./items/FooterParagraph.vue";
import SocialMedia from "./menus/SocialMedia.vue";
export default {
  name: "App",
  components: {
    HoriziontalRibbon,
    FAQRegulation,
    SocialMedia,
    FooterParagraph,
    LogoMainCompany,
  },
  views: {},
};
</script>

<template>
  <div>
    <div class="relative bottom-0 top-0 background-external-solid">
      <div class="shadow">
        <div
          class="background-external-solid mx-auto items-center justify-center"
        >
          <HoriziontalRibbon />
          <FAQRegulation />
          <SocialMedia />
          <FooterParagraph />
          <LogoMainCompany />
        </div>
      </div>
    </div>
  </div>
</template>
