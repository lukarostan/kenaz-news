<template>
    <div class="category-news-container bitter">
        <h2>News</h2>
        <CategoryNewsArticle />
        <CategoryNewsArticle />
        <CategoryNewsArticle />
        <CategoryNewsArticle />
        <Pagination />
    </div>
</template>
<script>
import CategoryNewsArticle from './CategoryNewsArticle.vue'
import Pagination from './Pagination'
export default {
    components:{
        CategoryNewsArticle,
        Pagination
    }
}
</script>
<style lang="sass" scoped>
.category-news-container
    width: 100%
    background: white
    margin: 10px 0
    position: relative
    h2
        padding: 25px 35px
        
    
    

</style>