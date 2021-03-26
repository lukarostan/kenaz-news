<template>
  <div class="content">
    
    <Banner />
    <MainSlider />
    <div class="home">
      <div class="main">
          <CategoryContainer 
          :categoryContainerTitle=" $t('news') "
          :categoryContainerColor="'blue'"
          :categoryContainerDisplay="'row'">
            <SeeAll />
            <NewsItemMedium />
            <NewsItemMedium />
            <NewsItemMedium />
          </CategoryContainer>
          <CategoryContainer 
          :categoryContainerTitle=" $t('sports') "
          :categoryContainerColor="'teal'"
          :categoryContainerDisplay="'row'">
            <NewsItemMedium />
            <NewsItemMedium />
            <NewsItemMedium />
          </CategoryContainer>
          <Banner />
          <CategoryContainer 
          :categoryContainerTitle=" $t('business') "
          :categoryContainerColor="'red'"
          :categoryContainerDisplay="'grid'">
            <NewsItemMedium />
            <NewsItemMedium />
            <NewsItemMedium />
            <NewsItemMedium />
          </CategoryContainer>
          <Banner />
        </div>
        <SideContent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '../components/Banner.vue'
import MainSlider from '../components/MainSlider.vue'
import CategoryContainer from '../components/CategoryContainer.vue'
import SideContent from '../components/SideContent.vue'
import NewsItemMedium from '../components/NewsItemMedium'
import SeeAll from '../components/SeeAll'

export default {
  name: 'Home',
  components:{
    Banner,
    MainSlider,
    CategoryContainer,
    SideContent,
    NewsItemMedium,
    SeeAll
  },
  watch:{
    news(){
      console.log(this.$store.state.news)
      return this.$store.state.news
    }
  }
}
</script>
<style lang="sass" scoped>
@media only screen and (max-width: 600px)
  .content
    width: 100%
    .home
      flex-direction: column
      .side
        order: -1
      
@media only screen and (min-width: 600px)
  .content
    width: 60%
    .home
      flex-direction: row
      .main
        width: 75%


.content
  margin: 10px auto
  .home
    width: 100%
    margin: 10px 0
    display: flex
    
    
        

</style>