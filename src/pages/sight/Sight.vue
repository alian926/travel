<template>
    <div class="sight">
        <sight-header></sight-header>
        <sight-filter></sight-filter>
        <sight-list></sight-list>
        <sight-more></sight-more>
    </div>
</template>

<script>
import SightHeader from './components/Header'
import SightFilter from './components/Filter'
import SightList from './components/List'
import SightMore from './components/More'

export default {
    name: 'Sight',
    data () {
        return {
        };
    },
    components: {
        SightHeader,
        SightFilter,
        SightList,
        SightMore
    },
    computed: {},
    methods: {}
}

</script>

<style lang="stylus" scoped>

</style>