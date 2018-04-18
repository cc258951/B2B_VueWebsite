<template>
<footer class="footer">
    <div class="container textCenter">
      <div class="col-4 footer_left">
        <p class="footerTitle">PHARAOH GAMING</p>
        <div class="footer_partner_icon">
          <img src="../../../static/images/vic/static/icon1.png">
          <img src="../../../static/images/vic/static/icon2.png">
          <img src="../../../static/images/vic/static/icon3.png">
        </div>
      </div>
      <div class="col-8 footer_nav">
        <ul>
          <li><a><router-link to="/">{{$t('menu.home[0]')}}</router-link></a></li>
          <li><a><router-link to="/about">{{$t('menu.about[0]')}}</router-link></a></li>
          <li><a><router-link to="/product">{{$t('menu.product[0]')}}</router-link></a></li>
          <li><a><router-link to="/contact">{{$t('menu.contact[0]')}}</router-link></a></li>
        </ul>
        <ul class="community">
          <li>{{$t('footer.wechat')}}<br>pharaoh-gaming</li>
          <li>{{$t('footer.email')}}<br>pharaoh888gaming@gmail.com</li>
          <li>Skype<br>pharaoh888gaming</li>
          <li>{{$t('footer.QQ')}}<br>3304887544</li>
        </ul>
      </div>
      <div class="col-12 copyright">
        Copyright © 2014 Pharaoh Gaming All rights reserved
      </div>
    </div>
  </footer>
</template>

<script>
import commonMixin from '@/utils/commonMixin'
export default {
  name: "Footer",
  mixins: [commonMixin],
}
</script>
