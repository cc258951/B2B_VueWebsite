<template>
  <div class="content">
    <div class="marginHead">
      <div class="slick-list col-12">

        <mainbar></mainbar>

        <div class="productContent">
          <div class="block col-9 textCenter">
            <div class="col-4">
              <router-link to="/service">
                <div class="product_intro_list">
                  <h2 class="font-style-1">{{$t('mainbar.service')}}</h2>
                </div>
              </router-link>
            </div>
            <div class="col-4">
              <router-link to="/backSystem">
                <div class="product_intro_list">
                  <h2 class="font-style-1">{{$t('mainbar.backSystem')}}</h2>
                </div>
              </router-link>
            </div>
            <div class="col-4">
              <router-link to="/Wboard">
                <div class="product_intro_list">
                  <h2 class="font-style-1">{{$t('mainbar.Wboard')}}</h2>
                </div>
              </router-link>
            </div>
          </div>
          <hr class="clear">
        </div>
        <hr class="clear">
      </div>
    </div>
  </div>
</template>

<script>
import mainbar from './layout/mainbar'
import commonMixin from '@/utils/commonMixin'
export default {
  name: 'Website',
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
