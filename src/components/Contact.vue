<template>
  <div class="content">
    <div class="marginHead">
      <div class="banner">
        <div class="container textCenter">
          <div class="page_contact_mtitle page_mtitle">
            {{$t('contactPage.title')}}
          </div>
          <div class="col-6 contact_formBox">
            <!--<form action="#" class="form-horizontal contact_form">-->
              <!--<div class="form-group col-12">-->
                <!--<div class="col-6">-->
                  <!--<input :placeholder="$t('contactPage.name')" type="text" class="form-control">-->
                  <!--<p>{{ $t('contactPage.error[0]') }}</p>-->
                <!--</div>-->
                <!--<div class="col-6">-->
                  <!--<input placeholder="skype" type="text" class="form-control">-->
                  <!--<p>{{ $t('contactPage.error[1]') }}</p>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="form-group col-12">-->
                <!--<div class="col-6">-->
                  <!--<input placeholder="QQ" type="text" class="form-control">-->
                  <!--<p>{{ $t('contactPage.error[2]') }}</p>-->
                <!--</div>-->
                <!--<div class="col-6">-->
                  <!--<input :placeholder="$t('contactPage.wechat')" type="text" class="form-control">-->
                  <!--<p>{{ $t('contactPage.error[3]') }}</p>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="form-group col-12">-->
                <!--<div class="col-12">-->
                  <!--<input :placeholder="$t('contactPage.mail')" type="text" class="form-control">-->
                  <!--<p>{{ $t('contactPage.error[4]') }}</p>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="form-group col-12">-->
                <!--<div class="col-12">-->
                  <!--<input :placeholder="$t('contactPage.SpecificMatters')" type="text" class="form-control form-textarea">-->
                  <!--<p>{{ $t('contactPage.error[5]') }}</p>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="form-group col-12">-->
                <!--<div class="col-4">-->
                  <!--<input :placeholder="$t('contactPage.Verification')" class="form-control">-->
                  <!--<p>{{ $t('contactPage.error[6]') }}</p>-->
                <!--</div>-->
                <!--<div class="col-4"><img src="../../static/images/vic/static/captcha.png"></div>-->
              <!--</div>-->
              <!--<div class="form-group col-12">-->
                <!--<div class="col-4"><input type="button" class="btn sendBtn form-control" :value="$t('contactPage.sendOut')"></div>-->
              <!--</div>-->
            <!--</form>-->
            <form class="form-horizontal contact_form" @submit.prevent="validateBeforeSubmit">
              <div class="form-group">
                <div class="col-6">
                  <input type="text" class="form-control" name="name" v-model="contact.name" v-validate="'required|max:20'" :placeholder="$t('contactPage.name')" maxlength="20">
                  <p>
                    <i v-show="errors.has('name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                  </p>
                </div>
                <div class="col-6">
                  <input type="text" class="form-control" v-model="contact.Skpye" name="Skype" v-validate="'required|max:20'" placeholder="Skype" maxlength="20">
                  <p>
                    <i v-show="errors.has('Skype')" class="fa fa-warning"></i>
                    <span v-show="errors.has('Skype')" class="help is-danger">{{ errors.first('Skype') }}</span>
                  </p>
                </div>
              </div>
              <div class="form-group">
                <div class="col-6">
                  <input type="text" class="form-control" v-model="contact.qq" name="qq" v-validate="'required|max:100'" placeholder="QQ" maxlength="100">
                  <p>
                    <i v-show="errors.has('qq')" class="fa fa-warning"></i>
                    <span v-show="errors.has('qq')" class="help is-danger">{{ errors.first('qq') }}</span>
                  </p>
                </div>
                <div class="col-6">
                  <input type="text" class="form-control" v-model="contact.wechat" name="wechat" v-validate="'required|max:100'" :placeholder="$t('contactPage.wechat')" maxlength="100">
                  <p>
                    <i v-show="errors.has('wechat')" class="fa fa-warning"></i>
                    <span v-show="errors.has('wechat')" class="help is-danger">{{ errors.first('wechat') }}</span>
                  </p>
                </div>
              </div>
              <div class="form-group">
                <div class="col-12">
                  <input name="email" v-model="contact.email" v-validate="'required|email|max:100'" class="form-control" :placeholder="$t('contactPage.email')" maxlength="100">
                  <p>
                    <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                  </p>
                </div>
              </div>
              <div class="form-group">
                <div class="col-12">
                  <textarea class="form-control form-textarea" rows="6" v-model="contact.message" name="message" v-validate="'required|max:500'" :placeholder="$t('contactPage.SpecificMatters')"></textarea>
                  <p>
                    <i v-show="errors.has('message')" class="fa fa-warning"></i>
                    <span v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</span>
                  </p>
                </div>
              </div>
              <div class="form-group">
                <div class="col-4">
                  <input type="text" class="form-control"
                         v-model="contact.code"
                         name="code"
                         v-validate="'required|alpha_num|min:5|max:5'"
                         :placeholder="$t('label.code')"
                         maxlength="5"
                  >
                  <p>
                    <i v-show="errors.has('code')" class="fa fa-warning"></i>
                    <span v-show="errors.has('code')" class="help is-danger">{{ errors.first('code') }}</span>
                  </p>
                </div>
                <div class="col-4 code-img" :title="$t('conactPage.changeCaptcha')">
                  <img id="captcha-img" src="/static/back/captcha.php" @click="refreshCaptcha">
                </div>
              </div>
              <div class="form-group">
                <div class="col-4">
                  <button type="submit" class="btn sendBtn form-control">{{$t('label.submit')}}</button>
                </div>
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
                <span>. {{$t('contactPage.email')}} .</span>
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
        skype: '',
        qq: '',
        wechat: '',
        email: '',
        message: '',
        code: '',
        locale: localStorage.lang,
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
          if (response.body.result === true) {
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
    },

  }
}
</script>

<style scoped>
  #captcha-img{
    cursor: pointer;
  }
</style>
