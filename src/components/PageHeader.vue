<template>
<div class="header">
    <div class="header-background">
        <div class="header-container">
            <header >
                <div class="logo">
                    <img src="../assets/kenaz-logo-white.png" alt="">
                </div>
                <router-link to ="/">
                    <h1 class="header-title bitter">Kenaz</h1>
                </router-link>
            </header>
            <Search />
            <LanguageSelector />
        </div>
    </div>
    <HeaderNavigation />
</div>
</template>
<script>
import Search from './Search.vue'
import LanguageSelector from './LanguageSelector.vue'
import HeaderNavigation from './HeaderNavigation.vue'
export default {
    components:{
        Search,
        LanguageSelector,
        HeaderNavigation
    }
}
</script>
<style lang="sass" scoped>

@media only screen and (max-width: 600px)
    .header-container
        width: 100%
        overflow: auto

@media only screen and (min-width: 601px) and (max-width: 1024px)
    .header-container
        width: 90%
        overflow: auto
        
@media only screen and (min-width: 1025px) and (max-width: 1366px)
    .header-container
        width: 90%
@media only screen and (min-width: 1367px) and (max-width: 1600px)
    .header-container
        width: 80%
@media only screen and (min-width: 1601px)
    .header-container
        width: 65%


.header
    display: flex
    flex-direction: column    
    .header-background
        width: 100%
        background: $black-primary
        height: 5vh
        display: flex
        .header-container
            margin: auto
            display: flex
            justify-content: space-between
            header
                width: 100%
                display: flex
                .logo
                    background: $black-secondary
                    width: 60px
                    display: flex
                    height: 5vh
                    img
                        margin: auto
                        width: fit-content
                        height: fit-content
                .header-title
                    color: #FFF
                    font-size: 24px
                    align-self: center
                    margin: 0.5vw 0 0 0.5vw
                    font-weight: 400
    
</style>