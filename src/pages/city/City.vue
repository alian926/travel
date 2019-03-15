<template>
<div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
</div> 
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
    name: 'City',
    data(){
        return{
            cities:{},
            hotCities:[],
            letter:'',
        }
    },
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods: {
        getCityInfo(){
            axios.get('/api/city.json')
                .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            if(res.status == 200){
                const obj = res.data
                const data = obj.data
                if(obj.ret && data){
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            }
        },
        handleLetterChange(letter){
            this.letter = letter
        }
    },
    mounted () {
        this.getCityInfo()
    },
}

</script>

<style lang="stylus" scoped>

</style>