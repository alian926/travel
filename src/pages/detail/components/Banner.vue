<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="bannerImg" 
            alt="" >
        <div class="banner-info">
            <div class="banner-title">{{sightName}}</div>    
            <div class="banner-video">视频<span class="iconfont back-icon">&#xe624;</span></div>
        </div>
        <div class="banner-num"><span>口</span><b>52</b></div>
        
    </div>
    <fade-animation>
        <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
    name: 'DetailBanner',
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array
    },
    data () {
        return {
            showGallary:false,
            // imgs:["/static/detailImg/ban1.jpg",
            //     "/static/detailImg/ban2.jpg",
            //     "/static/detailImg/ban3.jpg",
            //     "/static/detailImg/ban4.jpg"
            //     ]
        };
    },
    components: {
        CommonGallary,
        FadeAnimation
    },
    computed: {},
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    }
}

</script>

<style lang="stylus" scoped>
.banner 
    position relative
    overflow hidden 
    height 0
    padding-bottom 55%
    .banner-img 
        width 100%
    .banner-info 
        display flex
        align-items center
        position absolute
        left 0
        right 0
        bottom 0rem
        line-height 1.1rem
        text-shadow 0 1px 2px rgba(0,0,0,.7)
        background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.5))
        .banner-title 
            flex 1
            font-size .36rem
            padding 0 .2rem
            color #fff
        .banner-video
            display flex
            padding 0 .2rem
            line-height .4rem
            height .4rem
            border-radius .2rem
            color #fff
            font-size .36rem
            .back-icon
                display block
                margin-left .1rem
                transform rotateY(180deg)
                font-weight 800
    .banner-num
        position absolute
        bottom .86rem
        left .2rem
        width 1.2rem
        height .4rem
        line-height .4rem
        text-align center
        background rgba(0,0,0,.5)
        color #fff
        font-size .24rem
        border-radius .2rem
        span 
            font-weight 800
        b  
            margin-left .1rem

</style>