<template>
  <div class="content">
    <div class="marginHead">
      <div class="slick-list col-12">

        <!--左側標題-->
        <div class="col-3">
          <div class="infoMainbar">
            <ul>
              <template v-for="(data,index) in $t('information.title')">
                <li :class="active == index ? 'active':''"
                    @click="activeClass(index,$t('information.content').length,$t('information.content'))">
                  <div :class="'icon-' + parseInt(index+1)"></div>
                  {{data}}
                </li>
              </template>
            </ul>
            <div>
              <h4>{{$t('information.newsTitle')}}</h4>
              <ul>
                <template v-for="(data,index) in 6">
                  <ol class="h6"><router-link to="#">{{$t('information.content['+ index + '].contentTitle')}}</router-link></ol>
                </template>
              </ul>
            </div>
          </div>
        </div>
        <!--左側標題 END-->

        <!--預設頁面-->
        <div :class="contentActive == true ?'info-content col-9' :'hidden'">
          <ul class="col-12 active">
            <template v-for="(data,key) in $t('information.content').length">
              <li @click="content(data,key)" :class="dataLength <= $t('information.content').length ? a($t('information.content').length,key) : '' ">
                <div class="hidden">{{$t('information.content[' + key + '].id')}}</div>
                <div>
                  <p class="info-date">{{$t('information.content[' + key + '].date')}}</p>
                  <p class="info-topTitle">{{$t('information.content[' + key + '].Title')}}</p>
                </div>
                <img :src="'../../static/images/vic/information/title/content' + parseInt(key+1) + '.png'">
                <div>
                  <h5 class="limitText">{{$t('information.content[' + key + '].contentTitle')}}</h5>
                  <!--<h6 :="limitText($t('information.content[' + key + '].content'))">{{$t('information.content[' + key + '].content')}}</h6>-->
                  <h6 style="padding-top: 10px;">
                    {{$t('information.content[' + key + '].content').substr(0,39)+ ' ... '}}
                  </h6>
                </div>
              </li>
            </template>
          </ul>
          <hr class="clear">
          <div class="info-more btn-style-2 color-style-2" @click="pageNext($t('information.content'),$t('information.content').length)">
            {{$t('information.btn')}}
          </div>
        </div>
        <!--預設頁面END-->

        <!--open content-->
        <div :class="contentActive === true ? 'hidden' :'info-content-open col-9'">
          <div>
            <h3>{{$t('information.content[' + contentBlock + '].contentTitle')}}</h3>
            <p>
              <span>{{$t('information.content[' + contentBlock + '].date')}}</span>
              <span>{{$t('information.content[' + contentBlock + '].from')}}</span>
            </p>
            <img :src="'../../static/images/vic/information/content/'+ dataVal + '.png'">
            <h5 v-html="brTurn($t('information.content[' + contentBlock + '].content'))" ></h5>
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
        contentBlock:0,
        currPage: 1,
        objLength:3,
        dataVal:'',
        dataLength:6,
      }
    },
    computed: {
      pageShow:function () {
        return this.currPage;
      },
      obj:function(){
        return this.objLength;
      },
    },
      methods: {
        activeClass(index,length,content) {
          contentIndex = true;
          this.contentActive = contentIndex ;
          this.active = index;
          for (var i = 0; i <= length - 1; i++) {
            var info = document.querySelectorAll('.info-' + 'content li')[i];
            var id = document.querySelectorAll('.info-content li div.hidden')[i];
            if(index === parseInt(content[i].id)){
              info.className ='';
            } else {
              info.className ='hidden';
            }
  //          var info = document.querySelectorAll('.info-content li')[i];
  //          var id = document.querySelectorAll('.info-content li div.hidden')[i];
  //
  //          if (parseInt(id.innerHTML) === index) {
  //            info.className ='';
  //          } else {
  //            info.className = "hidden";
  //          }
          }
        },
        a(length,key){
          for (var i=0 ; i<= length -1 ; i++){
            if( key >= this.dataLength){
              return 'hidden';
            }else{
              return '';
            }
          }
        },
        content(data,key) {
          this.contentBlock = data;
          contentIndex = !contentIndex;
          this.contentActive = contentIndex ;
          this.dataVal = data;
        },
        pageNext(obj,length){
          if(this.dataLength>=length){
            this.dataLength = length;
          }else{
            this.dataLength = this.dataLength+3;
          }
          for (var i = 0; i <= this.dataLength - 1; i++) {
            var info = document.querySelectorAll('.info-content li')[i];
            info.className ='';
          }
        },
        brTurn(br){
          var brContent = br.replace(/\n/g,"<br />");
          return brContent;
        },
      },
    }
</script>
