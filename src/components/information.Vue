<template>
  <div class="content">
    <div class="marginHead">
      <div class="slick-list col-12">
        <div class="col-3">
          <div class="infoMainbar">
            <ul>
              <template v-for="(data,index) in $t('information.title')">
                <li :class="active == index ? 'active':''" @click="activeClass(index,$t('information.content').length)">
                  <div :class="'icon-' + parseInt(index+1)"></div>
                  {{data}}
                </li>
              </template>
            </ul>
            <div>
              <h4>{{$t('information.newsTitle')}}</h4>
              <ul>
                <template v-for="data in $t('information.news')">
                  <ol class="h6"><router-link to="#">{{data}}</router-link></ol>
                </template>
              </ul>
            </div>
          </div>
        </div>
        <div :class="contentActive == true ?'info-content col-9' :'hidden'">
          <ul class="col-12">
            <template v-for="(data,index) in $t('information.content')">
              <li @click="content(index)">
                <div class="hidden">{{data.id}}</div>
                <div>
                  <p class="info-date">{{data.date}}</p>
                  <p class="info-topTitle">{{data.Title}}</p>
                </div>
                <img :src="'../../static/images/vic/information/content' + parseInt(index+1) + '.png'">
                <div>
                  <h5>{{data.contentTitle}}</h5>
                  <h6>{{data.content}}</h6>
                </div>
              </li>
            </template>
          </ul>
          <hr class="clear">
          <div class="info-more btn-style-2 color-style-2">
            {{$t('information.btn')}}
          </div>
        </div>

        <!--open content-->

        <div :class="contentActive == true ?'hidden' :'info-content-open col-9'">
          <div>
            <h3>{{$t('information.content[' + contentBlock + '].contentTitle')}}</h3>
            <p>
              <span>{{$t('information.content[' + contentBlock + '].date')}}</span>
              <span>{{$t('information.content[' + contentBlock + '].from')}}</span>
            </p>
            <img :src="'../../static/images/vic/information/infoblock-' + parseInt(contentBlock+1) + '.png'">
            <h5>{{$t('information.content[' + contentBlock + '].content')}}</h5>
            <ul>
              <template v-for="data in 4">
                <li>
                  <img :src="'../../static/images/vic/information/icon-' + data + '.png'">
                </li>
              </template>
            </ul>
          </div>
        </div>
        <!--content end-->

      </div>
    </div>
  </div>
</template>

<script>

  var contentIndex = true;
  import commonMixin from '@/utils/commonMixin'
  import mappingCodes from '../locals'
  export default {
    name: 'imformation',
    components: {
    },
    mixins: [commonMixin],
    data() {
      return {
        active:-1,
        contentActive:contentIndex,
        contentBlock:0
      }
    },
    methods: {
      activeClass(index,length) {
        contentIndex = true;
        this.contentActive = contentIndex ;
        this.active = index;

        for (var i = 0; i <= length - 1; i++) {
          var info = document.querySelectorAll('.info-content li')[i];
          var id = document.querySelectorAll('.hidden')[i];

          info.style.display = "block";

          if (id.innerHTML == index) {
            info.style.display = "block";
          } else {
            info.style.display = "none";
          }
        }
      },
      content(index) {
        this.contentBlock = index;
        contentIndex = !contentIndex;
        this.contentActive = contentIndex ;
      }
    },
  }
</script>
