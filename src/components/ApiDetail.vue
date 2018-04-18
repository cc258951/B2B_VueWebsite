<template>
  <div class="content">
    <div class="marginHead">
      <div class="slick-list col-12">

        <mainbar></mainbar>

        <div class="productContent lineheight35">
          <div class="product_intro_content col-9">
            <div class="col-12">
              <h3 class="font-style-1">{{$t('mainbar.API')}}</h3>
              <h1 class="close"><router-link to="/website">&times;</router-link></h1>
            </div>
            <hr class="clear">
            <div class="product_API">
              <ul class="h4">
                <li v-for="(venderID,index) in $t('productApi').length"
                    :class="venderID == id ? 'active':''"
                    @click="listBlock"
                >
                  <router-link :to="('/apiDetail#' + parseInt(index+1))">{{$t('productApi.' + index + '.title')}}</router-link>
                </li>
                <div @click="listBlock"><img src="../../static/images/vic/static/icon/icon1.png"></div>

              </ul>
            </div>
            <hr class="clear">
            <div class="product_illustrate2 col-10">
              <div class="vender">
                <ul>
                  <li v-for="(data,index) in $t('productApi.' + parseInt(id-1) +'.imgs').length"
                      @mouseover="mouseOver(index)"
                      @mouseout="mouseOut(index)"
                  >
                    <div>
                      <img :src = "'../../static/images/vic/static/API/'+ id + '-' + $t('productApi.'+ parseInt(id-1) +'.imgs['+index+']' ) + '.png'">
                      <br>
                      <router-link tag="button" class="btn-style-1 color-style-1" :to="($t('productApi.'+ parseInt(id-1) +'.url[' + index + ']'))">{{$t('productApi.' + parseInt(id-1) + '.btn[' + index + ']')}}</router-link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <hr class="clear">
          </div>
        </div>
        <hr class="clear">
      </div>
    </div>
  </div>
</template>

  <script>
  var id = 1;
  import mainbar from './layout/mainbar'
  import commonMixin from '@/utils/commonMixin'
  import mappingCodes from '../locals'
  export default {
    name: 'ApiDetail',
    beforeCreate() {
      var url = window.location.href;
      var arr = url.split("#");
      id = (typeof arr[1] == 'undefined') ? 1 : arr[1];
      if (typeof mappingCodes[localStorage.lang]['productApi'][id]['imgs'] == 'undefined' ||
        typeof mappingCodes[localStorage.lang]['productApi'][id]['imgs'] == '') {
        id = 1;
      }
    },
    components: {
      mainbar: mainbar,
    },
    watch: {
      '$route' () {
        location.reload();
      }
    },
    methods:{
      listBlock: function(){
        $('.product_API li').toggleClass('active2');
      },
      mouseOver(index) {
        var imgOver = document.querySelectorAll('.vender li img')[index];
        imgOver.src = '../../static/images/vic/static/API/'+ id + '-' + parseInt(index+1) + 'a.png';
      },
      mouseOut(index) {
        var imgOver = document.querySelectorAll('.vender li img')[index];
        imgOver.src = '../../static/images/vic/static/API/'+ id + '-' + parseInt(index+1) + '.png';
      }
    },
    mixins: [commonMixin],
    data() {
      return {
        id:id,
      }
    },
  }
</script>
