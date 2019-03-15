<template>
    <div class="promote">
        <div class="promote-title border-bottom">
            <span class="promote-title-icon"></span>
            {{list.title}}
        </div>
        <div class="promote-content border-bottom" v-for="(item,index) of list.content" :key="index">
            <div class="promote-left">
                <h5 class="promote-content-tit">{{item.tit}}</h5>
                <div class="promote-content-price"><img src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png"/>{{item.tip}}</div>
                <div class="promote-label"><span v-for="(lb,i) of item.label" :key="i">{{lb}}</span></div>
            </div>
            <div class="promote-right">
                <div class="promote-sale">￥<b>{{item.price}}</b></div>
                <div class="promote-btn">预定</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailPromote',
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
.promote 
    background #fff
    position: relative;
    margin-bottom: .2rem;
    padding-left: .2rem;
    margin-bottom .2rem
    .promote-title 
        line-height .8rem
        font-size .32rem
        background #fff
        .promote-title-icon
            position relative
            left .06rem
            top .06rem
            display: inline-block
            width: .36rem
            height: .36rem
            background: url(/static/detailImg/icon1.png) 0 0 no-repeat
            background-size 100% 100%
            margin-right: .1rem
       

    .promote-content
        padding: .2rem .2rem .24rem 0
        display flex
        .promote-left
            display flex
            flex-direction column
            flex 1
            .promote-content-tit
                margin-right: .1rem
                line-height: .52rem
                padding: 0
                font-size: .3rem
            .promote-content-price
                height: .32rem
                color: #616161
                font-size: .24rem
                line-height: .32rem
                white-space: nowrap
                img 
                    display: inline-block
                    width: .2rem
                    max-height: .32rem
                    margin-right: .04rem
                    vertical-align: 0
            .promote-label
                display: inline-block
                margin-top: .08rem
                padding: 0 .04rem
                height: .32rem
                color: #00afc7
                font-size: .2rem
                line-height: .32rem
                white-space: nowrap
                span                 
                    display inline-block
                    border-color: #a5e4ec
                    border-radius: .08rem
                    border: 1px solid #e0e0e0
                    margin-right: .1rem
        .promote-right
            display flex
            flex-direction column
            .promote-sale
                color #ff9800 
                text-align center
                b  
                    margin-left: .04rem
                    font-size: .4rem
                    line-height: .4rem
            .promote-btn
                font-size .28rem
                height .6rem
                color #ffffff
                line-height .6rem
                border-radius .08rem
                background-image linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)
                text-align center
                width 1.6rem
</style>