<template>
    <div class="load">
        <img src="/static/tickyImg/loading_camel.gif" alt="加载中，请稍后">
         加载中，请稍后...
    </div>
</template>

<script>
export default {
    name: 'TickyLoad',
    data () {
        return {
        };
    },
    components: {},
    computed: {},
    methods: {}
}

</script>

<style lang="stylus" scoped>
.load 
    padding: 30px
    color: #25a4bb
    font-size: 16px
    line-height: 20px
    text-align: center
    img 
        min-height: 20px
</style>