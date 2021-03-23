<template>
    <div class="featured">
        <div class="featured-navigation">
            <a class="active varela" href="#">Popular</a>
            <a class="varela" href="#">Top Rated</a>
            <a class="varela" href="#">Comments</a>
        </div>
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
    margin: 10px 0 10px 20px
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