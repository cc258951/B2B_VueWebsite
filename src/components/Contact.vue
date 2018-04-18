<template>
  <div class="content">
    <div class="marginHead">
      <div class="banner">
        <div class="container textCenter">
          <div class="page_contact_mtitle page_mtitle">
            {{$t('contactPage.title')}}
          </div>
          <div class="col-6 contact_formBox">
            <form action="#" class="form-horizontal contact_form">
              <div class="form-group col-12">
                <div class="col-6"><input  :placeholder="$t('contactPage.name')" type="text" class="form-control"></div>
                <div class="col-6"><input placeholder="skype" type="text" class="form-control"></div>
              </div>
              <div class="form-group col-12">
                <div class="col-6"><input placeholder="QQ" type="text" class="form-control"></div>
                <div class="col-6"><input :placeholder="$t('contactPage.wechat')" type="text" class="form-control"></div>
              </div>
              <div class="form-group col-12">
                <div class="col-12"><input :placeholder="$t('contactPage.mail')" type="text" class="form-control"></div>
              </div>
              <div class="form-group col-12">
                <div class="col-12"><input :placeholder="$t('contactPage.SpecificMatters')" type="text" class="form-control form-textarea"></div>
              </div>
              <div class="form-group col-12">
                <div class="col-4"><input :placeholder="$t('contactPage.Verification')" class="form-control"></div>
                <div class="col-4"><img src="../../static/images/vic/static/captcha.png"></div>
              </div>
              <div class="form-group col-12">
                <div class="col-4"><input type="button" class="btn sendBtn form-control" :value="$t('contactPage.sendOut')"></div>
              </div>
            </form>
          </div>
          <div class="col-6 contact_msg">
            <img src="../../static/images/vic/static/contact.png">
            <div class="">
              <div class="col-6">
                <span>. {{$t('contactPage.wechat')}} .</span>
                <span>pharaoh-gaming</span>
              </div>
              <div class="col-6">
                <span>. QQ .</span>
                <span>3304887544</span>
              </div>
              <div class="col-6">
                <span>. {{$t('contactPage.mail')}} .</span>
                <span>pharaoh888gaming@gmail.com</span>
              </div>
              <div class="col-6">
                <span>. Skype .</span>
                <span>pharaoh888gaming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Router from '../router';
import commonMixin from '@/utils/commonMixin';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

export default {
  name: 'Contact',
  mixins: [commonMixin],
  data() {
    return {
      contact: {
        name: '',
        phone: '',
        qq: '',
        wechat: '',
        email: '',
        message: '',
        code: '',
        locale: localStorage.lang
      }
    }
  },
  methods: {
    refreshCaptcha() {
      var date = new Date();
      document.getElementById("captcha-img").src = '/static/back/captcha.php' + '?v=' + date.getTime();
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then(() => {
        this.$http.post('/static/back/mail.php', this.contact).then((response) => {
          if (response.body.result == true) {
            swal(
              'Success',
              response.body.messages,
              'success'
            ).then(function () {
              Router.push('/');
            })
          } else {
              swal(
                'Oops...',
                response.body.messages,
                'error'
              )
          }
        }, (response) => {
          swal(
            'Oops...',
            'system error',
            'error'
          )
        });
      }).catch(() => {
        swal(
          'Oops...',
          'Correct them errors!!',
          'error'
        )
      });
    }
  }
}
</script>

<style scoped>

</style>
