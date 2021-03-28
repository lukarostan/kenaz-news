<template>
    <div class="slider-container">
        <div class="slider-controls">
            <div class="nav">
                <img src="../assets/main-slider-left.png" alt=""
                @mousedown="sliderLeft">
                <img src="../assets/search.png" alt="">
                <img src="../assets/main-slider-right.png" alt=""
                @mousedown="sliderRight">
            </div>
            <div class="pictures-bar">
                <img src="../assets/pictures-bar (1).png" alt="">
                <img src="../assets/pictures-bar (2).png" alt="">
                <img src="../assets/pictures-bar (3).png" alt="">
                <img src="../assets/pictures-bar (4).png" alt="">
                <img src="../assets/pictures-bar (5).png" alt="">
                <img src="../assets/pictures-bar (6).png" alt="">
                <img src="../assets/pictures-bar (7).png" alt="">
            </div>
        </div>
        <div class="slider" id="slider">
            <img src="../assets/picture-slider.png" alt="" class="slider-image">
            <img src="../assets/picture-slider.png" alt="" class="slider-image">
            <img src="../assets/picture-slider.png" alt="" class="slider-image">
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            sliderPosition: 0
        }
    },
    methods:{
        sliderLeft(){
            console.log("left")
            this.sliderPosition = this.sliderPosition + 1 
            console.log(this.sliderPosition)
            document.getElementsByClassName("slider-image").style.transform =  "translateX(-100%)"
        },
        sliderRight(){
            console.log("right")
        }
    }
}
</script>
<style lang="sass" scoped>
.slider-container
    position: relative
    width: 100%
    .slider-controls
        position: absolute
        width: 100%
        bottom: 0
        height: 50%
        background: linear-gradient(to top, black, transparent)
        .nav
            display: flex
            justify-content: space-between
            transform: translateY(-50%)
            img
                height: fit-content
                margin: auto 5%
                transition: all 0.15s ease-out
            img:hover
                cursor: pointer
                transform: scale(1.1)
        .pictures-bar
            display: flex
            justify-content: space-evenly
            width: 90%
            margin: 0 auto
            position: absolute
            transform: translateX(5%)
            img
                transition: all 0.15s ease-out
            img:hover
                cursor: pointer
                transform: translateY(-2%)
            
    .slider
        overflow: auto
        display: flex
        flex-direction: row
        img
            width: 100%
</style>