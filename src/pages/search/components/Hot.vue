<template>
    <div class="hot">
        <div class="hot-title">
            <span class="hot-title-text">热门搜索</span>
            <div class="hot-title-deloption">
                <span class="hot-icon">⊙</span>
                <span class="hot-deloption">换一批</span>
            </div>          
        </div>
        <div class="hot-con">
            <div class="hot-group border-bottom">
                <div class="hot-typeicon">
                    <div class="hot-typeinner">
                        <img src="/static/searchImg/icon1.png" alt="">
                    </div>
                </div>
                <div class="hot-itemcon">
                    <div class="hot-iteminner">
                        <a class="hot-item" href="#">一元门票</a>
                        <a class="hot-item" href="#">一元门票</a>
                        <a class="hot-item" href="#">一元门票</a>
                        <a class="hot-item" href="#">一元门票</a>
                        <a class="hot-item" href="#">一元门票</a>
                        <a class="hot-item" href="#">一元门票</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchHot',
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
.hot
    .hot-title
        height: .64rem
        line-height: .64rem
        padding: 0 .2rem
        background-color: #f0f5f6
        .hot-title-text
            font-size: .26rem
            color: #888
        .hot-title-deloption
            float right
            color: #00afc7
            .hot-icon
                line-height 1
            .hot-deloption
                font-size: .26rem
                line-height .64rem
    .hot-con
        .hot-group
            position: relative
            padding-left: .74rem
            background-color: #fff
            border-top: 1px solid #dce5e7
            overflow hidden
            .hot-typeicon
                position: absolute;
                left: 0;
                top: 0;
                width: .74rem;
                height: 100%;
                overflow: hidden;
                line-height: 100%;
                text-align: center;
                .hot-typeinner
                    position: absolute;
                    width: .72rem;
                    height: 70%;
                    top: 15%;
                    border-right: 1px solid #dce5e7;
                    img 
                        width: .3rem;
                        height: .3rem;
                        position: relative;
                        top: 50%;
                        margin-top: -.15rem;
            .hot-itemcon    
                zoom: 1
                overflow: hidden
                position: relative
                max-height: 1.8rem
                .hot-iteminner
                    zoom: 1
                    overflow: hidden
                    position: relative
                    left: 0
                    top: 0
                    .hot-item
                        float: left
                        height: .36rem
                        max-width: 2.89rem
                        line-height: .36rem
                        text-align: center
                        display: block
                        padding-left: .3rem
                        padding-right: .3rem
                        border-right: 1px dashed #c9cccd
                        color: #333
                        margin-top: .25rem
                        margin-bottom: .25rem
                        ellipsis()
</style>