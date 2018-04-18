<template>
  <div class="page">
		<div class="container">
			<div class="partner_list">
				<div class="partner_unit">
					<div class="partner_pic imgLiquidFill imgLiquid">
						<img src="/static/images/partner/partner_img1.png" alt="">
					</div>
					<div class="partner_info">
						<div class="partner_title">{{$t('partnerPage.box1.title')}}</div>
						<div class="partner_txt">{{$t('partnerPage.box1.content')}}</div>
					</div>
				</div>
				<div class="partner_unit">
					<div class="partner_pic imgLiquidFill imgLiquid">
						<img src="/static/images/partner/partner_img2.png" alt="">
					</div>
					<div class="partner_info">
						<div class="partner_title">{{$t('partnerPage.box2.title')}}</div>
						<div class="partner_txt">{{$t('partnerPage.box2.content')}}</div>
					</div>
				</div>
				<div class="partner_unit">
					<div class="partner_pic imgLiquidFill imgLiquid">
						<img src="/static/images/partner/partner_img3.png" alt="">
					</div>
					<div class="partner_info">
						<div class="partner_title">{{$t('partnerPage.box3.title')}}</div>
						<div class="partner_txt">{{$t('partnerPage.box3.content')}}</div>
					</div>
				</div>
				<div class="partner_unit">
					<div class="partner_pic imgLiquidFill imgLiquid">
						<img src="/static/images/partner/partner_img4.png" alt="">
					</div>
					<div class="partner_info">
						<div class="partner_title">{{$t('partnerPage.box4.title')}}</div>
						<div class="partner_txt">{{$t('partnerPage.box4.content')}}</div>
					</div>
				</div>
				<div class="partner_unit">
					<div class="partner_pic imgLiquidFill imgLiquid">
						<img src="/static/images/partner/partner_img5.png" alt="">
					</div>
					<div class="partner_info">
						<div class="partner_title">{{$t('partnerPage.box5.title')}}</div>
						<div class="partner_txt">{{$t('partnerPage.box5.content')}}</div>
					</div>
				</div>
				<div class="partner_unit">
					<div class="partner_pic imgLiquidFill imgLiquid">
						<img src="/static/images/partner/partner_img6.png" alt="">
					</div>
					<div class="partner_info">
						<div class="partner_title">{{$t('partnerPage.box6.title')}}</div>
						<div class="partner_txt">{{$t('partnerPage.box6.content')}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="partner_icon">
			<div class="container"><img src="/static/images/partner/partner_img7.png" alt=""></div>
		</div>
	</div>
</template>

<script>
import commonMixin from '@/utils/commonMixin'
export default {
  name: 'Partner',
	mixins: [commonMixin],
  data() {
    return {
    }
  },
	mounted() {
		$(".imgLiquidFill").imgLiquid();
	}
}
</script>

<style scoped>
</style>
