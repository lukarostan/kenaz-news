<template>
    <div class="search" >
        <transition
        enter-to-class="appear"
        leave-active-class="disappear">
        <div class="search-input-container" v-if="searchBarOpen">
            <input type="text" :placeholder= " $t('search-placeholder') " >
            <select name="category" id="">
                <option value="">{{ $t('business') }}</option>
                <option value="">{{ $t('entertainment') }}</option>
                <option value="">{{ $t('general') }}</option>
                <option value="">{{ $t('health') }}</option>
            </select>
        </div>
        </transition>
        <img src="../assets/search.png" alt="" v-on:click="searchBarOpen = !searchBarOpen">
    </div>
</template>
<script>
export default {
    data() {
        return{
            searchBarOpen : false
        }
    },
}
</script>
<style lang="sass">
.search:hover
    cursor: pointer
.search
    background: $black-secondary
    width: fit-content
    display: flex
    flex-direction: row
    padding: 0 5px 
    img
        width: 20px
        margin: auto 5px
        align-self: center
    .search-input-container
        display: flex
        align-items: center
        transition: all 0.1s
        transform: translateX(0%)
        input, select
            padding: 5px
            background: white
            border: none
            margin: 0 5px
            text-transform: capitalize
    .appear //it's not a bug, it's a feature :D
        transform: translateX(-20%) 
        opacity: 1
    .disappear
        transform: translateX(100%)
        opacity: 0
</style>