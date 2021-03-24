<template>
  <div class="content">
    <Banner />
    <MainSlider />
    <div class="category">
      <CategoryNews />
      <SideContent />
    </div>
    <Banner />
  </div>
</template>
<script>
import Banner from '../components/Banner'
import MainSlider from '../components/MainSlider'
import CategoryNews from '../components/CategoryNews'
import SideContent from '../components/SideContent'
export default {
  components:{
    Banner,
    MainSlider,
    CategoryNews,
    SideContent
  }
}
</script>
<style lang="sass" scoped>
@media only screen and (max-width: 600px)
  .content
    width: 100%
@media only screen and (min-width: 600px)
  .content
    width: 60%

  
.content
  margin: 10px auto
  .category
    display: flex
    flex-direction: row

</style>