<template>
    <div class="slider-container">
        <div class="slider-controls">
            <div class="nav">
                <img src="../assets/main-slider-left.png" alt=""
                @mousedown="pictureSliderLeftHandler">
                <img src="../assets/search.png" alt="">
                <img src="../assets/main-slider-right.png" alt=""
                @mousedown="pictureSliderRightHandler">
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
            <img :style="{transform: 'translateX('+ this.pictureSliderPosition * 100 +'%)'}" src="../assets/picture-slider.png" alt="" class="slider-image">
            <img :style="{transform: 'translateX('+ this.pictureSliderPosition * 100 +'%)'}" src="../assets/picture-slider.png" alt="" class="slider-image">
            <img :style="{transform: 'translateX('+ this.pictureSliderPosition * 100 +'%)'}" src="../assets/picture-slider.png" alt="" class="slider-image">
            <img :style="{transform: 'translateX('+ this.pictureSliderPosition * 100 +'%)'}" src="../assets/picture-slider.png" alt="" class="slider-image">

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pictureSliderPosition: 0
        }
    },
    methods:{
        pictureSliderLeftHandler(){
            
            console.log(this.pictureSliderPosition)
            if(this.pictureSliderPosition <=0){
                return this.pictureSliderPosition++ 
            }
        },
        pictureSliderRightHandler(){
            if(this.pictureSliderPosition >=0){
                return this.pictureSliderPosition--
            }
            console.log(this.pictureSliderPosition)
        }
    }
}
</script>
<style lang="sass" scoped>
.slider-container:hover .slider-controls
    opacity: 1
.slider-container
    position: relative
    width: 100%
    .slider-controls
        position: absolute
        width: 100%
        bottom: 0
        height: 50%
        background: linear-gradient(to top, black, transparent)
        z-index: 2
        opacity: 0
        transition: opacity 0.2s ease-in
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
            overflow-x: auto
            img
                transition: all 0.15s ease-out
            img:hover
                cursor: pointer
                transform: translateY(-2%)
            
    .slider
        overflow: hidden
        display: flex
        flex-direction: row
        height: 500px
        .slider-image
            width: 1000px
            transition: all 0.5s
</style>