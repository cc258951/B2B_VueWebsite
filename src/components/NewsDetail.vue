<template>
  <div class="content">
    <div class="marginHead">
      <div class="banner">
        <div class="container">
          <div class="page_news_mtitle page_mtitle">
            <div class="news_en">NEWS</div>
            <div class="news_cn">最新消息</div>
          </div>
          <div class="news_content row">
            <div class="col-sm-12 col-md-7 news_img">
              <img v-if="$t('news.' + id + '.images')" :src="'../../static/images/vic/static/news/' + $t('news.' + id + '.images')" alt="">
                <div v-if="$t('news.' + id + '.video')">
                    <video width="100%" height="100%" autoplay loop muted>
                        <source :src="$t('news.' + id + '.video')">
                    </video>
                </div>
            </div>
            <div class="col-sm-12 col-md-5 news_txt">
              <div class="date news_detail_date">
                <span class="day">{{ $t('news.' + id + '.day') }}</span>
                <span class="year">{{ $t('news.' + id + '.year') }}</span>
              </div>
              <div class="news_detail_title">
                {{ $t('news.' + id + '.detail') }}
              </div>
              <div class="news_detail" v-html="$t('news.' + id + '.content')">
              </div>
            </div>
          </div>
          <div class="news_detail_more">
            <a href=""><i class="fa fa-chevron-left"></i></a>
            <router-link to="/news">{{$t('label.contents')}}</router-link>
            <a href=""><i class="fa fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var id = 1;

import commonMixin from '@/utils/commonMixin'
import mappingCodes from '../locals'
export default {
  name: 'NewsDetail',
  mixins: [commonMixin],
  beforeCreate() {
    var url = window.location.href,
        arr = url.split("#");
    id = (typeof arr[1] == 'undefined') ? 1 : arr[1];
    if (typeof mappingCodes[localStorage.lang]['news'][id]['list'] == 'undefined' ||
        typeof mappingCodes[localStorage.lang]['news'][id]['list'] == '') {
      id = 1;
    }
//    console.log(id);
  },
  data() {
    return {
      id: id
    }
  }
}
</script>

<style scoped>

</style>
