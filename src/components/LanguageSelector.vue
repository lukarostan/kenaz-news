<template>
    <div class="language-selector">
        <button class="varela active">EN</button>
        <button class="varela">HR</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
.language-selector
    display: flex
    margin: 0 5px
    button
        border: none
        padding: 0 10px
        margin: 0 5px
        background: $black-secondary
        color: white    
        font-size: 14px
        transition: 0.1s
    button:focus
        outline: none
    button:hover
        cursor: pointer
        background: white
        color: black
    .active
        font-weight: bold
        border-top: 1px solid white
    .active:hover
        cursor: default
        background: $black-secondary
        color: white
</style>
