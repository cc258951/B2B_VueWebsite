<template>
  <header class="header">
    <div class="col-4 titleLogo"><router-link to="/"><img src="../../../static/images/logoW.png" id="FaloLogo" class="svg FaloLogo"></router-link></div>
    <div class="col-8 titleList">
      <template>
        <ul>
          <template v-for="(data,index) in $t('menu')">
            <li :class="active == index ? 'active' : activeClass" @click="activeClass(index)">
              <router-link :to="{ path: data[1] }">{{data[0]}}</router-link>
            </li>
          </template>
          <li class="dropdown">
            <a href="#"
               class="dropdown-toggle"
               data-toggle="dropdown"
               role="button"
               aria-haspopup="true"
               aria-expanded="false">{{$t('lang.' + currentLang)}}<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a @click="changeLang('zh_TW')">{{$t('lang.zh_TW')}}</a></li>
              <li><a @click="changeLang('zh_CN')">{{$t('lang.zh_CN')}}</a></li>
              <li><a @click="changeLang('en')">{{$t('lang.en')}}</a></li>
            </ul>
          </li>
        </ul>
      </template>
    </div>
    <div class="menu">
      <div class="bar"></div>
    </div>
  </header>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import commonMixin from '@/utils/commonMixin'
export default {
  name: "Header",
  mixins: [commonMixin],
  data(){
    return{
      active: "menu",
    }
  },
  computed: {
    ...mapState([
      'currentLang'
    ]),
  },
  methods: {
    ...mapMutations([
      'changeLang'
    ]),
    activeClass: function( index ){
      this.active = index;
      if(this.active === index){
        return 'active';
      }else{
        return '';
      }
    }
  }
}
</script>
