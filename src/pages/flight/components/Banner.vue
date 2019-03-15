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
    name: 'FlightBanner',
    data () {
        return {
            list:[
                {
                    "name":"低价机票",
                    "imgUrl":"/static/flightImg/pic1.png"
                },{
                    "name":"价格趋势",
                    "imgUrl":"/static/flightImg/pic2.png"
                },{
                    "name":"降价提醒",
                    "imgUrl":"/static/flightImg/pic3.png"
                },{
                    "name":"航班动态",
                    "imgUrl":"/static/flightImg/pic4.png"
                },{
                    "name":"值机选座",
                    "imgUrl":"/static/flightImg/pic5.png"
                },{
                    "name":"学生认证",
                    "imgUrl":"/static/flightImg/pic6.png"
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
    width 94%
    margin 10px auto 
    background #fff
    box-shadow 0 2px 8px 0 rgba(0,0,0,.06)
    border-radius 4px
    display flex
    flex-wrap wrap
    .item 
        width 33%
        height 1.6rem
        display flex
        justify-content center
        align-items center
        flex-direction column
        img 
            height .48rem
            width .48rem
        p 
            text-align center
            font-size 12px
            margin-top 4px
            color #212121
</style>