<template>
    <div class="flight">
        <flight-header></flight-header>
        <flight-search></flight-search>
        <flight-banner></flight-banner>

    </div>
</template>

<script>
import FlightBanner from './components/Banner'
import FlightHeader from './components/Header'
import FlightSearch from './components/Search'
export default {
    name: 'Flight',
    data () {
        return {
        };
    },
    components: {
        FlightBanner,
        FlightHeader,
        FlightSearch
    },
    computed: {},
    methods: {}
}

</script>

<style lang="stylus" scoped>
.flight 
    background #eee
</style>