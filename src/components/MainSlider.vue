<template>
    <div class="main-slider">
        <div class="slider-controls">
            <img src="../assets/main-slider-left.png" alt="left" @mousedown="mainSliderLeftHandler">
            <img src="../assets/main-slider-right.png" alt="right" @mousedown="mainSliderRightHandler">
        </div>
        <div class="slider-container">
            <div class="slider-item varela"
            :style="{transform: 'translateX('+ mainSliderPosition * 100 +'%)'}"
            v-for="article in this.$store.state.news.data.articles.slice(0,5)"
            :key="article.url"
            >
                <img 
                class="slider-background" 
                alt=""
                :src="article.urlToImage"
                >
                <div class="slider-content">
                    <div class="content-date">
                        <span>{{article.publishedAt.slice(0,10)}}</span>
                        <span><img src="../assets/comment-ico.png" alt="">22 {{ $t('comments-label') }}</span>
                    </div>
                    <h2 
                    class="slider-title"
                    >{{article.title}}</h2>
                    <button class="slider-button varela">{{ $t('read-article') }}</button>
                </div>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
    data(){
        return{
            mainSliderPosition: 0,
            title: '',
            image: ''
        }
    },
    methods:{
        mainSliderLeftHandler() {
            console.log(this.mainSliderPosition)
            if(this.mainSliderPosition == -4){ //articles.length
                return this.mainSliderPosition = 0
            }else
            {
                return this.mainSliderPosition--;
            }
        },
        mainSliderRightHandler() {
            console.log(this.mainSliderPosition)
            if(this.mainSliderPosition == 0){
                return this.mainSliderPosition = -4 //articles.length
            }else{
                return this.mainSliderPosition++;
            }
        },
    }
}
</script>
<style lang="sass" scoped>
@media only screen and (max-width: 600px)
    .slider-title
        
@media only screen and (min-width: 600px)
    .slider-title
        font-size: 34px
        line-height: 40px
    .slider-content
        padding: 20px


.main-slider
    position: relative
    overflow: hidden
    .slider-container
        position: relative
        width: 500%
        .slider-item
            transition: all 0.5s
            width: 20%
            float: left
            max-height: 700px
            .slider-background
                width: 100%
                transition: all 0.5s
                float: left
            .slider-content
                z-index: 2
                position: absolute
                bottom: 0
                color: white
                background: linear-gradient(to top, black, transparent)
                width: 100%
    .slider-controls
        position: absolute
        top: 50%
        left: 0
        width: 100%
        display: flex
        justify-content: space-between
        transform: translateY(-50%)
        z-index: 2
        img
            margin: 15px
            transition: all 0.15s
        img:hover
            cursor: pointer
            transform: scale(1.1)
    .slider-item
        
        .content-date
            font-size: 12px
            span
                margin: 5px 15px
                img
                    margin: 0 5px
        .slider-title
            margin: 5px 15px
        .slider-button
            background: rgba(0, 0, 0, 0.0001)
            border: 1px solid #fff
            color: white
            padding: 5px 10px
            margin: 5px 15px
</style>