<template>
  <div class="content">
    <Banner />
    <MainSlider >

    </MainSlider>
    <div class="home">
      <div class="main">
        <CategoryContainer
          :categoryContainerTitle="$t('news')"
          :categoryContainerColor="'blue'"
          :categoryContainerDisplay="'row'"
          :showControls="false"
        >
          <NewsItemMedium 
          v-for="article in this.$store.state.news.data.articles.slice(1,4)" 
          :key="article.id"
          :title="article.title"
          :image="article.urlToImage"
          :date="article.publishedAt.slice(0,10)"
          >
          </NewsItemMedium>
          
        </CategoryContainer>
        <CategoryContainer
          :categoryContainerTitle="$t('sports')"
          :categoryContainerColor="'teal'"
          :categoryContainerDisplay="'row'"
          :showControls="false"
        >
          <NewsItemMedium 
          v-for="article in this.$store.state.news.data.articles.slice(4,7)" 
          :key="article.url"
          :title="article.title"
          :image="article.urlToImage"
          :date="article.publishedAt.slice(0,10)"
          >
          </NewsItemMedium>
        </CategoryContainer>
        <Banner />
        <CategoryContainer
          :categoryContainerTitle="$t('business')"
          :categoryContainerColor="'red'"
          :categoryContainerDisplay="'grid'"
          :showControls="false"
        >
          <NewsItemMedium 
          v-for="article in this.$store.state.news.data.articles.slice(7,11)" 
          :key="article.id"
          :title="article.title"
          :image="article.urlToImage"
          :date="article.publishedAt.slice(0,10)"
          >
          </NewsItemMedium>
        </CategoryContainer>
        <Banner />
        <CategoryContainer
          :categoryContainerTitle="$t('news-carousel')"
          :categoryContainerColor="'yellow'"
          :categoryContainerDisplay="'grid'"
          :showControls="true"
          :controlsColor="'yellowControls'"
        >
          <NewsItemMedium 
          v-for="article in this.$store.state.news.data.articles.slice(12,14)" 
          :key="article.id"
          :title="article.title"
          :image="article.urlToImage"
          :date="article.publishedAt.slice(0,10)"
          >
          </NewsItemMedium>
        </CategoryContainer>
        <div class="small-containers">
          <CategoryContainer
            :categoryContainerTitle="$t('editorials')"
            :categoryContainerColor="'brown'"
            :categoryContainerSize="'small'"
            :showControls="true"
            :controlsColor="'brownControls'"
          >
            <NewsItemMedium />
          </CategoryContainer>
          <CategoryContainer
            :categoryContainerTitle="$t('local-news')"
            :categoryContainerColor="'brown'"
            :categoryContainerSize="'small'"
            :showControls="true"
            :controlsColor="'brownControls'"
          >
            <NewsItemMedium />
          </CategoryContainer>
        </div>
      </div>
      <SideContent />
    </div>
    <Banner />
    <PictureSlider v-if="true" />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "../components/Banner.vue";
import MainSlider from "../components/MainSlider.vue";
import CategoryContainer from "../components/CategoryContainer.vue";
import SideContent from "../components/SideContent.vue";
import NewsItemMedium from "../components/NewsItemMedium";
import PictureSlider from "../components/PictureSlider";

export default {
  name: "Home",
  components: {
    Banner,
    MainSlider,
    CategoryContainer,
    SideContent,
    NewsItemMedium,
    PictureSlider,
  },
}

</script>
<style lang="sass" scoped>
@media only screen and (max-width: 600px)
  .content
    width: 100%
    .home
      flex-direction: column
      .side
        order: -1

@media only screen and (min-width: 601px) and (max-width: 1024px)
  .content
    width: 90%
    .side
      width: 80%
@media only screen and (min-width: 1024px) and (max-width: 1366px)
  .content
    width: 90%
    .side
      width: 60%
@media only screen and (min-width: 1367px) and (max-width: 1600px)
  .content
    width: 80%
    .side
      width: 50%
@media only screen and (min-width: 1601px)
  .content
    width: 65%
    .side
      width: 95%
@media only screen and (min-width: 601px)
  .small-containers
      display: flex
      flex-direction: row
      justify-content: space-between

.content
  margin: 10px auto
  .home
    width: 100%
    margin: 10px 0
    display: flex
</style>