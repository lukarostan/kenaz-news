<template>
  <div class="content">
    
    <Banner />
    <MainSlider />
    <div class="home-grid">
      <CategoryContainer 
      categoryContainerTitle="News"
      :categoryContainerColor="'blue'">
      </CategoryContainer>
      <FeaturedNewsContainer />
      <CategoryContainer 
      categoryContainerTitle="Sport"
      :categoryContainerColor="'teal'">
      </CategoryContainer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '../components/Banner.vue'
import MainSlider from '../components/MainSlider.vue'
import CategoryContainer from '../components/CategoryContainer.vue'
import FeaturedNewsContainer from '../components/FeaturedNewsContainer.vue'

export default {
  name: 'Home',
  components:{
    Banner,
    MainSlider,
    CategoryContainer,
    FeaturedNewsContainer
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
@media only screen and (min-width: 600px)
  .content
    width: 70%

  
.content
  margin: 10px auto
  .home-grid
    width: 100%
    display: grid
    grid-template-columns: 75% 25%
    margin: 10px 0
</style>