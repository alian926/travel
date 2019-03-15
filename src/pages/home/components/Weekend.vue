<template>
<div>
    <h2 class="title">周末去哪儿</h2>
    <ul>
        <li class="item border-bottom" v-for="item of weekendList" :key="item.id">       
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" alt="">
            </div>       
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
    <div class="item-footer">
        <span><b>票面价</b>是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
    </div>
</div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props:{
        weekendList:Array
    },
}

</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.title
    background #eee
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
ul{
    background #fff
}
.item-img-wrapper
    height 0
    overflow hidden
    padding-bottom 37.09%
    .item-img
        display block
        width 100%
.item-info
    position: relative;
    padding: .14rem .2rem .2rem .2rem;
    .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
    .item-desc
        line-height .4rem
        padding-right: 1.4rem;
        color: #616161;
        font-size .24rem
        ellipsis()
.item-footer
    background #fff
    margin-top .1rem
    padding .14rem .1rem
    padding-left .4rem
    span 
        font-size .24rem
        line-heigh: .32rem
        color #616161
        b
            font-weight 800
</style>