<template>
    <div id="home">
      <div class="content">
        <div class="marginHead">
          <div class="banner">
            <ul class="kv-item">
              <template v-for="(data,index) in slideImgs">
                <!--<li :class="active == data ? 'active' : '' "><img :src="'../../static/images/vic/banners/kv'+ data + '.png'"></li>-->
                <li :class="{active: slideActiveIndex == index}">
                  <img :src="'../../static/images/vic/banners/kv'+ data + '.png'">
                </li>
              </template>
            </ul>
            <ul class="kv-page">
              <template v-for="(data,index) in slideImgs">
                <li :class="{active: slideActiveIndex == index}" @click="switchSlide(index)"></li>
              </template>
            </ul>
          </div>
        </div>
      </div>
      <div class="nav">
        <div class="logo col-12">
          <ul>
            <li class="Cuslogo active">
              <div class="col-3"><img src="../../static/images/vic/index/AG.png"></div>
              <div class="col-3"><img src="../../static/images/vic/index/GD.png"></div>
              <div class="col-3"><img src="../../static/images/vic/index/PT.png"></div>
              <div class="col-3"><img src="../../static/images/vic/index/GENESIS.png"></div>
            </li>
            <li>
              <div class="col-3"><img src="../../static/images/vic/index/BBIN.png"></div>
              <div class="col-3"><img src="../../static/images/vic/index/ALLBET.png"></div>
              <div class="col-3"><img src="../../static/images/vic/index/OPUS.png"></div>
              <div class="col-3"><img src="../../static/images/vic/index/RUYI.png"></div>
            </li>
          </ul>
        </div>
        <div class="index_news">
          <div class="news col-12">
            <div class="container">
              <div class="col-12">
                <div class="index_news_mtitle col-12">
                  <p>NEWS</p><span>{{$t('label.latestNews')}}</span>
                </div>
                <template v-for="data in 2">
                  <div class="index_news_list">
                    <div class="news_unit">
                      <div class="date">
                        <span class="day">{{$t('news.' + data + '.day')}}</span>
                        <span class="year">{{$t('news.' + data + '.year')}}</span>
                      </div>
                      <div class="news_title" v-html="$t('news.' + data + '.list')"></div>
                      <router-link to="/news-detail#1" class="news_more1">{{$t('label.more')}}</router-link>
                    </div>
                  </div>
                </template>
                <router-link to="/news" class="news_more">{{$t('label.learnMore')}}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import commonMixin from '@/utils/commonMixin'
export default {
  name: 'Home',
  mixins: [commonMixin],
  mounted() {
    this.slideLoop();
  },
  methods: {
    slideLoop() {
      this._time = setInterval(this.next, 4000);
    },
    next() {
      if (this.slideActiveIndex + 1 >= this.slideImgs.length) {
        this.slideActiveIndex = 0;
      } else {
        this.slideActiveIndex++;
      }
    },
    switchSlide(index) {
      clearInterval(this._time);
      this.slideActiveIndex = index;
      this.slideLoop();
    },
  },
  data() {
    return {
      slideActiveIndex: 0,
      slideImgs:[1,2],
      _time: 0
    }
  },
}
</script>
