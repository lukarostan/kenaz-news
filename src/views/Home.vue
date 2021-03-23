<template>
  <div class="content">
    
    <Banner />
    <MainSlider />
    <div class="home">
      <div class="main">
          <CategoryContainer 
          categoryContainerTitle="News"
          :categoryContainerColor="'blue'">
          </CategoryContainer>
          <CategoryContainer 
          categoryContainerTitle="Sport"
          :categoryContainerColor="'teal'">
          </CategoryContainer>
          <Banner />
          <CategoryContainer 
          categoryContainerTitle="Business"
          :categoryContainerColor="'red'">
          </CategoryContainer>
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

export default {
  name: 'Home',
  components:{
    Banner,
    MainSlider,
    CategoryContainer,
    SideContent
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
  .home
    width: 100%
    margin: 10px 0
    display: flex
    flex-direction: row
    .main
      width: 75%
    
        

</style>