<template>
    <div class="footer">
        <ul class="footer-guide">
            <li class="col4" v-for="(item,index) of list" :key="index">
                <p>
                    {{item.name}}
                </p>
            </li>
        </ul>
        <div class="footer-bot">
            <div class="footer-grey">
                <p class="footer-center">Qunar 京ICP备05021087</p>
            </div>
            <div class="footer-about">
                <p>关于我们</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainFooter',
    data () {
        return {
            list:[
                {
                    "name":"下载app"
                },{
                    "name":"我的订单"
                },{
                    "name":"我的"
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
.footer 
    background #eeeeee  
    padding-top 10px
    .footer-guide 
        padding 0 20px
        background #fff 
        display flex
        .col4
            height 1.61rem
            display flex
            justify-content center
            align-items center
            flex 1
            p 
                line-height 20px
    .footer-bot
        height 1.02rem
        line-height 1.02rem
        background #eee
        font-size 12px
        display flex
        .footer-grey 
            color #8c8c8c 
            padding 0 .2rem
            .footer-center
                text-align center
                margin 0 auto
        .footer-about 
            width 25%
            text-align left
            p   
                color #333
                
</style>