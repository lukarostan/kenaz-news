<template>
  <div class="content">
    
    <Banner />
    <div class="news">
      <p :v-for="article in news.data.articles">article</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '../components/Banner.vue'

export default {
  name: 'Home',
  components:{
    Banner
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
.content
  width: 70%
  margin: 10px auto
  background: white
</style>