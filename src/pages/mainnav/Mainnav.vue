<template>
    <div class="mainnav">
        <main-header></main-header>
        <main-content></main-content>
        <main-icons></main-icons>
        <main-footer></main-footer>
    </div>
</template>

<script>
import MainHeader from './components/Header'
import MainContent from './components/Content'
import MainIcons from './components/Icons'
import MainFooter from './components/Footer'
export default {
    name: 'Mainnav',
    data () {
        return {
        };
    },
    components: {
        MainHeader,
        MainContent,
        MainIcons,
        MainFooter
    },
    computed: {},
    methods: {}
}

</script>

<style lang="stylus" scoped>

</style>