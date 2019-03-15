<template>
    <div class="header">
        <div class="header-left">
            <a href="javascript:window.history.back();">
                <div class="iconfont back-icon">&#xe624;</div>                
            </a>
        </div>
        <router-link tag="div" to="/Search" class="header-input-link">
            <div class="header-input">
                <span class="iconfont">&#xe632;</span>
                输入城市经典游玩主题
            </div>
        </router-link>
        
        <router-link to="/city/home">
            <div class="header-right">
                {{city}}
                <span class="iconfont arrow-icon">&#xe6aa;</span>
            </div>
        </router-link>
        
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city'])
    },
}

</script>
    
<style lang="stylus" scoped>
// 1rem=html font-size=50px

@import '~@/assets/styles/varibles.styl'
.header
    height .86rem
    line-height .86rem
    display flex
    background $bgColor
    color #fff
    .header-left
        width .64rem
        float left
        .back-icon
            text-align center
            font-size .4rem
            color #fff
    .header-input-link 
        flex 1
        .header-input
            height .64rem
            line-height .64rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
            background #fff
            border-radius .1rem
            color #ccc
    .header-right
        min-width 1.04rem
        padding 0 0.1rem
        float right 
        text-align center
        color #fff
        .arrow-icon
            margin-left -.05rem 
            font-size .24rem
</style>