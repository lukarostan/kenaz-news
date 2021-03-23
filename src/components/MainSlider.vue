<template>
    <div class="main-slider">
        <div class="slider-item">
            <img class="slider-background" src="../assets/slider-example.png" alt="">
            <div class="slider-controls">
                <img src="../assets/main-slider-left.png" alt="left">
                <img src="../assets/main-slider-right.png" alt="right">
            </div>
            <div class="slider-content-container varela">
                <div class="content-date">
                    <span>August 26, 2013</span>
                    <span><img src="../assets/comment-ico.png" alt="">22 Comments</span>
                </div>
                <h2 class="slider-title">'Margot' breathlessly reimagines Anne Frank's sister</h2>
                <button class="slider-button varela">Read article</button>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
.main-slider
    position: relative
    overflow: hidden
    .slider-item
        .slider-background
            width: 100%
            z-index: -1
        .slider-controls
            position: absolute
            top: 50%
            left: 0
            width: 100%
            display: flex
            justify-content: space-between
            transform: translateY(-50%)
            img
                margin: 15px
            img:hover
                cursor: pointer
        .slider-content-container:after
            content: 
            display: block
            position: absolute
            width: 100%
            height: 100%
            background-color: rgba(0,0,0,0.4)
            z-index: 0
            bottom: 0
        .slider-content-container
            position: absolute
            bottom: 40px
            left: 10px
            width: 100%
            z-index: 1
            color: white
            .content-date
                font-size: 12px
                span
                    margin: 5px 15px
                    img
                        margin: 0 5px
            .slider-title
                font-size: 34px
                line-height: 40px
                margin: 5px 15px
            .slider-button
                background: rgba(0, 0, 0, 0.0001)
                border: 1px solid #fff
                color: white
                padding: 5px 10px
                margin: 5px 15px
</style>