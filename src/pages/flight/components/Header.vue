<template>
    <div class="header">
        <a href="javascript:window.history.back();"><img src="/static/flightImg/icon1.png" alt=""></a>  
        <span class="title">机票</span>
    </div>
</template>

<script>
export default {
    name: 'FlightHeader',
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
    height 228px
    background url(/static/flightImg/banner.png) center no-repeat
    background-size 100% 100%
    padding-top
    a
        height 44px
        text-align center 
        padding-left 10px
        img 
            width .5rem
    .title
        display inline-block
        margin 0 auto
        font-size 18px
        color #fff 
        font-weight 400
        text-align center 
        white-space nowrap
        height 44px
        line-height 44px
        padding-left 2.4rem 
</style>