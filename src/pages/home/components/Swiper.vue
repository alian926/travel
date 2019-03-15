<template>
<div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <router-link :to="item.link">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </router-link>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
    
</template>

<script>
export default {
    name: 'HomeSwiper',
    props:{
        swiperList:Array
    },
    data () {
      return {
        swiperOption: {
            pagination:{
                el: '.swiper-pagination',
            },
            autoplay:{
                stopOnLastSlide:false,
                disableOnInteraction: false,
                delay:3000
            },
        },
       }
    },
    computed:{
        showSwiper () {
            return this.swiperList.length
        }
    }
}

</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper >>> .swiper-pagination-bullet
        width 6px
        height 6px
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 26.66%
        background #ccc
        .swiper-img
            width 100%
        .swiper-pagination
            margin-bottom -4px
    
</style>