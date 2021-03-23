<template>
    <div class="featured-item varela">
            <div class="featured-item-content">
                <div class="featured-content-date">
                    <span>August 26, 2013</span>
                    <span> <img src="../assets/comment-ico.png" alt=""> 5</span>
                </div>
                <h3>Palestinians call of peace talks after clash</h3>
            </div>
            <img class="border" src="../assets/featured-example.png" alt="">
        </div>
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
.featured-item
        padding: 25px
        display: flex
        flex-direction: row
        color: white
        border-bottom: 1px solid $purple-dark
        .featured-item-content
            display: flex
            flex-direction: column
        .featured-content-date
            display: flex
            flex-direction: row
            font-size: 12px
            justify-content: space-between
            color: #ACB3BA
            width: 80%
        h3
            font-size: 14px
            line-height: 18px
            margin: 5px 0
        .border
            border: 2px solid white
</style>