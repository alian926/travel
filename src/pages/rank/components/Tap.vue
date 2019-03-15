<template>
    <div class="tip">
        <ul class="tip-inner">
            <li class="tip-item tip-item-active"><span class="tip-text">打卡必游</span></li>
            <li class="tip-item"><span class="tip-text">打卡必游</span></li>
            <li class="tip-item"><span class="tip-text">打卡必游</span></li>
            <li class="tip-item"><span class="tip-text">打卡必游</span></li>
            
        </ul>
    </div>
</template>

<script>
export default {
    name: 'RankTip',
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
.tip 
    height 1rem
    .tip-inner
        width 100%
        overflow-x scroll
        background #eecf78 url(/static/rankImg/tab_bgd.jpg) 0 0/100% 100% no-repeat
        white-space nowrap
        font-size 0
        .tip-item
            display inline-block
            width 28.6% !important 
            .tip-text
                overflow hidden
                display block
                width 100%
                height 1rem
                font-size .3rem
                line-height 1rem
                text-align center
        .tip-item-active
            .tip-text
                background #e86947
                color #ffffff
                font-weight bold
</style>