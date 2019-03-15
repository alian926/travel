<template>
<div class="hot">
    <div class="title">
        <img class="title-img" :src="hotIcon" alt="">        
        <h2>本周热门榜单</h2>  
        <a href="#">全部榜单 <span class="iconfont back-icon">&#xe624;</span> </a>
    </div>
    <div >
        <swiper :options="swiperOption" class="wrapper">
            <swiper-slide class="slides" v-for="item of hotList"
                 :key="item.id" @click="handleSlideClick">
                <router-link to="/detail/0001">
                    <img class="swiper-img" :src="item.imgUrl" alt="">
                    <div class="swiper-desc">{{item.desc}}</div>
                    <div class="swiper-price"><span>￥<em>{{item.price}}</em></span>起</div>
                    <img class="top-img" v-if="getTop(item.id)" :src="showTop(item.id)" alt="">
                </router-link>            
            </swiper-slide>
        </swiper>
    </div>
</div>
</template>

<script>
export default {
    name: 'HomeHot',
    props:{
        hotIcon:String,
        hotList:Array,
        topList:Array
    },
    data () {
      return {
            swiperOption: {
                direction:'horizontal',
                slidesPerView:3.35,
                slidesPerGroup:1,
            },    
      };
    },
    methods: {
        getTop(id){
            if(this.topList.some(index=>{
                if(index.id == id){
                    return true
                }
            })){
                return true            
            }else{
                return false
            }
        },
        showTop(id){
            let url = ''
            if(this.topList.some(one=>{
                if(one.id == id){
                    url = one.imgUrl
                    return true
                }
            }))
            return url           
        },
        handleSlideClick(){
            
        }
    }
}

</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
    .hot
        background #fff
        margin .2rem 0
        .title
            position relative
            padding .24rem 0 .26rem
            overflow hidden
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
            a 
                float right
                color: #616161;
                font-size: .24rem;
                line-height: .4rem;
                span 
                    float right
                    transform rotateY(180deg) scale(.7)
        .wrapper
            padding 0 .2rem
            overflow visible
            .slides 
                padding: .06rem 0 .2rem
                .swiper-img
                    display block
                    width 2rem
                    height 2rem
                    margin 0 auto
                .swiper-desc
                    margin-top: .12rem
                    color #212121
                    font-size .24rem
                    line-height .32rem
                    text-indent -2px
                    text-align center
                    ellipsis()
                .swiper-price
                    font-size .24rem 
                    text-align center
                    color #616161
                    span 
                        font-size .22rem
                        color #ff8300
                        em 
                            font-size .28rem
                .top-img
                    position absolute
                    z-index 10 
                    top -.1rem
                    width .84rem
                    height .42rem


</style>