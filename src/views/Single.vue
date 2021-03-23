<template>
    <div class="content">

        <Banner />
    </div>
</template>
<script>
import Banner from '../components/Banner'
export default {
    components:{
        Banner
    }
}
</script>
<style lang="sass">
@media only screen and (max-width: 600px)
  .content
    width: 100%
@media only screen and (min-width: 600px)
  .content
    width: 70%

  
.content
  margin: 10px auto
</style>