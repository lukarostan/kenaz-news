<template>
    <div class="banner">
        <div class="text">
            <span class="varela">banner</span>
            <span class="varela">940x120</span>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="sass" scoped>
    .banner
        width: 100%
        border: 1px solid #d7d7d7
        background: #fff
        height: 120px
        margin: 20px 0
        position: relative
        .text
            margin: auto
            display: flex
            flex-direction: column
            width: fit-content
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            text-align: center
            span
                color: #999
</style>