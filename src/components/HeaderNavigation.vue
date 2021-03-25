<template>
    <div class="navigation-background">
        <div class="navigation-container">
            <ul class="navigation">
                <li class="navigation-item">
                    <a class="bitter" href="#">news</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">business</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">entertainment</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">general</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">health</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">science</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">sports</a>
                </li>
                <li class="navigation-item">
                    <a class="bitter" href="#">technology</a>
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
        display: flex
        flex-direction: column
        .navigation
            display: flex
            flex-direction: row
            overflow: auto
        .navigation-item
            padding: 10px 5px
            width: fit-content

@media only screen and (min-width: 600px)
    .navigation-container
        width: 60%
        .navigation-button
            display: none
        .navigation
            display: flex
            flex-direction: row 
            .navigation-item
                padding: 15px 5px



.navigation-background
    background: $purple-light
    .navigation-container
        margin: auto
        .navigation
            .navigation-item
                box-shadow: inset 0 -5px 0 #A99765
                width: fit-content
                height: fit-content
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