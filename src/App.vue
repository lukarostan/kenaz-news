<template>
  <div id="app">
    <PageHeader />
    <router-view/>
    <PageFooter />
  </div>
</template>
<script>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
export default {
  components:{
    PageHeader,
    PageFooter

  },
  mounted(){
    this.$store.dispatch('getNews')
  }
}
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Varela+Round&display=swap')
*
  margin: 0
  padding: 0
  box-sizing: border-box
ul
  list-style-type: none
a
  text-decoration: none
.bitter
  font-family: 'Bitter',sans-serif
.varela
  font-family: 'Varela Round',sans-serif
body
  background: #eee
</style>
