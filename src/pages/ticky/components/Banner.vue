<template>
    <div class="banner">
        <img class="banner-img" src="/static/tickyImg/banner.png" alt="">
        <h2 class="banner-title">
            <img src="/static/tickyImg/bannerH2.png" alt="">
        </h2>
        <router-link class="banner-router" to="/city/ticky">
            <div class="banner-city">
                <strong>{{city}}</strong>
                <span></span>
            </div>
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'TickyBanner',
    data () {
        return {
        };
    },
    computed: {
        ...mapState(['city'])
    },
}

</script>

<style lang="stylus" scoped>
.banner 
    width 100%
    height 0
    padding-bottom 47%
    position relative
    .banner-img
        width 100%
    .banner-title
        position: absolute;
        z-index: 2;
        top: 17.5%;
        left: 34%;
        width: 32%;
        img 
            width 100%
    .banner-router
        position: absolute
        z-index: 2
        top: 40.9%
        left: 0
        width: 100%
        text-align: center
        .banner-city
            display: inline-block
            position: relative
            height: .58rem
            padding: 0 .52rem 0 .2rem
            background: rgba(255,162,162,.4)
            color: #fff
            font-size: .3rem
            line-height: .58rem
            border-radius: .08rem
            &::before ,&::after
                content: ' '
                overflow: hidden
                position: absolute
                top: 50%
                margin-top: -.02rem
                width: .16rem
                height: .04rem
                background: rgba(255,255,255,.5)
            &::before 
                left: -.36rem
            &::after
                right: -.36rem
            span 
                overflow: hidden
                position: absolute
                top: 50%
                margin-top: -.1rem
                right: .2rem
                width: .24rem
                height: .18rem
                border-radius: 50%
                &::after 
                    overflow: hidden
                    content: ' '
                    position: absolute
                    top: .06rem
                    left: -.02rem
                    width: 0
                    height: 0
                    margin-top: -.02rem
                    border-width: .16rem .14rem 0
                    border-style: solid
                    border-color: #fff transparent transparent
                    transform: scale(.85)
</style>