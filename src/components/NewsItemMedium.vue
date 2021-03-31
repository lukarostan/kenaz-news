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
        img
        max-width: 100%
        max-height: 100%

.medium
    transition: all 0.5s
    padding: 15px 0
    min-width: 35%
    img
        max-width: 90%
        max-height: 100%
    .medium-content-date
        display: flex
        justify-content: space-between
        font-size: 12px
        width: 80%
        margin: 0
    h3
        font-size: 18px
        width: 70%


</style>