<template>
  <div id="app">
    <header-cpt></header-cpt>
    <!-- header end-->
    <router-view></router-view>
    <footer-cpt></footer-cpt>
    <!--footer end-->


  </div>
</template>

<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'app',
  components: {
    HeaderCpt: Header,
    FooterCpt: Footer,
  },
  computed: {
    ...mapState([
      'currentLang'
    ]),
  },
  mounted() {
    this.initCurrentLang()
  },
  methods: {
    ...mapMutations([
      'changeLang'
    ]),
    initCurrentLang() {
      var lang = localStorage.lang || "zh_TW"
      this.changeLang(lang)
    }
  }
}
</script>

<style>

</style>
