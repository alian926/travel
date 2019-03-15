<template>
<div class="recommend">
    <div class="title">
        <img class="title-img" :src="recommendIcon" alt="">
        <h2 >猜你喜欢</h2>
    </div>
    <ul>
        <router-link tag="li" class="item border-bottom"
         v-for="item of recommendList" :key="item.id" 
         :to="'/detail/' + item.id">       
            <img class="item-img" :src="item.imgUrl" alt="">       
            <div class="item-info">
                <h3 class="item-title">{{item.title}}</h3>
                <p class="item-words"><span>*****</span>{{item.words}}</p>
                <p class="item-price"><span>￥<em>{{item.price}}</em></span>起<strong>{{item.address}}</strong></p>
                <div v-if="item.desc" class="item-desc-container">
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </div>
        </router-link>
    </ul>
    <a href="javascript:;" class="item-more">查看所有产品</a>
</div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props:{
        recommendIcon:String,
        recommendList:Array,
        topList:Array
    },

}

</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.recommend
    background #fff
    .title
        line-height .8rem
        .title-img
            display: inline-block
            overflow: hidden
            width: .3rem
            height: .3rem
            margin-top -.1rem
            margin-left: .2rem
        h2 
            display inline-block
            margin-left .08rem
            height .44rem
            color #212121
            font-size .32rem
            line-height .44rem
    .item-more
        display block
        padding .2rem 0
        color #00afc7
        font-size .28rem
        line-height .4rem
        text-align center
    .item   
        display flex
        margin-left .1rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                margin-top .2rem
                ellipsis()
            .item-words
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
            .item-price
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
            .item-desc-container
                display inline-block
                margin-top .4rem
                margin-right .24rem
                background #fff9f9
                padding .04rem .1rem
                color #f55
                font-size .24rem
                line-height .34rem
                .item-desc
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    ellipsis()

</style>