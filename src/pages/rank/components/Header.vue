<template>
    <div class="header border-bottom">
        <a href="javascript:window.history.back();">
            <div class="iconfont back-icon">&#xe624;</div>
        </a>
        <h1 class="header-title">西安必游榜单</h1>
        <router-link to="/" class="header-logo">
            <span class="header-icon">△</span>
            首页
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'RankHeader',
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
    display flex
    justify-content center
    background: #fff
    border: 0 none
    position: relative
    height: .88rem
    .back-icon
        position absolute
        top .24rem 
        left 0
        width .64rem
        text-align center
        color #000
        font-size .35rem
    .header-title
        overflow: hidden;
        margin: 0 1rem;
        line-height: .88rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
        color #000
    .header-logo
        color: #666
        line-height .36rem
        position absolute
        right 0
        top 0
        width .88rem
        height .88rem
        text-decoration none
        text-align center
        font-size .24rem

        .header-icon
            display block
            height auto 
            padding-top .1rem
            line-height 1
            font-size .4rem
            width .88rem
</style>