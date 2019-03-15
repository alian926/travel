<template>
    <div class="list">
        <ul>
            <li class="list-item">
                <div class="list-img">
                    <img src="/static/oneImg/pic1.jpg" alt="">
                </div>
                <div class="list-info">
                    <h4 class="list-name">【去哪儿精选】西安兵马俑+华清宫骊山一日游  赠接机午餐耳麦</h4>
                    <div class="list-taglist">
                        <span class="list-tag1">西安出发</span>
                        <span class="list-tag2">无自费</span>
                        <span class="list-tag2">无购物</span>
                    </div>
                    <div class="list-sale">
                        <span class="list-cost">已售16227</span>
                        <span class="list-price"><b>￥<em>208</em></b>起</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'OneList',
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
.list 
    background #ffffff
    .list-item 
        display flex 
        positon relative
        width 100%
        .list-img
            background none 
            margin .2rem
            position relative
            width 1.6rem
            height 1.6rem
            img 
                width 1.6rem
                height 1.6rem
                opacity 1
                transition opacity  400ms
                vertical-align middle
        .list-info
            padding: .2rem .2rem .2rem 0;
            height: 1.6rem;
            overflow: hidden;
            .list-name  
                line-height: .36rem;
                font-size: .3rem;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            .list-taglist
                position: relative;
                top: .06rem;
                overflow: hidden;
                max-height: .58rem;
                margin-right: 1rem;
                padding-top: .06rem;
                line-height: .24rem;
                font-size: 0;
                .list-tag1
                    display: inline-block;
                    padding: 0 .1rem;
                    font-size: .24rem;
                    color: #00bcd4;
                .list-tag2 
                    display: inline-block;
                    padding: 0 .1rem;
                    font-size: .24rem;
                    color: #616161;
                    position relative
                    &:before
                        content  ''
                        position absolute
                        border 1px solid #cccccc
                        transform scaleX(.5)
                        top 0
                        left -0.05rem
                        transform-origin 100% 0
                        width 1px
                        height 100%
            .list-sale
                padding-top .3rem
                width: 100%;
                font-size: 0;
                color: #9e9e9e;
                .list-cost
                    padding: 0 .1rem;
                    font-size: .22rem;
                .list-price
                    float right
                    height .32rem
                    color #9e9e9e 
                    text-align right
                    font-size .22rem
                    b
                        font-size: .22rem;
                        font-weight: bold;
                        color: #ff8300;  
                        em 
                            font-size: .32rem;
                            padding-left: .04rem;  
</style>