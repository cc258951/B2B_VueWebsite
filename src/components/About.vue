<template>
  <div class="content">
    <div class="banner">
      <div class="marginHead">
        <ul class="block textCenter">
          <template v-for="(data,index) in $t('about')">
            <li :class="active === index + 1 ? 'active' : unactiveClass"
                @mouseover="mouseOver(index + 1)"
                @mouseout="mouseOut(index + 1)"
            >
              <div :class="[active === index + 1 ? 'blockTitle' : 'blockTitle active']">
                <h2 class="font-style-1">{{ data.name }}</h2>
              </div>
              <div :class="[active === index + 1 ? 'blockContent active' : 'blockContent']">
                <h4 class="textLeft">
                  {{ data.content }}
                  <img src="../../static/images/vic/static/video_play.png"
                       class="vedioImg"
                       v-if="data.content == ''"
                       @click="playVideo()"
                  >
                  <video class="home-video" preload loop controls v-if="data.content == ''">
                    <source src="../../static/images/vic/vedio/G2E_Pharaoh.mp4" type="video/mp4">
                    {{$t('homePage.notplaying')}}
                  </video>
                </h4>
              </div>
            </li>
          </template>
          <hr class="clear">
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import commonMixin from '@/utils/commonMixin'
export default {
  name: 'About',
	mixins: [commonMixin],
  data() {
    return {
      active: 0,
    }
  },
  computed: {
    unactiveClass() {
      const { active } = this;
      if (active !== 0) {
        return 'unactive';
      }
      return ''
    }
  },
  methods: {
    mouseOver: function(index){
      this.active = index;
    },
    mouseOut: function(index){
      this.active = 0
    },
    playVideo() {
      document.querySelector(".vedioImg").style.display = 'none';
      var video = document.querySelector('.home-video');
      video.style.display = 'block';
      console.log(video.style.display);
      video.play();
    },
  }
}
</script>

