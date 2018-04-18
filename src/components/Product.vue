<template>
  <div class="content">
    <div class="marginHead">
      <div class="slick-list col-12">

        <mainbar></mainbar>

        <div class="productContent col-9">
          <div class="productType col-6">
            <router-link to="/website">
              <div>
                <img src="../../static/images/vic/static/product/website.jpg">
              </div>
            </router-link>
          </div>
          <div class="productType col-6">
            <router-link to="/api">
              <div>
                <img src="../../static/images/vic/static/product/api.jpg">
              </div>
            </router-link>
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
export default {
  name: 'Product',
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


</style>
