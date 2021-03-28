<template>
    <div class="navigation-background">
        <div class="navigation-container">
            <ul class="navigation">
                <li class="navigation-item">
                    <a class="bitter" href="#">{{ $t('news') }}</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">{{ $t('business') }}</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">{{ $t('entertainment') }}</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">{{ $t('general') }}</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">{{ $t('health') }}</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">{{ $t('science') }}</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">{{ $t('sports') }}</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">{{ $t('technology') }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="sass" scoped>

@media only screen and (max-width: 600px)
    .navigation-container
        width: 100%
@media only screen and (min-width: 601px) and (max-width: 1024px)
    .navigation-container
        width: 90%

@media only screen and (max-width: 1200px)
    .navigation
        overflow-x: auto
        overflow-y: hidden

@media only screen and (min-width: 1025px) and (max-width: 1366px)
    .navigation-container
        width: 90%
@media only screen and (min-width: 1367px) and (max-width: 1600px)
    .navigation-container
        width: 80%
@media only screen and (min-width: 1601px)
    .navigation-container
        width: 65%




.navigation-background
    background: $purple-light
    .navigation-container
        margin: auto
        .navigation
            display: flex
            flex-direction: row 
            .navigation-item
                box-shadow: inset 0 -5px 0 #A99765
                width: fit-content
                height: fit-content
                padding: 15px 5px
                a
                    padding: 20px
                    text-transform: uppercase
                    color: white
                    font-size: 18px
                    line-height: 22px
                    font-weight: bold
            .navigation-item:nth-of-type(1)
                background: #299EC3
                box-shadow: none
            .navigation-item:nth-of-type(2)
                box-shadow: inset 0 -5px 0 #EE6151
            .navigation-item:nth-of-type(3)
                box-shadow: inset 0 -5px 0 #84C14F
            .navigation-item:nth-of-type(4)
                box-shadow: inset 0 -5px 0 #5DCFF3
            .navigation-item:nth-of-type(5)
                box-shadow: inset 0 -5px 0 #FCC44D
            .navigation-item:nth-of-type(6)
                box-shadow: inset 0 -5px 0 #A99765
            .navigation-item:nth-of-type(7)
                box-shadow: inset 0 -5px 0 #009688
            .navigation-item:nth-of-type(8)
                box-shadow: inset 0 -5px 0 #d7ccc8
                
                
</style>