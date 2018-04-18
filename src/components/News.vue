<template>
  <div class="content">
    <div class="marginHead">
      <div class="banner">
        <div class="container">
          <div class="page_news_mtitle page_mtitle">
            <div class="news_en">NEWS</div>
            <div class="news_cn">最新消息</div>
          </div>
          <div class="index_news_list">
            <template v-for="newsID in 3">
                    <div class="news_unit" >
                        <div class="date">
                            <span class="day">{{$t('news.' + newsID + '.day')}}</span>
                            <span class="year">{{$t('news.' + newsID + '.year')}}</span>
                        </div>
                        <div class="news_title" v-html="$t('news.' + newsID + '.list')"></div>
                        <router-link class="news_more1" :to="('/news-detail#' + newsID)">{{$t('label.more')}}</router-link>
                    </div>
              <hr class="clear">
            </template>
          </div>
        </div>
		  </div>
    </div>
  </div>
</template>

<script>
import commonMixin from '@/utils/commonMixin'

export default {
  name: 'News',
	mixins: [commonMixin],
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>
