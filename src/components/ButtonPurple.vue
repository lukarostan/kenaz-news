<template>
    <div class="button-container">
        <button :class="height">{{buttonLabel}}</button>
    </div>
</template>
<script>
export default {
    props:['buttonLabel','height']

}
</script>
<style lang="sass" scoped>
.tall
    padding: 15px 
.short
    padding: 5px 15px
button
    background: $purple-dark
    border: none
    color: #fff
    transition: all 0.15s
button:hover
    background: $purple-light
    cursor: pointer
</style>