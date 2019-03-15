<template>
    <div class="list">
        <ul>
            <li class="list-group">
                <div class="list-info">
                    <div class="list-img">
                        <img src="/static/sightImg/pic1.jpg" alt="">
                    </div>
                    <div class="list-detail">
                        <h3 class="list-name">大唐芙蓉园(5A)</h3>
                        <p class="list-comment"><span>*****</span>26305条评论</p>
                        <p class="list-price"><span>￥<em>89</em></span>起<strong>曲江旅游度假区</strong></p>
                        <div class="list-taglist">
                            <span class="list-tag">
                                <em>赠券</em>
                            </span>
                            <span class="list-tag list-tag1">
                                <em>园林第一名</em>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="list-ticket border-top">
                    <h4 class="list-ticket-name">大唐芙蓉园新春灯会不限人群全天门票</h4>
                    <span class="list-ticket-price">￥<em>94.8</em></span>
                </div>
            </li>
    
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SightList',
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
    background #eee 
    .list-group
        margin-bottom: .2rem;
        background: #fff;
        .list-info
            overflow: hidden;
            padding: .2rem .22rem;
            .list-img
                float: left;
                background none
                img 
                    width: 2rem;
                    height: 2rem;
                    vertical-align middle
            .list-detail
                position: relative;
                overflow: hidden;
                padding-left: .2rem;
                .list-name 
                    overflow: hidden;
                    height: .44rem;
                    color: #212121;
                    font-size: .32rem;
                    line-height: .44rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                .list-comment
                    margin-top: .14rem
                    font-size .24rem
                    span
                        display inline-block 
                        margin-right .3rem
                        height .3rem
                        font-size .5rem
                        vertical-align middle
                        margin-bottom .1rem
                        color #ff8300
                .list-price
                    font-size .24rem
                    position relative
                    margin-top .22rem
                    color #616161
                    font-size .24rem
                    line-height .4rem
                    span 
                        color #ff8300
                        em 
                            font-size .4rem
                    strong 
                        position absolute
                        right .24rem
                        bottom 0
                .list-taglist 
                    margin-top: .18rem;
                    font-size: 0;
                    color #000
                    .list-tag 
                        margin-right .08rem
                        color #ff8a00
                        display inline-block
                        margin-top .04rem
                        height .32rem
                        position relative
                        em      
                            display: inline-block;
                            height: .336rem;
                            font-size: .24rem;
                            line-height: .336rem;
                            transform: scale(.83);
                            &::before
                                content '' 
                                position absolute
                                border-radius .08rem
                                width 200%
                                height 200%
                                transform scale(.5)
                                box-sizing border-box
                                top 0
                                left 0
                                border 1px solid #fa0
                                transform-origin 0 0
                    .list-tag1
                        background: #f0fbfd
                        color: #00bcd4
                        em::before
                            content 'a' 
                            border none
                            
        .list-ticket 
            position: relative;
            height: .96rem;
            margin-left: .2rem;
            .list-ticket-name
                overflow: hidden;
                margin-right: 1.4rem;
                height: .96rem;
                color: #616161;
                font-size: .28rem;
                line-height: .96rem;
                white-space: nowrap;
                text-overflow: ellipsis;
            .list-ticket-price
                overflow: hidden;
                position: absolute;
                top: 0;
                right: .2rem;
                width: 1.2rem;
                height: .96rem;
                color: #ff8300;
                font-size: .2rem;
                line-height: .96rem;
                text-align: right;
                em  
                    font-size: .32rem;
</style>