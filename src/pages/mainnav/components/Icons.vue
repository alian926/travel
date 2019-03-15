<template>
    <div class="icons">    
        <ul class="icons-ul">
            <li class="item" v-for="(item,index) of list" :key="index">
                <router-link to="/" class="item-link">
                    <i class="icon" :style="bgPosition(index)"></i>
                    <p class="icon-desc">{{item.name}}</p>   
                </router-link>             
            </li>            
        </ul>    
    </div>
</template>

<script>
export default {
    name: 'MainIcons',
    // props:{
    //     iconList:Array
    // },
    data () {
        return {
           list:[
               {
                   "name":"签证·WiFi"
               },{
                   "name":"出境游"
               },{
                   "name":"一日游"
               },{
                   "name":"美食林"
               },{
                   "name":"汽车票"
               },{
                   "name":"邮轮游"
               },{
                   "name":"超级巴士"
               },{
                   "name":"攻略"
               },
           ]
        };
    },
    computed: {
     
    },
    methods: {
        bgPosition (i) {
            switch(i){
                case 1:
                    return {"backgroundPosition": "-124px -12px"}
                case 2:
                    return {"backgroundPosition": "-212px -12px"}
                case 3:
                    return {"backgroundPosition": "-300px -79px"}
                case 4:
                    return {"backgroundPosition": "-35px -79px"}
                case 5:
                    return {"backgroundPosition": "-124px -79px"}
                case 6:
                    return {"backgroundPosition": "-212px -79px"}
                case 7:
                    return {"backgroundPosition": "-300px -12px"}

            }
        }
    },
}

</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.icons
    padding-top: 10px;
    background-color: #eee;
    .icons-ul
        background-color: #fff
        padding-left: .4rem
        padding-right: .4rem
        padding-bottom: .2rem
        display flex
        flex-wrap wrap
        .item 
            width 25%
            flex-shrink 0
            text-align: center;
            font-size: 12px;
            .item-link 
                display: block;
                padding: 10px 0 0;
                color: #333;
                .icon 
                    font-family: 'QTouchFont',sans-serif;
                    font-weight: normal;
                    font-style: normal;
                    text-decoration: inherit;
                    -webkit-font-smoothing: antialiased;
                    display: inline;
                    width: auto;
                    height: auto;
                    line-height: inherit;
                    vertical-align: baseline;
                    background-image: none;
                    background-position: 0 0;
                    background-repeat: repeat;
                    margin: 0 3px;
                    width: 33px;
                    height: 33px;
                    display: inline-block;
                    background-image: url(/static/mainImg/icons.png);
                    background-size: 374px 130px;
                    background-position: -35px -12px;
                    background-repeat: no-repeat;
                .icon-desc
                    width: 100%;
                    display: block;
                    padding-top: 10px;


</style>