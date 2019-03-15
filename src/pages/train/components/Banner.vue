<template>
    <div class="banner">
        <div class="item" v-for="(item,index) of list" :key="index">
            <img :src="item.imgUrl" alt="">
            <p>{{item.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrainBanner',
    data () {
        return {
            list:[
                {
                    "name":"抢票",
                    "imgUrl":"/static/trainImg/icon1.png"
                },{
                    "name":"国际/港台",
                    "imgUrl":"/static/trainImg/icon2.png"
                },{
                    "name":"我的订单",
                    "imgUrl":"/static/trainImg/icon3.png"
                }
            ]
        };
    },
    components: {},
    computed: {},
    methods: {}
}

</script>

<style lang="stylus" scoped>
.banner 
    padding 6px .3rem .22rem .3rem
    display flex
    margin .4rem 0 .4rem 0 
    background #fff
    .item 
        flex 1
        display flex
        justify-content center
        align-items center
        flex-direction column
        img 
            height .7rem
        p 
            text-align center
            font-size 12px
            line-height .08rem
</style>