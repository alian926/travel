<template>
    <div class="hotel">
        <hotel-header></hotel-header>
        <hotel-search></hotel-search>
    </div>
</template>

<script>
import HotelHeader from './components/Header'
import HotelSearch from './components/Search'
export default {
    name: 'Flight',
    data () {
        return {
        };
    },
    components: {
        HotelHeader,
        HotelSearch
    },
    computed: {},
    methods: {}
}

</script>

<style lang="stylus" scoped>
.hotel
    background #eee
</style>