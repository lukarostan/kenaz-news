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
    <Banner />
    <PictureSlider v-if="false"/>
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
import PictureSlider from '../components/PictureSlider'

export default {
  name: 'Home',
  components:{
    Banner,
    MainSlider,
    CategoryContainer,
    SideContent,
    NewsItemMedium,
    SeeAll,
    PictureSlider
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
      
@media only screen and (min-width: 601px) and (max-width: 1024px)
  .content
    width: 90%
    .side
      width: 80%
@media only screen and (min-width: 1024px) and (max-width: 1366px)
  .content
    width: 90%
    .side
      width: 60%
@media only screen and (min-width: 1367px) and (max-width: 1600px)
  .content
    width: 80%
    .side
      width: 50%
@media only screen and (min-width: 1601px)
  .content
    width: 65%
    .side
      width: 55%

.content
  margin: 10px auto
  .home
    width: 100%
    margin: 10px 0
    display: flex
    
    
        

</style>