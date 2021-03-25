<template>
  <div class="side">
    <FeaturedNewsContainer />
    <div class="banner-container">
      <Banner />
      <Banner />
    </div>
  </div>
</template>
<script>
import FeaturedNewsContainer from './FeaturedNewsContainer'
import Banner from './Banner'
export default {
    components:{
        FeaturedNewsContainer,
        Banner
    }
};
</script>
<style lang="sass" scoped>
@media only screen and (min-width: 600px)
  .side
    margin: 10px 0 10px 20px
    


.side
      .banner-container
        display: grid
        margin-top: 20px
        grid-template-columns: 40% 40%
        justify-content: space-around
        padding: 15px
        background: #ddd
</style>