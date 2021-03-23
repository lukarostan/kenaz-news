<template>
  <div class="content">
    <Banner />
    <MainSlider />
  </div>
</template>
<script>
import Banner from '../components/Banner'
import MainSlider from '../components/MainSlider'
export default {
  components:{
    Banner,
    MainSlider
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
</style>