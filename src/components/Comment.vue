<template>
    <div class="comment varela">
        <div class="avatar-container">
            <img src="../assets/avatar.png" alt="">
        </div>
        <div class="comment-content">
            <div class="comment-top">
                <div class="comment-info">
                    <h4 class="name bitter">Matt Addams</h4>
                    <span>Jan 2nd, 2012 2:35 pm</span>
                </div>
                <a href="">{{$t('reply')}}</a>
            </div>
                <p>Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.</p>
        </div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
.comment
    display: flex
    flex-direction: row
    margin: 5% 0
    .comment-content
        margin: 0 5% 0 2%
        .comment-top
            display: flex
            flex-direction: row
            justify-content: space-between
            .comment-info
                display: flex
                flex-direction: row
                align-items: baseline
                .name
                    color: #4D4382
                    font-size: 18px
                span
                    color: #666
                    font-size: 11px
                    margin-left: 10px
                    height: fit-content
                    

</style>