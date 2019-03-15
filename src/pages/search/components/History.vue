<template>
    <div class="history">
        <div class="history-title">
            <span class="history-title-text">搜索历史</span>
            <div class="history-title-deloption">
                <span class="history-icon">№</span>
                <span class="history-deloption">清除</span>
            </div>          
        </div>
        <div class="history-outer">
            <div class="history-inner">
                <div class="history-item">西安</div>
                <div class="history-item">西安</div>
                <div class="history-item">西安</div>
                <div class="history-item">西安</div>
                <div class="history-item">西安</div>
                <div class="history-item">西安</div>
                <div class="history-item">西安</div>
                <div class="history-item">西安</div>
                <div class="history-item">西安</div>
                <div class="history-item">西安</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchHistory',
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
@import '~@/assets/styles/mixins.styl'
.history
    .history-title
        height: .64rem
        line-height: .64rem
        padding: 0 .2rem
        background-color: #f0f5f6
        .history-title-text
            font-size: .26rem
            color: #888
    .history-title-deloption
        float right
        color: #00afc7
        .history-icon
            line-height 1
        .history-deloption
            font-size: .26rem
            line-height .64rem
    .history-outer
        height: 1.24rem
        width: 100%
        overflow-y: hidden
        background-color: #fff
        border-top: 1px solid #dce5e7
        border-bottom: 1px solid #dce5e7
        .history-inner           
            margin-top: .3rem
            display flex
            .history-item
                flex-shrink 0
                max-width: 2.89rem
                height: .6rem
                font-size: .26rem
                color: #333
                background-color: #fff
                line-height: .6rem
                padding: 0 .15rem
                text-align: center
                float: left
                margin-left: .2rem
                border: 1px solid #c9cccd
                border-radius: 3px
                ellipsis()
</style>