<template>
<div class="container" ref="lists">
    <div class="item-nav-fixed" v-show="showFixed" >
        <span class="item-nav-tit" v-for="(type,typeIndex) of typeList" :key="typeIndex"
            :class="{active:typeIndex == tabIndex}" @click="handleTypeClick(type,typeIndex)">{{type}}</span>
    </div>
    <div class="item" v-for="(item,index) of list" :key="index" :ref="item.type">
        <div class="item-title border-bottom">
            <span class="item-title-icon"></span>
            {{item.title}}
        </div>
        <div class="item-content border-bottom" v-for="(cnt,i) of item.content" :key="i">
            <h5 class="item-content-tit">{{cnt.tit}}</h5>
            <div class="item-content-price"><span>￥<b>{{cnt.price}}</b></span>起</div>
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
    </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
    name: 'DetailList',
    data () {
        return {
            showFixed:false,
            tabIndex:0
        };
    },
    props:{
        list:Array
    },
    computed:{
        typeList(){
            const newList = []
            for(let item of this.list){
                if(newList.indexOf(item.type) == -1){
                    newList.push(item.type)
                }
            }
            return newList
        },
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            if(top > 106){
                this.showFixed = true
            } else {
                this.showFixed = false
            }
        },
        handleTypeClick (type,typeIndex) {
            this.tabIndex = typeIndex
            let rootElement = this.$refs.lists
            let element = this.$refs[type.trim()][0]
            document.documentElement.scrollTop = element.offsetTop + rootElement.offsetTop - 84
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
.container
    position relative
    z-index 2
    .item-nav-fixed
        z-index 10
        position fixed
        left 0 
        top .68rem
        display flex
        height 1rem
        width 100%
        overflow-x auto
        background #fff 

        .item-nav-tit
            width 2rem
            line-height 1rem
            text-align center
            flex-shrink 0
            font-size .32rem
        .active 
            border-bottom 1px solid #00bcd4
    .item
        margin-bottom .2rem
        .item-title 
            line-height .8rem
            font-size .32rem
            padding 0 .2rem
            background #fff
            .item-title-icon
                    position relative
                    left .06rem
                    top .06rem
                    display: inline-block;
                    width: .36rem;
                    height: .36rem;
                    background: url(/static/detailImg/detail.png) 0 -.45rem no-repeat;
                    margin-right: .1rem;
                    background-size: .4rem 3rem;
        .item-content
            display flex
            align-items center
            color #212121
            font-size .28rem
            line-height 1
            padding .24rem .2rem
            background #fff
            .item-content-tit
                font-size .3rem
                flex 1
                line-height .43rem
                margin-right .8rem
            .item-content-price
                font-size .2rem
                color #9e9e9e
                span 
                    color: #ff9800
                    b 
                        font-size .4rem
            .back-icon
                color #000
                display block
                margin-left .1rem
                transform rotateZ(-90deg)
                font-weight 800
                font-size .25rem
</style>