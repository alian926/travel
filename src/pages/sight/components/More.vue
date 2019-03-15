<template>
    <div class="more">
        <div class="more-page">
            <div class="more-pagination">
                <a href="javascript:void(0);"  class="more-disable-btn">上一页</a>
                <span class="more-page-num">1 / 41</span>
                <a href="javascript:void(0);"  class="">下一页</a>
            </div>
            <div class="more-page-text">去哪儿门票</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SightMore',
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
.more
    padding .2rem 0 
    color #00afc7
    line-height .82rem
    text-align center
    background #eee
    .more-page
        .more-pagination
            a 
                display: inline-block;
                width: 1.4rem;
                border: .02rem solid #00afc7;
                background: #fff;
                color: #00afc7;
                line-height: .6rem;
                border-radius: .06rem;
            .more-page-num 
                color: #212121;
                line-height: .6rem;
                padding: 0 15px;
            a.more-disable-btn 
                background: #bdbdbd;
                color: #fff;
                border: 0;

        .more-page-text 
            padding-top .2rem
            line-height .3rem
            font-size .3rem
            text-align center
</style>