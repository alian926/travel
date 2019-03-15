<template>
    <div>
        <a href="javascript:window.history.back();" class="header-abs" v-show="showAbs">
            <div class="header-abs-back">
                <span class="iconfont ">&#xe624;</span>
            </div>
        </a>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <a  href="javascript:window.history.back();"><div class="iconfont header-fixed-back">&#xe624;</div></a>  
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        };
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            if(top > 60){
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {
                    opacity
                }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated () {
        window.removeEventListener('scroll',this.handleScroll)
    },
}

</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header-abs 
    position absolute 
    left .1rem
    top .1rem
    position absolute
    width .72rem
    height .72rem
    line-height .72rem
    border-radius 100%
    background rgba(0,0,0,.7)
    text-align center
    color #fff
    border-radius .4rem
    .header-abs-back
        font-weight 800
        font-size .32rem
.header-fixed
    z-index 5
    overflow hidden
    position fixed
    top 0
    left 0
    right 0
    height  .68rem
    font-size .32rem
    text-align center
    line-height .86rem
    color #ffffff
    background $bgColor
    .header-fixed-back
        position absolute
        top 0 
        left 0
        width .64rem
        text-align center
        color #fff
        font-size .4rem
</style>