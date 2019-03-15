import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Ticky from '@/pages/ticky/Ticky'
import Search from '@/pages/search/Search'
import Rank from '@/pages/rank/Rank'
import Sight from '@/pages/sight/Sight'
import One from '@/pages/one/One'
import Mainnav from '@/pages/mainnav/Mainnav'
import Train from '@/pages/train/Train'
import Flight from '@/pages/flight/Flight'
import Hotel from '@/pages/hotel/Hotel'

// @是指src目录
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'MainNav',
      component:Mainnav
    },
    // {
    //   path: '/',
    //   redirect:"/home"
    // },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/city/:go',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },{
      path: '/ticky',
      name: 'Ticky',
      component: Ticky
    },{
      path: '/search',
      name: 'Search',
      component:Search
    },{
      path: '/rank',
      name: 'Rank',
      component:Rank
    },{
      path: '/sight',
      name: 'Sight',
      component:Sight
    },{
      path: '/one',
      name: 'One',
      component:One
    },{
      path: '/train',
      name: 'Train',
      component:Train
    },{
      path: '/flight',
      name: 'Flight',
      component:Flight
    },{
      path: '/hotel',
      name: 'Hotel',
      component:Hotel
    }
  ],
  scrollBehavior(to,from,savedPosition){
    return {x:0,y:0}
  }
})
