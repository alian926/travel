<template>
    <div class="header">
        <a href="javascript:window.history.back();"><div class="iconfont back-icon">&#xe624;</div></a>  
        城市选择
    </div>
</template>

<script>
export default {
    name: 'CityHeader',
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
@import '~@/assets/styles/varibles.styl'
.header
    overflow hidden
    position relative
    height  .68rem
    font-size .32rem
    text-align center
    line-height .86rem
    color #ffffff
    background $bgColor
    .back-icon
        position absolute
        top 0 
        left 0
        width .64rem
        text-align center
        color #fff
        font-size .4rem
        
</style>