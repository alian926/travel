<template>
    <div class="detail">
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-base-info :list="baseInfoList"></detail-base-info>
        <detail-promote v-show="showPromote" :list="promoteList"></detail-promote>
        <detail-list :list="list"></detail-list>
        <div style="height:1000px"></div>
        <common-footer></common-footer>
        <common-copyright></common-copyright>
        
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailBaseInfo from './components/BaseInfo'
import DetailPromote from './components/Promote'
import CommonFooter from '@/components/footer/Footer'
import CommonCopyright from '@/components/footer/Copyright'

import axios from 'axios'

export default {
    name: 'Detail',
    data () {
        return {
            sightName : '',
            bannerImg : '',
            gallaryImgs : [],
            list:[],
            baseInfoList:{},
            promoteList:{}
        };
    },
    components: {
        DetailBanner,
        DetailHeader,
        DetailBaseInfo,
        DetailPromote,
        DetailList,
        CommonFooter,
        CommonCopyright,
    },
    computed: {
        showPromote(){
            if(this.promoteList.length < 1){
                return false
            }else{
                return true
            }
        }
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json?',{
                params:{
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            if(res.status == 200){
                const obj = res.data
                const data = obj.data
                if(obj.ret && data){
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImgs = data.gallaryImgs
                    this.list = data.tickyList
                    this.baseInfoList = data.baseInfoList
                    this.promoteList = data.promoteList
                }
            }
        }
    },
    mounted () {
        this.getDetailInfo()
    },
 
}

</script>

<style lang="stylus" scoped>
* 
    touch-action pan-y
.detail 
    background #eee
</style>