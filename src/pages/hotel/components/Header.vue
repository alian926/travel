<template>
    <div class="header">
        <a class="header-a" href="javascript:window.history.back();"><img src="/static/hotelImg/icon1.png" alt=""></a>  
        <div class="title"><img src="/static/hotelImg/icon2.png">  <span>附近酒店</span></div>
    </div>
</template>

<script>
export default {
    name: 'HotelHeader',
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
.header
    width 100%
    height 188px
    background url(/static/hotelImg/banner.jpg) center no-repeat
    background-size 100% 100%
    display flex
    align-items flex-start
    justify-content space-between
    padding-top .2rem
    box-sizing border-box
    .header-a
        display block
        height 44px
        text-align right
        padding-left .4rem

        img 
            width .5rem
    .title
        font-size 18px
        color #fff 
        font-weight 400
        white-space nowrap
        display flex
        align-items flex-end
        justify-content center
        flex-direction column
        padding-right .2rem
        span 
            font-size .1rem
        img 
            width .5rem
</style>