import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import NewsDetail from '@/components/NewsDetail'
import About from '@/components/About'
import Product from '@/components/Product'
import Contact from '@/components/Contact'
import Website from '@/components/Website'
import Api from '@/components/Api'
import ApiDetail from '@/components/ApiDetail'
import service from '@/components/service'
import backSystem from '@/components/backSystem'
import Wboard from '@/components/Wboard'
import information from '@/components/information'
import finance from '@/components/finance'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/news-detail',
      name: 'news-detail',
      component: NewsDetail
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/website',
      name: 'website',
      component: Website
    },
    {
      path: '/api',
      name: 'api',
      component: Api
    },
    {
      path: '/apiDetail',
      name: 'apiDetail',
      component: ApiDetail
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/backSystem',
      name: 'backSystem',
      component: backSystem
    },
    {
      path: '/Wboard',
      name: 'Wboard',
      component: Wboard
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/finance',
      name: 'finance',
      component: finance
    },
  ]
})
