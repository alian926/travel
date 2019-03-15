<template>
    <div class="icons">
        <swiper :options="swiperOption" class="wrapper">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <router-link :to="item.link?item.link:'/home'">
                        <div class="icon-img">
                            <img class="icon-img-content" :src="item.imgUrl" alt="">
                        </div>
                        <p class="icon-desc">{{item.desc}}</p>
                    </router-link>                
                </div>
            </swiper-slide>
            <div class="swiper-pagination my-pagination"  slot="pagination"></div>           
        </swiper>
        <div>
            <ul class="listentrance">
                <li><a href="#">定位失败</a></li>
                <li><router-link to="/rank">必游榜单</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props:{
        iconList:Array
    },
    data () {
        return {
            swiperOption: {
                pagination:{
                   el: '.swiper-pagination',
              }
            },
        };
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item,index)=>{
                const page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    },
}

</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.icons >>> .swiper-container
    height: 0
    padding-bottom: 51%
.wrapper
    overflow visible
.my-pagination
    bottom .1rem
.wrapper >>> .swiper-pagination-bullet-active
    background: rgba(0,175,190,.8)        
.wrapper >>> .swiper-pagination-bullet
    width 6px
    height 6px
  .icons
    margin-top: .1rem
    background #fff
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 23%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
    .listentrance
        display flex
        li
            flex 1
            width: 0;
            height: .98rem;
            line-height: .98rem;
            text-align: center;
            border-top 1px solid #eee
            a
                color: #212121;
                font-size: .28rem;
        li+li
            border-left 1px solid #eee
</style>