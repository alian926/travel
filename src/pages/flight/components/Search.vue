<template>
    <div class="search">
        <ul class="search-nav">
            <li class="nav-item active">国内</li>
            <li class="nav-item">国际/港澳台</li>
            <li class="nav-item">往返</li>
        </ul>
        <div class="search-input">
            <div class="address add-left">北京</div>
            <img src="/static/flightImg/icon2.png" alt="">
            <div class="address add-right">上海</div>
        </div>
        <div class="search-time">
            <div class="search-time-input">03月06日<span>周三</span>
            </div>
        </div>
        <div class="search-filter">
            <div class="search-desc">选择舱位</div>
            <div class="r-ct">
                <div class="search-filter-btn">
                    <div class="handle"></div>
                </div>
            </div>
        </div>
        <div class="search-commit">
            <div class="btn">搜索</div>
        </div>
        <div class="my">
            <img src="/static/flightImg/icon3.png">
            <span class="my-title">我的订单</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FlightSearch',
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
.search
    position relative
    background #fff 
    font-size 18px
    text-align center
    width 94.5%
    margin 0 auto 
    margin-top -95px
    padding 0 .4rem
    box-sizing border-box
    .search-nav
        height .88rem
        background #ffffff
        display flex 
        justify-content center
        align-items center
        .nav-item 
            flex 1
            color #9e9e9e
            text-align center
            height .88rem
            line-height .88rem
            font-size 14px
            position relative
        .active
            font-weight bolder
            color #00bcd4
            &:after 
                content ''
                position absolute
                bottom 1px
                left 50%
                display block
                margin-left -14px
                width 28px
                height 4px
                background #00bcd4
                border-radius 4px
                z-index 1
    .search-input 
        display flex
        justify-content space-between
        align-items center
        height 1.2rem
        .address
            flex 1
            font-size .48rem
            line-height .9rem
            font-weight normal 
            color #212121
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
        .add-left
            text-align left 
        .add-right 
            text-align right
            
        img     
            width 1rem
            height .9rem
    .search-time 
        text-align left 
        font-size: 20px
        line-height: 1.2rem
        height: 1.2rem
        background: #fff
        span 
            color: #888
            font-size: 15px
    .search-filter
        display flex 
        position relative
        height 1.2rem
        line-height 1.2rem
        .search-desc
            text-align left 
            color #888
            font-size 15px
            flex 1
        .r-ct
            flex 1
            display flex
            justify-content flex-end
            align-items center 
        .search-filter-btn
            display: inline-block;
            position: relative;
            width: 1rem;
            height: .6rem;
            padding: .01rem;
            border-radius: .32rem;
            background-color: #ccc;
            vertical-align: middle;
            .handle 
                position: absolute;
                z-index: 1000;
                top: 1px;
                left: 1px;
                width: .56rem;
                height: .56rem;
                border-radius: 50%;
                background-color: #fff;
                box-shadow: 0 1px 3px rgba(0,0,0,0.3);
                transition: transform .1s ease-out;
                &:after 
                    display none
                    position: absolute;
                    left: .15rem;
                    content: " ";
                    width: .34rem;
                    height: .28rem;
                    box-sizing border-box
                    background-color: #fafafa;
                    border-radius: 0 .15rem .15rem 0;
                    transition: transform .13s ease-out;
    .search-commit
        background #fff 
        padding 10px 0 17px 0
        .btn
            border-radius 44px
            background-color: #ff9800
            height: 40px
            line-height: 40px
            color: #fff
            font-size 18px
            font-weight bold
    .my 
        height .8rem
        display flex 
        justify-content center
        align-items center
        img
            width .5rem
        .my-title
            font-size 12px
            letter-spacing 0
            color #9e9e9e 
</style>