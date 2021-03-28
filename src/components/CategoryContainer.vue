<template>
    <div class="category-container" :class="categoryContainerColor">
        <div class="category-title">
            <h2 class="bitter">{{ categoryContainerTitle }}</h2>
            <slot name="control">
                
            </slot>
        </div>
        <div class="category-news-container" :class="categoryContainerDisplay">
            <slot>
            </slot>
        </div>
    </div>
</template>
<script>
/* import NewsItemMedium from './NewsItemMedium' */
export default {
    components:{
        
    },
    props:[
        'categoryContainerTitle',
        'categoryContainerColor',
        'categoryContainerDisplay']
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

    
//categoryContainerColor
.blue
    border-left: 12px solid #299EC3
.teal
    border-left: 12px solid #009688
.red
    border-left: 12px solid #EE6151




.category-container
    background: white
    padding: 15px 20px
    margin: 10px 0
    .category-title
        width: 100%
        display: flex
        justify-content: space-between
        text-transform: capitalize
</style>