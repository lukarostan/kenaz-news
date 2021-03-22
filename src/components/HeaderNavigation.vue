<template>
    <div class="navigation-background">
        <div class="navigation-container">
            <button class="navigation-button"
            v-on:click="showNavMobile = !showNavMobile">
            <div></div><div></div><div></div>
            </button>
            <ul class="navigation" v-if="showNavMobile">
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
    data(){
        return{
            showNavMobile: true
        }
    }
}
</script>
<style lang="sass" scoped>

@media only screen and (max-width: 425px)
    .navigation
        grid-template-columns: 100%
        .navigation-item
            min-width: 200px
@media only screen and (min-width: 425px) and (max-width: 600px)
    .navigation-container
        width: 100%
        display: flex
        flex-direction: column
        
        .navigation
            display: grid
            grid-template-columns: 50% 50%
            justify-items: center
        .navigation-item
            padding: 10px 5px
            min-width: 100%
        .navigation-item:nth-of-type(2)
            background: #EE6151
        .navigation-item:nth-of-type(3)
            background: #84C14F
        .navigation-item:nth-of-type(4)
            background: #5DCFF3
        .navigation-item:nth-of-type(5)
            background: #FCC44D
        .navigation-item:nth-of-type(6)
            background: #A99765
        .navigation-item:nth-of-type(7)
            background: #009688
        .navigation-item:nth-of-type(8)
            background: #d7ccc8

@media only screen and (min-width: 600px)
    .navigation-container
        width: 70%
        .navigation-button
            display: none
        .navigation
            display: flex
            flex-direction: row 
            .navigation-item
                padding: 15px 5px



.navigation-background
    background: $purple-dark
    .navigation-container
        margin: auto
        .navigation-button
            margin: auto
            width: fit-content
            padding: 5px
            border: 2px solid white
            border-radius: 4px
            margin: 5px auto
            background: $purple-dark
            div
                width: 25px
                background: white
                height: 2px
                margin: 5px
                border-radius: 2px
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