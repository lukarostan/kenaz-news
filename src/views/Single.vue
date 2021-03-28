<template>
  <div class="content">
    <Banner />
    <div class="article-image-container bitter">
      <img class="article-image" src="../assets/single.png" alt="" />
      <div class="image-content">
        <div class="heading">
          <span>August 26, 2013</span>
          <h2>'Margot' breathlessly reimagines Anne Frank's sister</h2>
        </div>
      </div>
    </div>
    <div class="single">
      <div class="main">
        <SingleArticle />
        <Banner />
        <div class="author varela">
          <h3 class="bitter">{{ $t("about-author") }}</h3>
          <div class="author-content">
            <img src="../assets/author.png" alt="">
            <p>Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem. </p>
          </div>
        </div>
        <SingleComments />
      </div>
      <SideContent />
    </div>
  </div>
</template>
<script>
import Banner from "../components/Banner";
import SideContent from "../components/SideContent";
import SingleArticle from "../components/SingleArticle";
import SingleComments from "../components/SingleComments";
export default {
  components: {
    Banner,
    SideContent,
    SingleArticle,
    SingleComments
  },
};
</script>
<style lang="sass">
@media only screen and (max-width: 600px)
  .content
    width: 100%
    .image-content
      height: 50%
      .heading
        
    .single
      display: flex
      flex-direction: column
      .main
        .author-content
          flex-direction: column
          img
            margin: 10px
      .side
        order: -1

@media only screen and (min-width: 601px) and (max-width: 1366px)
  .content
    width: 90%
    .single
      .main
        width: 60%

@media only screen and (min-width: 1367px) and (max-width: 1600px)
  .content
    width: 80%
    .single
      .main
        width: 65%

@media only screen and (min-width: 1601px)
  .content
    width: 60%
    .single
      .main
        width: 70%

@media only screen and (min-width: 600px)
  .content
    .image-content
      height: 25%
      .heading
        h2
          font-size: 44px
    .single
      display: flex
      flex-direction: row


.content
  margin: 10px auto
  .article-image-container
    position: relative
    display: flex
    flex-direction: column
    .article-image
      width: 100%
    .image-content
      width: 100%
      display: flex
      flex-direction: column
      justify-content: flex-end
      position: absolute
      bottom: 0
      background: linear-gradient(to top, #eee, #eee, transparent)
      .heading
        padding: 0 4%  
        h2
          margin: 10px auto
  .single
    .main
      .author
        background: #fff
        h3
          font-size: 24px
          padding: 20px 0 0 5%
        .author-content
          display: flex
          align-items: center
          padding: 5%
          p
            padding-left: 5%
</style>