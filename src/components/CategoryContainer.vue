<template>
    <div class="category-container" :class="[categoryContainerColor, categoryContainerSize]">
        <div class="category-title">
            <h2 class="bitter">{{ categoryContainerTitle }}</h2>
            <a v-if="!showControls" href="#" class="varela">{{ $t('see-all') }}</a>
            <div v-if="showControls" class="controls">
                <div class="arrow" :class="controlsColor" id="right"></div>
                <div class="arrow" :class="controlsColor" id="left"></div>
            </div>
        </div>
        <div class="category-news-container" :class="categoryContainerDisplay">
            <slot>
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    components:{
        
    },
    props:[
        'categoryContainerTitle',
        'categoryContainerColor',
        'categoryContainerDisplay',
        'categoryContainerSize',
        'showControls',
        'controlsColor']
}
</script>
<style lang="sass" scoped>
@media only screen and (max-width: 600px)
    .category-news-container
        flex-direction: column
@media only screen and (min-width: 600px)
    //categoryContainerDisplay
    .row
        display: flex
        flex-direction: row
    .grid
        display: grid
        grid-template-columns: 1fr 1fr
    //categoryContainerSize
    .small
        width: 48%

    
//categoryContainerColor
.blue
    border-left: 12px solid #299EC3
.teal
    border-left: 12px solid #009688
.red
    border-left: 12px solid #EE6151
.yellow
    border-left: 12px solid #FCC44D
.brown
    border-left: 12px solid #A99765
//controlsColor
.yellowControls
    border-left: 6px solid #FCC44D
    border-bottom: 6px solid #FCC44D
.brownControls
    border-left: 6px solid #A99765
    border-bottom: 6px solid #A99765


.category-container
    background: white
    padding: 15px 20px
    margin: 10px 0
    .category-title
        width: 100%
        display: flex
        justify-content: space-between
        text-transform: capitalize
        .controls
            display: flex
            padding: 10px 20px
            .arrow
                height: 20px
                margin: 0 5px
                width: 20px
                border-radius: 4px
                transition: all 0.15s ease-out
            .arrow:hover
                cursor: pointer
            #right
                transform: rotate(45deg)
            #left
                transform: rotate(225deg)
</style>