<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{getCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"  v-for="item of hot" 
                    :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>                
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key"
                  :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" 
                    :key="innerItem.id"  @click="handleCityClick(innerItem.name)">
                        {{innerItem.name}}
                    </div>     
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapGetters,mapMutations} from 'vuex'
export default {
    name: 'CityList',
    props:{
        hot:Array,
        cities:Object,
        letter:String
    },
    methods: {
        handleCityClick(city){
            // this.$store.commit('changeCity',city)
            this.changeCity(city)
            const go = this.$route.params.go || ''
            this.$router.push('/' + go)
        },
        ...mapMutations(['changeCity'])
    },
    watch:{
        letter () {
            if(this.letter){
                let element = this.$refs[this.letter.trim()][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    computed: {
        ...mapGetters(['getCity'])
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.wrapper)
    },
}

</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.4rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
// .border-bottom 
//     &:before 
//         border-color #ccc 
//     &:after 
//         border-color #ccc
// .list 
//     color #212121 
//     background #eee
//     overflow hidden
//     .title
//         font-size .24rem
//         margin .24rem .3rem
//     .button-list 
//         padding .1rem .6rem .1rem .1rem
//         overflow hidden
//         background #fff
//         .button-wrapper
//             float left 
//             width 33.33% 
//             .button 
//                 margin .1rem
//                 padding .1rem 0
//                 text-align center 
//                 border .02rem solid #ccc
//                 border-radius .06rem
//     .item-list 
//         background #ffffff 
//         .item 
//             line-height .54rem 
//             color #666 
//             padding-left .2rem
</style>