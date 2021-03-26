<template>
    <div class="category-article">
        <h3>Patriots make cuts... and Tim Tebow survives (so far)</h3>
        <div class="article-info varela">
            <span> <img src="../assets/calendar.png" alt=""> August 26, 2013</span>
            <span>{{$t('author')}}: Matej Sudar</span>
            <span>12 {{$t('comments')}}</span>
        </div>
        <div class="article-content">
            <img src="../assets/category-article.png" alt="">
            <div class="paragraph-container">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. </p>
                <ButtonPurple 
                :buttonLabel="$t('read-article')"
                :buttonSize="'short'">
                </ButtonPurple>

            </div>
        </div>
    </div>
</template>
<script>
import ButtonPurple from './ButtonPurple'
export default {
    components:{
        ButtonPurple
    }
}
</script>
<style lang="sass" scoped>
.category-article
    display: flex
    flex-direction: column
    padding: 20px 45px
    border-bottom: 1px solid #DDD
    .article-info
        display: flex
        margin: 15px 0
        align-items: center
        span
            margin-right: 10%
            color: #666
            font-size: 12px
    .article-content
        display: flex
        flex-direction: row
        .paragraph-container
            margin: 0 30px
            
    .button-container
        margin: 10px 0


</style>