<template>
    <div class="comments bitter">
        <h3>{{ $t('comments')}}</h3>
        <Comment />
        <Comment />
        <Comment />
        <h3>{{ $t('add-your-comment')}}</h3>
        <p>Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.</p>
        <div class="comment-form">
            <form action="submit">
                <input type="text" name="name" :placeholder="$t('name')" >
                <input type="text" name="email" :placeholder="$t('email-address')" >
                <textarea name="comment" id="" cols="30" rows="10" :placeholder="$t('comment')"></textarea>
                <ButtonPurple 
                :buttonLabel="'Submit'"
                :buttonSize="'big'">
                </ButtonPurple>
            </form>
        </div>
    </div>
</template>
<script>
import Comment from './Comment'
import ButtonPurple from './ButtonPurple'
export default {
    components:{
        Comment,
        ButtonPurple
    }
}
</script>
<style lang="sass" scoped>
.comments
    background: white
    margin: 20px 0
    padding: 5%
    h3
        padding-bottom: 20px
        font-size: 24px
    p
        font-size: 13px
    .comment-form
        margin-top: 20px
        form
            display: flex
            flex-direction: column
            input, textarea
                background: #ddd
                border: none
                padding: 15px
                margin: 5px 0
                font-family: 'Varela Round',sans-serif
            input[type="text"]
                width: 50%
            .button-container
                margin-top: 10px
                

</style>