<template>
    <div class="main">
        <ul>
            <li class="active">
                <a  href="javascript:;">触屏版</a>
            </li>
            <li>
                <a href="javascript:;">电脑版</a>
            </li>
        </ul>
        <div class="copyright">
            <span>Qunar 京ICP备05021087</span>
            <a class="qn_ml25" href="javascript:;">意见反馈</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Copyright',
}

</script>

<style lang="stylus" scoped>
.main
    background #f3f3f3    
    ul 
        padding 10px 0 0 0
        text-align center
        li 
            display inline-block
            margin 0 15px 
            a 
                font-size: 14px
                color: #25a4bb 
        li.active 
            a  
                color #000
    .copyright 
        color #9e9e9e
        text-align center
        font-size 14px
        padding 10px
        a  
            color #9e9e9e
            height 33px
</style>