<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-hot :hotIcon="hotIcon" :hotList="hotList" :topList="topList"></home-hot>
        <home-recommend :recommendIcon="recommendIcon" :recommendList="recommendList" ></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
        <common-footer></common-footer>
        <common-copyright></common-copyright>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeHot from './components/Hot'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import CommonFooter from '@/components/footer/Footer'
import CommonCopyright from '@/components/footer/Copyright'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeHot,
        HomeRecommend,
        HomeWeekend,
        CommonFooter,
        CommonCopyright
    },
    data(){
        return {
            lastCity:'',
            hotIcon:'',
            hotList:[],
            iconList:[],
            recommendIcon:'',
            recommendList:[],
            topList:[],
            swiperList:[],
            weekendList:[]
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json?city=' + this.city)
                .then(this.getHomeInfoSucc)
                
        },
        getHomeInfoSucc (res) {
            if(res.status == 200){
                const obj = res.data
                const data = obj.data
                if(obj.ret && data){
                    this.hotIcon = data.hotIcon
                    this.hotList = data.hotList
                    this.topList = data.topList
                    this.iconList = data.iconList
                    this.recommendIcon = data.recommendIcon
                    this.recommendList = data.recommendList
                    this.swiperList = data.swiperList
                    this.weekendList = data.weekendList
                }
            }
        }
    },
    mounted () {
        this.getHomeInfo()
        this.lastCity = this.city
    },
    activated () {
        if(this.lastCity !== this.city){
            this.lastCity = this.city
            this.getHomeInfo()
        }
    },
}

</script>
    
<style lang="stylus">
body 
    touch-action pan-y
.home
    background #eee
</style>