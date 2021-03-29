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
    .category
      flex-direction: column
      .side
        order: -1
        margin: 10px 0
@media only screen and (min-width: 601px) and (max-width: 1024px)
  .content
    width: 90%
    .side
      width: 50%
@media only screen and (min-width: 1024px) and (max-width: 1366px)
  .content
    width: 90%
    .side
      width: 50%
@media only screen and (min-width: 1367px) and (max-width: 1600px)
  .content
    width: 80%
    .side
      width: 40%
@media only screen and (min-width: 1601px)
  .content
    width: 65%
    .side
      width: 40%

@media only screen and (min-width: 600px)
  .content
    .category
      flex-direction: row
  
.content
  .category
    display: flex
    

</style>