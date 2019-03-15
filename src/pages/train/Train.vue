<template>
    <div class="train">
        <train-header></train-header>
        <train-search></train-search>
        <train-banner></train-banner>
    </div>
</template>

<script>
import TrainHeader from './components/Header'
import TrainBanner from './components/Banner'
import TrainSearch from './components/Search'
export default {
    name: 'Train',
    data () {
        return {
        };
    },
    components: {
        TrainHeader,
        TrainBanner,
        TrainSearch
    },
    computed: {},
    methods: {}
}

</script>

<style lang="stylus" scoped>
.train 
    background #eee
</style>