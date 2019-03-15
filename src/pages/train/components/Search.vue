<template>
    <div class="search">
        <div class="search-input">
            <div class="address add-left">北京</div>
            <img src="/static/trainImg/icon0.png" alt="">
            <div class="address add-right">上海</div>
        </div>
        <div class="search-time">
            <div class="search-time-input">2019-03-05       <span>周二（今天）</span>
            </div>
        </div>
        <div class="search-filter">
            <div class="search-desc">只看高铁/动车</div>
            <div class="r-ct">
                <div class="search-filter-btn">
                    <div class="handle"></div>
                </div>
            </div>
        </div>
        <div class="search-commit">
            <div class="btn">搜索</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrainSearch',
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
.search
    position relative
    padding 5px 15px 0
    background #fff 
    font-size 18px
    text-align center
    .search-input 
        display flex
        justify-content space-between
        align-items center
        .address
            flex 1
            font-size .4rem
            line-height .9rem
            height .9rem
            border-bottom 1px solid #eaeaea
            font-weight normal 
        .add-left
            text-align left 
        .add-right 
            text-align right
            
        img     
            width 1rem
            height .9rem
    .search-time 
        text-align left 
        font-size: 20px;
        line-height: 45px;
        height: 45px;
        background: #fff;
        border-bottom: 1px solid #eaeaea;
        span 
            color: #888;
            font-size: 15px;
    .search-filter
        display flex 
        position relative
        height 46px
        line-height 46px
        .search-desc
            text-align left 
            color #888
            font-size 15px
            flex 1
        .r-ct
            flex 1
            display flex
            justify-content flex-end
            align-items center 
        .search-filter-btn
            display: inline-block;
            position: relative;
            width: 1rem;
            height: .6rem;
            padding: .01rem;
            border-radius: .32rem;
            background-color: #ccc;
            vertical-align: middle;
            .handle 
                position: absolute;
                z-index: 1000;
                top: 1px;
                left: 1px;
                width: .56rem;
                height: .56rem;
                border-radius: 50%;
                background-color: #fff;
                box-shadow: 0 1px 3px rgba(0,0,0,0.3);
                transition: transform .1s ease-out;
                &:after 
                    display none
                    position: absolute;
                    left: .15rem;
                    content: " ";
                    width: .34rem;
                    height: .28rem;
                    box-sizing border-box
                    background-color: #fafafa;
                    border-radius: 0 .15rem .15rem 0;
                    transition: transform .13s ease-out;
    .search-commit
        background #fff 
        padding 10px 0 17px 0
        .btn
            border-radius 6px
            background-color: #f90
            height: 40px
            line-height: 40px
            color: #fff
</style>