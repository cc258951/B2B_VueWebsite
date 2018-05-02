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
                    @click="activeClass(index,$t('information.content.' + pageShow ).length,$t('information.content'))">
                  <div :class="'icon-' + parseInt(index+1)"></div>
                  {{data}}
                </li>
              </template>
            </ul>
            <div>
              <h4>{{$t('information.newsTitle')}}</h4>
              <ul>
                <template v-for="data in $t('information.content.1')">
                  <ol class="h6"><router-link to="#">{{data.contentTitle}}</router-link></ol>
                </template>
              </ul>
            </div>
          </div>
        </div>
        <!--左側標題 END-->

        <!--預設頁面-->
        <div :class="contentActive == true ?'info-content col-9' :'hidden'">
          <ul class="col-12 active">
            <template v-for="(data,key) in objLength">
              <li v-for="(aa,index) in $t('information.content.'+ data).length"
                  :class="parseInt(key+1) === pageShow ? '' : 'hidden'"
                  @click="content(index,data)">
                key {{key}}
                data {{data}}
                index {{index}}

                <div class="hidden">{{$t('information.content.'+ data + '.' + index +'.id')}}</div>
                <div>
                  <p class="info-date">{{$t('information.content.'+ data + '.' + index +'.date')}}</p>
                  <p class="info-topTitle">{{$t('information.content.'+ data + '.' + index +'.Title')}}</p>
                </div>
                <img :src="'../../static/images/vic/information/title/content' + parseInt(key+1) + '-' + parseInt(index+1) + '.png'">
                <div>
                  <h5>{{$t('information.content.'+ data + '.' + index +'.contentTitle')}}</h5>
                  <h6>{{$t('information.content.'+ data + '.' + index +'.content')}}</h6>
                </div>
              </li>
            </template>
          </ul>
          <hr class="clear">
          <div class="info-more btn-style-2 color-style-2" @click="pageNext($t('information.content'))">
            {{$t('information.btn')}}
          </div>
        </div>
        <!--預設頁面END-->

        <!--open content-->
        <div :class="contentActive === true ?'hidden' :'info-content-open col-9'">
          <div>
            <h3>{{$t('information.content.' + pageShow + '[' + contentBlock + '].contentTitle')}}</h3>
            <p>
              <span>{{$t('information.content.' + pageShow + '[' + contentBlock + '].date')}}</span>
              <span>{{$t('information.content.' + pageShow + '[' + contentBlock + '].from')}}</span>
            </p>
            <img :src="'../../static/images/vic/information/content/infoblock'+ dataVal + '.png'">
            <h5 v-html="brTurn($t('information.content.' + pageShow + '[' + contentBlock + '].content'))" ></h5>
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
      activeClass(index,length,a) {
        var lengg = Object.keys(a).length;
        this.objLength = lengg;
        contentIndex = true;
        this.contentActive = contentIndex ;
        this.active = index;

        var infoLength = document.querySelectorAll('.info-content li').length;
        for (var i = 0; i <= infoLength - 1; i++) {
          var info = document.querySelectorAll('.info-content li')[i];
          var id = document.querySelectorAll('.info-content li div.hidden')[i];
          if (parseInt(id.innerHTML) === index) {
            info.className ='';
          } else {
            info.className = "hidden";
          }
        }
      },

      content(index,data) {
        this.contentBlock = index;
        contentIndex = !contentIndex;
        this.contentActive = contentIndex ;
        this.dataVal = data + '-' + parseInt(index+1);
      },
      pageNext(obj){
        var objLength = Object.keys(obj).length;
        this.objLength = objLength;
        if(this.currPage >= objLength ){
          this.currPage = 1;
          return this.currPage;
        }else {
          this.currPage = this.currPage+1;
        }
      },
      brTurn(br){
        var brContent = br.replace(/\n/g,"<br />");
        return brContent;
      }
    },
  }
</script>
