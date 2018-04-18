<template>
  <div class="content">
    <div class="marginHead">
      <div class="slick-list col-12">

        <mainbar></mainbar>

        <div class="productContent lineheight35">
          <div class="product_intro_content col-9">
            <div class="col-12">
              <h3 class="font-style-1">{{$t('mainbar.backSystem')}}</h3>
              <h1 class="close"><router-link to="/website">&times;</router-link></h1>
              <!--<h4>BackOffice</h4>-->
              <!--<h4>Pharaoh Gaming提供最新技术的後台系统，能帮助您有效轻松地运营您的网站。Pharaoh Gaming後端使用尖端的主机系统丶硬体设备，以及强大的IT团队支援，全天监控和完善系统，同时也提供专业的维护服务。</h4>-->
              <!--<h4>Pharaoh Gaming後台系统的功能包括：</h4>-->
              <template v-for="data in $t('BackSystemTitle')">
                <h4>{{data}}</h4>
              </template>
            </div>
            <hr class="clear">
            <div class="product_illustrate2 col-10">
              <div class="backSystem_prev prev" @click="prev()"><</div>
              <ul class="illustrate2 textCenter">
                <template v-for="(data,index) in $t('BackSystemContent')">
                  <li :class="index === activeClass ? 'active' : '' ">
                    <img class="marginBottom10" :src="'../../static/images/vic/static/product/product_management/m' + parseInt(index+1) + '.png'" >
                    <h3>{{data.title}}</h3>
                    <h4>{{data.content}}</h4>
                  </li>
                </template>
              </ul>
              <div class="backSystem_next next" @click="next($t('BackSystemContent').length)">></div>
            </div>
            <hr class="clear">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mainbar from './layout/mainbar'
  import commonMixin from '@/utils/commonMixin'
  import mappingCodes from '../locals'
  export default {
    name: 'service',
    components: {
      mainbar: mainbar,
    },
    mixins: [commonMixin],
    data() {
      return {
        activeClass:0,
      }
    },
    methods:  {
      next: function(length){
        if(this.activeClass >= length-1){
          this.activeClass = 0;
        }else{
          this.activeClass ++;
        }
      },
      prev: function(){
        if(this.activeClass <= 0){
          this.activeClass = 4;
        }else{
          this.activeClass --;
        }
      }
    }
  }
</script>
