<template>
    <div class="featured">
        <div class="featured-navigation">
            <a class="active varela" href="#">{{ $t('popular') }}</a>
            <a class="varela" href="#">{{ $t('top-rated') }}</a>
            <a class="varela" href="#">{{ $t('comments') }}</a>
        </div>
        <FeaturedNewsItem />
        <FeaturedNewsItem />
        <FeaturedNewsItem />
        <FeaturedNewsItem />
        <FeaturedNewsItem />
        
    </div>
</template>
<script>
import FeaturedNewsItem from './FeaturedNewsItem'
export default {
    components:{
        FeaturedNewsItem
    }
}
</script>
<style lang="sass" scoped>
.featured
    background: $purple-light
    min-height: fit-content
    .featured-navigation
        background: $purple-dark
        width: 100%
        display: flex
        justify-content: space-evenly
        a
            color: white
            padding: 15px 5px
            text-decoration: underline #ACB3BA
        .active
            color: #fcc44d
            text-decoration-color: #FCC44D
    
</style>