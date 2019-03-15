<template>
    <div>
        <one-header></one-header>
        <one-filter></one-filter>
        <one-List></one-List>
        <one-more></one-more>
    </div>
</template>

<script>
import OneHeader from './components/Header'
import OneMore from './components/More'
import OneFilter from './components/Filter'
import OneList from './components/List'
export default {
    name: 'One',
    data () {
        return {
        };
    },
    components: {
        OneHeader,
        OneMore,
        OneFilter,
        OneList
    },
    computed: {},
    methods: {}
}

</script>

<style lang="stylus" scoped>

</style>