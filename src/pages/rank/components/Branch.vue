<template>
    <div class="branch">
        <div class="branch-con">
            <p class="branch-desc">十三朝古都西安，是中国历史上影响力最大的城市之一。</p>
        </div>
        <ul class="branch-list">
            <li class="branch-item">
                <router-link to="/detail/0001" class="">
                    <div class="item-top">
                        <div class="item-show">
                            <img src="/static/rankImg/pic1.jpg" alt="">
                        </div>
                        <div  class="item-info">
                            <div class="item-info-name">秦始皇陵博物院（兵马俑）</div>
                            <div class="item-info-text">117453条评论</div>
                            <div class="item-info-comment">
                                <span class="item-star">*****</span>
                                <span class="item-score">4.9分</span>
                            </div>
                            <div class="item-info-price">
                                <span>￥<em>120</em></span>起
                            </div>
                        </div>
                    </div>
                    <div class="item-more">
                        <span class="item-more-reason">必去理由</span>
                        <div class="item-more-desc">
                            秦始皇嬴政陵园的修筑时间长达38年，工程浩大，气势雄伟，1987年被列入世界文化遗产保护名录。
                        </div>
                        <div class="item-more-note">
                            <span class="item-more-icon">⊙</span>
                            建议游玩时长：2~3个小时
                        </div>
                    </div>
                    <span class="item-btn">
                        去看看
                    </span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'RankBranch',
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
.branch 
    background #0f0f0f url(/static/rankImg/tab_desc.jpg)
    .branch-con
        padding-top .01rem
        .branch-desc
            margin .2rem
            padding .2rem .4rem .2rem .48rem
            color #ffffff
            font-size .28rem
            line-height .36rem
            position relative
            &:before 
                content '\0020'
                border 1px dashed #7b6a3c
                width 200%
                height 200%
                transform scale(.5)
                box-sizing border-box
                top 0
                left 0
                transform-origin 0 0
                overflow hidden
                position absolute
    .branch-list
        margin .34rem .2rem 0
        padding-bottom .02rem
        .branch-item
            position: relative
            padding: .15rem .15rem .25rem
            margin-bottom: .2rem
            background: #fff
            .item-top
                .item-show 
                    float: left
                    overflow: hidden
                    width: 2.8rem
                    height: 2rem
                    background-color: #f0f0f0
                    img     
                        width 100%
                .item-info
                    overflow: hidden
                    padding-left: .25rem
                    .item-info-name
                        margin-top: .1rem
                        color: #212121
                        font-weight: bold
                        font-size: .38rem
                        font-family: 'simhei'
                        line-height: .38rem
                        ellipsis()
                    .item-info-text
                        margin-top: .22rem
                        color: #9e9e9e
                        font-size: .24rem
                        line-height: .24rem
                    .item-info-comment
                        margin-top: .12rem
                        height: .24rem
                        font-size: 0
                        line-height: .24rem
                        .item-star
                            display: inline-block
                            position: relative
                            width: 1.2rem
                            height: .24rem
                            line-height .4rem
                            margin-left: .08rem
                            color: #ff9800
                            font-size: .5rem
                            vertical-align middle
                        .item-score 
                            display: inline-block
                            margin-left: .08rem
                            color: #ff9800
                            font-size: .24rem
                            line-height: .24rem
                            vertical-align: top
                    .item-info-price
                        margin-top: .26rem
                        color: #9e9e9e
                        font-size: .24rem
                        span
                            color: #ff9800
                            font-size: .24rem
                            em
                                margin-right: .02rem
                                color: #ff9800
                                font-size: .4rem
                                line-height: .4rem
                                vertical-align: -.02rem
            .item-more
                margin: .2rem .08rem 0;
                .item-more-reason
                    position relative
                    display: inline-block;
                    margin-left: -.08rem;
                    padding: 0 .08rem;
                    height: .36rem;
                    color: #e9bb58;
                    font-size: .24rem;
                    line-height: .36rem;
                    text-align: center;
                    &:before 
                        position absolute 
                        overflow hidden
                        content '\0020'
                        border 1px dashed #d9a92b
                        width 200%
                        height 200%
                        transform scale(.5)
                        top 0
                        left 0
                        transform-origin 0 0
                .item-more-desc
                    padding: .08rem 0 .2rem;
                    color: #212121;
                    font-size: .26rem;
                    line-height: .36rem;
                .item-more-note 
                    padding: .08rem 0 .34rem;
                    color: #616161;
                    font-size: .24rem;
                    .item-more-icon 
                        font-family: 'mpiconfont';
                        speak: none;
                        font-style: normal;
                        font-weight: normal;
                        font-variant: normal;
                        text-transform: none;
                        line-height: 1;
                        -webkit-font-smoothing: antialiased;
                        margin-right .06rem
                        display inline-block
            .item-btn
                display: block;
                margin: 0 .12rem;
                height: .6rem;
                color: #616161;
                font-size: .26rem;
                line-height: .6rem;
                text-align: center;
                position relative
                &:before 
                    position absolute 
                    overflow hidden
                    content '\0020'
                    border 1px solid #b5b5b5
                    border-radius 1.2rem
                    width 200%
                    height 200%
                    transform scale(.5)
                    top 0
                    left 0
                    transform-origin 0 0

</style>