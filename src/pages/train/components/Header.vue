<template>
    <div class="header">
        <a href="javascript:window.history.back();"><div class="iconfont back-icon">&#xe624;</div></a>  
        火车票
    </div>
</template>

<script>
export default {
    name: 'TrainHeader',
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
    overflow hidden
    position relative
    height  .88rem
    font-size .32rem
    text-align center
    line-height .88rem
    color #ffffff
    background #1ba9ba
    font-weight 800
    .back-icon
        position absolute
        top 0 
        left 0
        width .64rem
        text-align center
        color #fff
        font-size .35rem
        
</style>