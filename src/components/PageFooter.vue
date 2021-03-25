<template>
    <div class="footer">
        <div class="footer-background">
            <footer>
                <div class="logo-and-social bitter">
                    <div class="logo">
                        <img src="../assets/kenaz-logo-footer.png" alt="">
                        <h2>Kenaz</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.</p>
                    <img class="social" src="../assets/social.png" alt="">
                </div>
                <div class="newsletter bitter">
                    <h3>Newsletter</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.</p>
                    <div class="input-container">
                        <input class="varela" type="text" placeholder="Your mail">
                        <ButtonPurple
                        :buttonLabel="'Subscribe'"
                        :height="'tall'"></ButtonPurple>
                    </div>
                </div>
                <div class="tags">
                    <h3 class="bitter">Tags Widget</h3>
                    <div class="tags-container varela">
                        <span class="tag">lorem</span>
                        <span class="tag">ipsum</span>
                        <span class="tag">dolor</span>
                        <span class="tag">sit</span>
                        <span class="tag">amet</span>
                        <span class="tag">lorem</span>
                        <span class="tag">ipsum</span>
                        <span class="tag">dolor</span>
                        <span class="tag">sit</span>
                        <span class="tag">amet</span>
                    </div>
                </div>
                <div class="featured">
                    <h3 class="bitter">Featured</h3>
                    <FooterNewsItem />
                    <FooterNewsItem />
                    <FooterNewsItem />
                </div>
                <div class="random-posts">
                    <h3 class="bitter">Random Posts</h3>
                    <FooterNewsItem />
                    <FooterNewsItem />
                    <FooterNewsItem />
                </div>
                <div class="recently-viewed">
                    <h3 class="bitter">Recently Viewed</h3>
                    <FooterNewsItem />
                    <FooterNewsItem />
                    <FooterNewsItem />
                </div>
            </footer>
            <div class="footer-bottom varela">
                <div class="footer-bottom-content">
                    <p >© 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia</p>
                    <div class="footer-bottom-nav">
                        <a href="#">Typography</a>-
                        <a href="#">Templates</a>-
                        <a href="#">Contact Form</a>-
                        <a href="#">404 Page</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FooterNewsItem from './FooterNewsItem'
import ButtonPurple from './ButtonPurple'
export default {
    components:{
        FooterNewsItem,
        ButtonPurple
    }
}
</script>
<style lang="sass" scoped>
@media only screen and (max-width: 600px)
    .footer
        footer
            grid-template-columns: 1fr
            width: 100%
        .footer-bottom-content
            flex-direction: column
            text-align: center 
        .footer-bottom-content > *
            margin: 10px 0
@media only screen and (min-width: 600px)
    .footer
        footer
            grid-template-columns: 1fr 1fr 1fr
            width: 70%
.footer
    width: 100%
    .footer-background
        border-top: 20px solid $purple-light
        background: $black-primary
        footer > *
            padding: 20px
            
        footer
            margin: 40px auto
            display: grid
            h3
                color: #CCC
                font-size: 24px
            p
                margin: 20px 0
                color: #666
                font-size: 14px
                line-height: 20px
            .logo-and-social
                display: flex
                flex-direction: column
                margin-top: -20px
                .logo
                    display: flex
                    flex-direction: row
                    h2
                        color: #45B0E3
                        align-self: center
                        margin: 0 10px 
                        font-weight: 400
                .social
                    width: 90%
            .newsletter
                .input-container
                    display: flex
                    input
                        padding: 15px
                        border: none
                        background: $black-secondary
                        color: white
                        width: 70%
                    
                
            .tags
                .tags-container
                    margin: 20px 0
                    display: flex
                    flex-wrap: wrap
                    .tag
                        padding: 5px
                        background: $black-secondary
                        color: #666
                        margin: 2px
                        transition: all 0.15s
                        
                    .tag:hover
                        background: $purple-dark
                        color: white
                        cursor: pointer
            .featured
            .random-posts
            .recently-viewed
    .footer-bottom
        border-top: 1px solid #333
        .footer-bottom-content
            width: 70%
            margin: auto
            display: flex
            justify-content: space-between
            color: #999
            padding: 20px 0 100px 0
            a
                color: #999
                margin: 5px
            a:hover
                text-decoration: underline
</style>