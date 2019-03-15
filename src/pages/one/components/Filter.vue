<template>
    <div class="filter border-bottom">
        <div class="filter-container">
            <h3 class="filter-title border-bottom">游玩景点
                <span class="filter-subtitle">(可多选)</span>
            </h3>
            <span class="iconfont filter-btn">&#xe624;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OneFilter',
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
    height: .8rem;
    background: #e5e7e8;
    .filter-container 
        position relative
        .filter-title
            position: relative;
            z-index: 3;
            color: #212121;
            font-size: .28rem;
            line-height: .8rem;
            text-indent: .2rem;
            .filter-subtitle    
                font-size: .24rem;
                padding-left: .1rem;
        .filter-btn
            display inline-block 
            position absolute
            right 0
            top 0
            transform rotateZ(-90deg)
            height .8rem
            width .8rem
            text-align center
            line-height .8rem
</style>