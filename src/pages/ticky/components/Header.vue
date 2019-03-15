<template>
    <div class="header">
        <router-link to="/">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        <h1 class="header-title">门票特卖</h1>
    </div>
</template>

<script>
export default {
    name: 'TickyHeader',
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
</style>