<template>
    <div class="ticky wrapper" ref="wrapper">
        <div>
        <ticky-header></ticky-header>
        <ticky-banner></ticky-banner>
        <ticky-list :list="tickyList"></ticky-list>
        <ticky-load></ticky-load>
        </div>
    </div>
</template>

<script>
import TickyHeader from './components/Header'
import TickyBanner from './components/Banner'
import TickyList from './components/List'
import TickyLoad from './components/Load'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name: 'Ticky',
    data () {
        return {
            lastCity:'',
            tickyList:[]
        };
    },
    components: {
        TickyHeader,
        TickyBanner,
        TickyList,
        TickyLoad
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getTickyInfo () {
            axios.get('/api/ticky.json')
                .then(this.getTickyInfoSucc)
                
        },
        getTickyInfoSucc (res) {
            if(res.status == 200){
                const obj = res.data
                const data = obj.data
                if(obj.ret && data){
                    this.tickyList = data.tickyList
                }
            }
        }
    },
    mounted () {
        this.getTickyInfo()
        this.lastCity = this.city
        
    },
    activated () {
        if(this.lastCity !== this.city){
            this.lastCity = this.city
            this.getTickyInfo()
        }
    },
}

</script>

<style lang="stylus" scoped>
.ticky 
    background: #f3f3f3
*
    touch-action pan-y
</style>