<template>
    <div class="search">
        <search-header></search-header>
        <search-history></search-history>
        <search-hot></search-hot>
        <search-nearby></search-nearby>
    </div>
</template>

<script>
import SearchHeader from './components/Header'
import SearchHistory from './components/History'
import SearchHot from './components/Hot'
import SearchNearby from './components/Nearby'
export default {
    name: 'Search',
    data () {
        return {
        };
    },
    components: {
        SearchHeader,
        SearchHistory,
        SearchHot,
        SearchNearby
    },
    computed: {},
    methods: {}
}

</script>

<style lang="stylus" scoped>

</style>