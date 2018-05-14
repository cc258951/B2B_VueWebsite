<template>
  <div class="content">
    <div class="marginHead">
      <div class="slick-list col-12">

        <mainbar></mainbar>

        <div class="productContent lineheight35">
          <div class="product_intro_content col-9">
              <h1 class="close"><router-link to="/website">&times;</router-link></h1>
              <hr class="clear">
              <div class="finance_content">
                <div><img src="../../static/images/vic/static/product/finance/finance.png"></div>
                <div><h2>{{$t('finance.title')}}</h2></div>
                <div class="finance_function">
                  <div class="left_top"></div>
                  <div class="right_bottom"></div>
                  <div class="h4">{{$t('finance.function.title[0]')}}</div>
                  <ul>
                    <template v-for="data in $t('finance.function.content')">
                      <li class="h5">● {{data}}</li>
                    </template>
                    <hr class="clear">
                  </ul>
                </div>
                <div class="h3 finance_title">
                  <i></i>
                  {{$t('finance.function.title[1]')}}
                </div>
                <div class="finance_detail">
                  <template v-for="(data,index) in 7">
                    <div>
                      <img :src="'../../static/images/vic/static/product/finance/f'+ data +'.png'">
                      <h5>{{$t('finance.detailTitle['+ index + ']')}}</h5>
                      <h6>{{$t('finance.detail['+ index + ']')}}</h6>
                    </div>
                  </template>
                </div>

              </div>
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
      name: 'finance',
      components: {
        mainbar: mainbar,
      },
      mixins: [commonMixin],
      data() {
        return {

        }
      },
    }
</script>
<style scoped>
  .finance_content{
    text-align: center;
    margin:60px auto 0 auto;
  }
  .finance_content>div{
    margin-bottom: 25px;
  }
  .finance_function{
    text-align: center;
    margin: 0 auto;
    width:60%;
    max-width: 540px;
    height:100%;
    border:1px solid white;
    position: relative;
    padding: 30px;
  }
  .finance_function ul{
    min-height: 80px;
  }
  .finance_function li{
    float:left;
    width:50%;
    vertical-align: middle;
  }
  .left_top{
    position: absolute;
    top:-1px;
    left:-1px;
    border-style: solid;
    border-width: 30px 30px 0 0;
    border-color: #12263f transparent transparent transparent;
  }
  .left_top::after{
    content: '';
    position: absolute;
    background: #fff;
    width: 40px;
    height: 1px;
    transform: rotate(-45deg);
    top: -16px;
    left: -5px;
  }
  .right_bottom{
    position: absolute;
    right:-1px;
    bottom:-1px;
    border-style: solid;
    border-width: 0 0 30px 30px;
    border-color: transparent transparent #1e3b62 transparent;
  }
  .right_bottom::after{
    content: '';
    position: absolute;
    background: #fff;
    width: 40px;
    height: 1px;
    transform: rotate(-45deg);
    bottom: -16px;
    right: -5px;
  }
  .finance_title{
    position: relative;
    width: 80%;
    text-align: center;
    margin: 0 auto;
    line-height: 35px;
  }
  .finance_title::after,.finance_title::before,.finance_title>i::after,.finance_title>i::before{
    content: '';
    position: absolute;
    background: #fff;
  }
  .finance_title::after{
    width: 27%;
    height: 1px;
    left: 60px;
    top: 10px;
  }
  .finance_title::before{
    width: 27%;
    height: 1px;
    right: 60px;
    top: 10px;
  }
  .finance_title>i::after{
    width: 6px;
    height: 6px;
    border-radius: 50%;
    left: 45px;
    top: 8px;
  }
  .finance_title>i::before{
    width: 6px;
    height: 6px;
    border-radius: 50%;
    right: 45px;
    top: 8px;
  }
  .finance_detail{
    display: inline-block;
    width:100%;
  }
  .finance_detail div{
    display: inline-block;
    padding: 0 5px;
    width:14%;
    vertical-align: top;

  }


  @media only screen and (max-width: 870px){
    .finance_detail div{
      width:25%;
    }
  }
  @media only screen and (max-width: 800px){
    .finance_function li {
      width: 100%;
      float: none;
      margin: 20px 0 0 0;
    }
    .finance_title::after,.finance_title::before{
      width:22%;
    }
  }
  @media only screen and (max-width: 700px){
    .finance_title::after,.finance_title::before{
      width:16%;
    }
  }
  @media only screen and (max-width: 570px){
    .finance_title::after,.finance_title::before{
      width:0;
    }
    .finance_detail div{
      width:33%;
    }
  }
</style>
