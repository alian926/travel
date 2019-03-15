<template>
    <div class="rank">
        <rank-header></rank-header>
        <rank-city></rank-city>
        <rank-tap></rank-tap>
        <rank-branch></rank-branch>
        <rank-more></rank-more>
    </div>
</template>

<script>
import RankHeader from './components/Header'
import RankCity from './components/City'
import RankTap from './components/Tap'
import RankBranch from './components/Branch'
import RankMore from './components/More'
export default {
    name: 'Rank',
    data () {
        return {
        };
    },
    components: {
        RankHeader,
        RankCity,
        RankTap,
        RankBranch,
        RankMore
    },
    computed: {},
    methods: {}
}

</script>

<style lang="stylus" scoped>

</style>