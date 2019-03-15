<template>
    <div class="filter border-bottom">
        <div class="filter-select">
            <span class="filter-caption">全部分类<span class="iconfont back-icon">&#xe624;</span></span>
        </div>
        <div class="filter-select">
            <span class="filter-caption">推荐排序<span class="iconfont back-icon">&#xe624;</span></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SightFilter',
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
.filter 
    display -webkit-flex
    height .8rem
    background #ffffff
    widht 100%
    position relative
    .filter-select
        border: 0;
        box-flex: 1;
        box-sizing: border-box;
        width: 100%;
        height: .8rem;
        overflow: hidden;
        position: relative;
        color: #212121;
        line-height: .8rem;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:last-child:before 
            content: "";
            position: absolute;
            top: .1rem;
            left: 0;
            width: .02rem;
            height: .6rem;
            border-left: 1px solid #e0e0e0;
            -webkit-transform: scaleX(.5);
            -moz-transform: scaleX(.5);
            -ms-transform: scaleX(.5);
            -o-transform: scaleX(.5);
            transform: scaleX(.5);
            transform-origin: 100% 0;
        .filter-caption 
            position relative
            color: #212121;
            text-align: center;
            white-space: nowrap;
            .back-icon
                display inline-block 
                font-size .24rem
                transform rotateZ(-90deg)
                color #212121
                margin-left .2rem

</style>