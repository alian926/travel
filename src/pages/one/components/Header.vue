<template>
    <div class="header border-bottom">
        <div class="header-left">
            <a href="javascript:window.history.back();">
                <div class="iconfont back-icon">&#xe624;</div>
            </a>
        </div>
            <h1 class="header-input">
                <input type="text" class="header-input-text" placeholder="输入城市或景点" value="一日游">
            </h1>
        <div class="header-right">
            搜索
         </div>
    </div>
</template>

<script>
export default {
    name: 'OneHeader',
}

</script>
    
<style lang="stylus" scoped>
// 1rem=html font-size=50px

@import '~@/assets/styles/varibles.styl'
.header
    height .86rem
    line-height .86rem
    display flex
    background #fff
    color #000
    z-index 98
    position: relative
    display: box
    width: 100%
    height: .88rem
    text-align: center
    .header-left
        width .64rem
        float left
        .back-icon
            text-align center
            font-size .4rem
            color #000
    .header-input
        flex 1
        height: .6rem;
        line-height .6rem
        margin: .14rem 0
        background #fff
        border-radius .1rem
        padding: 0 .6rem 0 .2rem
        background: #f2f2f2
        color: #000
        border-radius: .3rem
        .header-input-text 
            position: relative;
            display: block;
            width: 100%;
            height: .4rem;
            line-height: .4rem;
            padding: .1rem 0;
            background: #f2f2f2;
            border: 0;
            font-family: "Microsoft Yahei",Arial;
            font-size: .28rem;
            border-radius: .06rem;
            text-align: center;
    .header-right
        display: inline-block
        height: .88rem
        line-height: .88rem
        padding: 0 .2rem
        
</style>