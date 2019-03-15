<template>
    <div class="list" ref="list">
        <div class="list-nav" >
            <div class="list-fixed" ref="nav">
                <ul>
                    <li class="list-nav-item" :class="whichIndex == index?'list-nav-item-active':''" 
                    v-for="(item,index) of list" :key="index" @click="handleNavClick(index)">
                        {{item.type}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="wrapper" ref="wrapper">
            <div style="height:1000px">
                <div class="list-group" v-for="(item,index) of list" :key="index" :ref="index">
                    <h4 class="list-caption"><span class="list-caption-name">{{item.type}}</span></h4>
                    <ul class="list-products">
                        <li class="list-item border-top" v-for="(cnt,i) of item.content" :key="i">
                            <div class="item-show"><img :src="cnt.imgUrl" alt=""></div>
                            <div class="item-info">
                                <div class="item-info-name">{{cnt.title}}</div>
                                <div class="item-book">
                                    <strong class="item-sale">
                                        <span class="item-price">￥<em class="item-price-num">{{cnt.newPrice}}</em></span>起
                                    </strong>
                                    <span class="item-cost" v-if="cnt.oldPrice">￥<em class="item-price-num">{{cnt.oldPrice}}</em></span>
                                    <em class="item-btn">马上抢</em>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TickyList',
    props:{
        list:Array
    },
    data() {
        return {
            whichIndex:0
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            const listTop = this.$refs.list.offsetTop
            console.log(listTop)
            if(top > listTop){
                this.$refs.nav.style.position = 'fixed'
                this.$refs.nav.style.padding = '0 .3rem'

            } else {
                this.$refs.nav.style.position = 'static'
                this.$refs.nav.style.padding = '0'
            }
        },
        handleNavClick(index){
            this.whichIndex = index
            const listTop = this.$refs.list.offsetTop
            const top = this.$refs[index][0].offsetTop
            document.documentElement.scrollTop = listTop + top
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

.list 
    position: relative
    z-index: 2
    margin: -13.3% .3rem 0
    background: #fff
    border-radius: .24rem
    box-shadow: 0 0.04rem 0.36rem 0 rgba(0,0,0,.1)

    .list-nav
        height: .92rem
        width 100%
        border-radius: .24rem .24rem 0 0
        background: #f3f3f3
        box-sizing border-box
        .list-fixed
            height: .92rem
            width 100%
            border-radius: .24rem .24rem 0 0
            background: #f3f3f3
            top 0
            left 0
            z-index 10
            box-sizing border-box
        ul 
            display flex
            width 100%
            .list-nav-item
                position: relative
                background: #f3f3f3
                color: #353535
                font-size: .32rem
                line-height: .92rem
                text-align: center
                flex 1
            .list-nav-item-active
                background: #fff
                color: #f55
                font-weight: bold
            .list-nav-item:last-child::after
                content: ' '
                position: absolute
                top: 0
                width: .4rem
                height: .92rem
                left: -.2rem
                border-radius: 0 0 0 .24rem
                transform: skew(10deg)
                z-index: 2;
                background: #f3f3f3
                transform-origin: 0 0
    .list-group
        .list-caption
            margin: 0 .36rem
            padding-top: .4rem
            text-align: center
            .list-caption-name
                display: inline-block
                position: relative
                color: #212121
                font-weight: bold
                font-size: .36rem
                line-height: .5rem
            .list-caption-name::before, .list-caption-name::after 
                content: ' '
                overflow: hidden
                position: absolute
                top: 50%
                width: .9rem
                height: .02rem
                background: #e0e0e0
            .list-caption-name::before 
                left: -1.1rem;
            .list-caption-name::after 
                right: -1.1rem;
        .list-products 
            margin: 0 .24rem
            .list-item
                padding: .4rem 0
                overflow hidden
                .item-show
                    float:left
                    background #f0f0f0
                    width 2rem
                    height 2rem
                    border-radius .04rem
                    img 
                        width 100%
                        height 100%
                        border-radius .04rem
                        vertical-align middle
                .item-info
                    position: relative
                    margin-left: 2.24rem
                    height: 2rem
                    .item-info-name
                        overflow: hidden
                        height: .88rem
                        color: #212121
                        font-size: .32rem
                        line-height: .44rem
                        ellipsis()
                    .item-book
                        overflow: hidden
                        position: absolute
                        bottom: 0
                        left: 0
                        width: 100%
                        height: .6rem
                        line-height: .6rem
                        .item-sale
                            margin-right: .1rem
                            color: #616161
                            font-size: .24rem
                            .item-price
                                color: #f55
                                font-size: .28rem
                                .item-price-num
                                    font-size .48rem
                        .item-cost
                            color: #9e9e9e
                            font-size: .24rem
                            text-decoration line-through
                        .item-btn
                            overflow: hidden
                            position: absolute
                            right: 0
                            bottom: 0
                            width: 1.4rem
                            height: .6rem
                            background-color: #f55
                            color: #fff
                            font-size: .26rem
                            line-height: .64rem
                            text-align: center
                            border-radius: .04rem
                            background-image: linear-gradient(to bottom,#ff7f65,#f55)



</style>