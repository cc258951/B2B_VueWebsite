<template>
  <div class="content">
    <div class="marginHead">
      <div class="slick-list col-12">

        <mainbar></mainbar>

        <div class="productContent lineheight35">
          <div class="product_intro_content col-9">
            <div class="col-12">
              <h3 class="font-style-1">{{$t('mainbar.Wboard')}}</h3>
              <h1 class="close"><router-link to="/website">&times;</router-link></h1>
              <template v-for="data in $t('WboardTitle')">
                <h4>{{data}}</h4>
              </template>
            </div>
            <hr class="clear">
            <div class="product_illustrate2 col-10">
              <div class="board_prev prev" @click="prev(5)"><</div>
              <ul class="illustrate2 textCenter">
                <li class="board active">
                  <template v-for="data in 5">
                    <div :class="'bo' + data" @click="now(this)">
                      <img :src="'../../static/images/vic/static/product/productWboard/'+ data +'.png'">
                      <h1>{{data.$index}}</h1>
                    </div>
                  </template>
                </li>
              </ul>
              <div class="board_next next" @click="next(5)">></div>
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

      }
    },
    methods: {
      prev: function(length){
        for(var i = 0; i<length; i++){
          var board = document.querySelectorAll('.board div')[i].className;
          var boNum = parseInt(board.substr(2)-1);
          if( boNum <= 0 ){
            boNum = length;
            $(".board div").eq(i).removeClass(board).addClass('bo'+boNum);
          }else{
            $(".board div").eq(i).removeClass(board).addClass('bo'+boNum);
          }
        }
      },
      next: function(length){
        for(var i = 0; i<length; i++){
          var board = document.querySelectorAll('.board div')[i].className;
          var boNum = parseInt(board.substr(2))+1;
          if( boNum > length ){
            boNum = 1;
            $(".board div").eq(i).removeClass(board).addClass('bo'+ boNum);
          }else{
            $(".board div").eq(i).removeClass(board).addClass('bo'+ boNum);
          }
        }
      },
      now: function(a){
        console.log(a);
        var thisClassName = parseInt((this.className).substr(2));
        var change  = 3 - thisClassName;
        for(var i = 0; i<boardNode; i++){
          var board = document.querySelectorAll('.board div')[i].className;
          var boNum = parseInt(board.substr(2)) + change;
//          console.log(boNum);
          if( boNum == -1){
            boNum = 4;
          }
          if ( boNum == 0 ){
            boNum = 5;
          }
          if ( boNum == 6 ){
            boNum = 1;
          }
          if ( boNum == 7 ){
            boNum = 2;
          }
          $(".board div").eq(i).removeClass(board).addClass('bo'+ boNum);
        }

      },
    }
  }
</script>
