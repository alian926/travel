<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" >
                </swiper-slide>
                
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallary',
    props:{
        imgs:{
            type:Array,
            // default () {
            //     return ["/static/detailImg/ban1.jpg",
            //     "/static/detailImg/ban2.jpg",
            //     "/static/detailImg/ban3.jpg",
            //     "/static/detailImg/ban4.jpg"
            //     ]
            // }
        }
    },
    data () {
        return {
            swiperOption: {
                pagination:{
                    el: '.swiper-pagination',        
                    type:'fraction',
                },
                loop:true,
                observer:true,
                observeParents:true,
            },
        };
    },
    components: {},
    computed: {},
    methods: {
        handleGallaryClick(){
            this.$emit('close')
        }
    }
}

</script>

<style lang="stylus" scoped>
.container
    display flex
    flex-direction column
    justify-content center
    z-index 99 
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
        width 100%
        .swiper-container
            overflow visible
        .gallary-img 
            width 100%
        .swiper-pagination 
            color #fff
            position absolute
            bottom -3rem
</style>