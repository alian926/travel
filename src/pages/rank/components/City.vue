<template>
    <div class="city border-bottom">
        <div class="city-inner">
            <span class="city-icon">⊙</span>
            <span class="city-text">西安</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RankCity',
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
.city
    background #eee
    .city-inner 
        padding: 0 .2rem
        height: .7rem
        background: #f5f5f5
        color: #212121
        font-size: 0
        line-height: .7rem
        text-align: right
        .city-icon
            display: inline-block;
            width: .2rem;
            height: .26rem;
            margin-right: .14rem;
            font-size: .28rem;
            font-family: 'mpiconfont';
            speak: none;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
        .city-text  
            font-size .28rem
            color #212121
            line-height .7rem
            text-align right
</style>
