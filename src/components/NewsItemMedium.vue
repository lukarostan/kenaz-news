<template v-slot:control>
    <div class="medium varela">
        <img :src="image" alt="">
        <div class="medium-content-date">
            <span>{{date}}</span>
            <span>14</span>
        </div>
        <h3>{{title}}</h3>
    </div>
</template>
<script>
export default {
    props:['title','image','date']
}
</script>
<style lang="sass" scoped>
@media only screen and (min-width: 601px)
    .medium
        

.medium
    transition: all 0.5s
    padding: 15px 20px 15px 0
    min-width: 40%
    img
        max-width: 60%
        max-height: 60%
    .medium-content-date
        display: flex
        justify-content: space-between
        font-size: 12px
        width: 80%
    h3
        font-size: 18px
        width: 70%


</style>