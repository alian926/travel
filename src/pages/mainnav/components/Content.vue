<template>
    <div class="content">
        <ul>
            <li v-for="(item,index) of list" :key="index" :style="bgColor(index)">
                <div class="col4 border-right" >
                    <router-link tag="p" :to="item[0][0].link?item[0][0].link:'/home'">{{item[0][0].name}}</router-link>
                </div>
                <div class="col8 ">
                    <div class="col6 border-shaodow">
                        <router-link tag="p" v-for="(item1,index1) of item[1]"  :to="item[1][index1].link?item[1][index1].link:'/home'" class="border-bottom" :key="index1">{{item1.name}}</router-link>
                    </div>
                    <div class="col6 border-left">
                        <router-link tag="p"  v-for="(item2,index2) of item[2]"  :to="item[2][index2].link?item[2][index2].link:'/home'" class="border-bottom" :key="index2">{{item2.name}}</router-link>     
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MainContent',
    data () {
        return {
            list:[
                [
                    [{
                        "name":"酒店",
                        "link":"/hotel"
                    }],
                    [{
                        "name":"特惠酒店",
                        "link":"/hotel"
                    },{
                        "name":"客栈",
                        "link":"/hotel"
                    }],
                    [{
                        "name":"海外酒店",
                        "link":"/hotel"
                    },{
                        "name":"民宿"
                    }]
                ],
                [
                    [{
                        "name":"机票",
                        "link":"/flight"
                    }],[{
                        "name":"低价机票",
                        "link":"/flight"
                        },{
                        "name":"火车票",
                        "link":"/train"
                    }],[{
                        "name":"汽车票·船票"
                        },{
                        "name":"专车·自驾"
                    }]
                ],
                [
                    [{
                        "name":"度假"
                    }],[{
                        "name":"景点·门票"
                        },{
                        "name":"自由行"
                    }],[{
                        "name":"旅游团购"
                        },{
                        "name":"周边·短途"
                    }]
                ],[
                    [{
                        "name":"金融·理财"
                    }],[{
                        "name":"保险·车险"
                    }],[{
                        "name":"换外币"
                    }]
                ]
            ]
        };
    },
    components: {},
    computed: {},
    methods: {
        bgColor (i) {
            switch(i){
                case 0:
                    return {"backgroundColor":"#f55"}
                case 1:
                    return {"backgroundColor":"#00a7f7"}
                case 2:
                    return {"backgroundColor":"#7cb832"}
                case 3:
                    return {"backgroundColor":"#f90"}
            }
        }
    }
}

</script>

<style lang="stylus" scoped>
.content
    padding: 4px 4px 2px
    ul 
        li 
            border-bottom: 4px solid #fff;
            display flex 
            background #f55
            .col4 
                width 33.33%
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p
                    margin: 15px 0 auto
                    line-height 100%
                    font-size: 16px
                    color #fff
            .col8 
                width 66.66%
                display flex
                .col6
                    width 50%
                    display flex 
                    flex-direction column
                    justify-content center
                    align-items center
                    p
                        height 48px
                        width 100%
                        display flex
                        justify-content center
                        align-items center
                        flex-direction column
                        font-size 16px
                        text-align center
                        color #fff
                
.border-shadow 
    inset 0 0 1px #fff
</style>