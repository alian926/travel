<template>
    <div class="main">
        <ul class="main-nav">
            <li class="flight">
                <a href="javascript:;">
                    <span class="icon"></span>
                    <b>机票</b>
                </a>
            </li>
            <li class="hotel">
                <a href="javascript:;">
                    <span class="icon"></span>
                    <b>酒店</b>
                </a>
            </li>
            <li class="apartment">
                <a href="javascript:;">
                    <span class="icon"></span>
                    <b>公寓</b>
                </a>
            </li>
            <li class="more">
                <a href="javascript:;">
                    <span class="icon"></span>
                    <b>更多</b>
                </a>
            </li>
        </ul>
        <ul class="footer-nav">
            <li>
                <a href="javascript:;">登录</a>
            </li>
            <li>
                <a href="javascript:;">我的订单</a>
            </li>
            <li>
                <a href="javascript:;">最近浏览</a>
            </li>
            <li>
                <a href="javascript:;">关于我们</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}

</script>

<style lang="stylus" scoped>
.main
    background #f3f3f3
    .main-nav
        overflow hidden
        position relative
        width 300px
        height 25px
        margin 0 auto
        padding 10px 10px 0 10px
        overflow hidden
        li 
            margin 0px
            padding-left 10px
            height 31px
            width 65px
            float left
            position relative
            background none
            .icon   
                float left
                width 22px
                height 22px
                background url(/static/commonImg/nav.png) 0 0 no-repeat
                background-size 175px 50px
            b
                float left
                display inline-block
                color #9e9e9e
                margin 3px 0 0 5px
                border-bottom 1px solid #acacac
                font-size 12px
        .hotel 
            .icon 
                background-position -25px 0
        .apartment
            .icon
                background-position -150px 0px
            &::after 
                content ''
                height 10px
                width 1px
                padding-right .2rem
                border-right 1px solid #acacac
        .more
            .icon
                width 12px
                height 12px
                background url(/static/commonImg/download.png) 0 0 no-repeat
                background-size 12px 12px
                margin-top 4px
    .footer-nav
        height 39px
        border-bottom 1px solid #cacaca
        li 
            float left
            padding-left 20px
            a 
                position relative
                color #25a4bb
                font-size 14px
                line-height 39px
</style>