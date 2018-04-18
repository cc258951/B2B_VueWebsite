<template>
  <div class="content">
    <div class="marginHead">
      <div class="slick-list col-12">

        <mainbar></mainbar>

        <div class="productContent">
          <div class="product_intro_content col-9">
            <div class="col-12">
              <h3 class="font-style-1">{{$t('mainbar.service')}}</h3>
              <h1 class="close"><router-link to="/website">&times;</router-link></h1>
            </div>
            <hr class="clear">
            <div class="product_illustrate">
              <ul class="product_illustrate1">
                <li v-for="data in $t('productService')">
                  <div>{{data.content}}</div>
                  <h5 class="serviceTitle">{{data.title}}</h5>
                </li>
                <!--<img src="../../static/images/vic/static/product/icon2.png" alt="">-->
              </ul>
              <hr class="clear">
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
      return {}
    },
    methods: {}
  }
</script>

<style lang="" scoped>

</style>
