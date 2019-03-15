<template>
    <div class="info">
        <div class="info-top">
            <div class="info-discuss">
                <div>
                    <span class="info-score">{{list.score}}</span><span class="info-text">分</span>
                    <span class="info-desc">{{list.desc}}</span>
                </div>
                <div>
                    <span class="info-total">{{list.discuss}}条评论</span>
                    <span class="info-total">{{list.tip}}条攻略</span>
                    <span class="iconfont info-arrow-icon total-arrow">&#xe624;</span>                    
                </div>
            </div>
            <div class="info-intro border-left">
                <div>
                    <span class="info-sight">景点简介</span>
                </div>
                <div>
                    <span class="info-sight-card">开放时间、贴士</span>
                    <span class="iconfont info-arrow-icon total-arrow">&#xe624;</span>                    
                </div>
            </div>
        </div>
        <div class="info-bottom border-top">        
            <span class="info-icon">⊙</span>
            <b>{{list.address}}</b>
            <span class="iconfont info-arrow-icon">&#xe624;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailBaseInfo',
    props:{
        list:Object
    },
    data () {
        return {
        };
    },
    components: {},
    computed: {},
    methods: {}
}

</script>

<style lang="stylus" scoped>
.info 
    padding .1rem .2rem 0 .2rem
    position relative
    top -.1rem
    margin-bottom .1rem
    border-radius .1rem .1rem 0 0
    background #fff
    .info-top
        display flex
        padding-top .1rem
        padding-bottom .2rem
        .info-discuss
            flex 1
            position relative
            .info-score, .info-text ,.info-desc
                font-size: .44rem
                color: #ff8300
                line-height: .44rem
            .info-text ,.info-desc
                font-size .28rem
            .info-desc
                margin-left: .2rem
            .info-total 
                font-size: .24rem
                color: #9e9e9e
                line-height: .32rem
                margin-right: .2rem
        .total-arrow
            position absolute
            bottom .3rem
            right .2rem
        .info-intro
            flex 1
            position relative
            .info-sight 
                font-size: .28rem
                color: #212121
                line-height: .48rem
                padding-left: .3rem
            .info-sight-card
                color: #9e9e9e
                font-size: .24rem
                padding-left: .3rem
    .info-bottom 
        display flex
        align-items center
        padding .2rem 0
        line-height .36rem
        color #212121
        .info-icon 
            padding-right .2rem
        b  
            flex 1
.info-arrow-icon
    display block
    font-size .24rem
    margin-left .1rem
    transform rotateY(180deg)
    font-weight 800
</style>