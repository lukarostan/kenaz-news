<template>
    <div class="pagination-container">
        <div class="pagination">
            <button class="page-button">1</button>
            <button class="page-button">2</button>
            <button class="page-button">3</button>
            <button class="page-button">4</button>
            <button class="page-button">5</button>
            <button class="page-button">6</button>
            <button class="page-button">7</button>
            <button class="page-button">8</button>
            <button class="page-button">9</button>
            <button class="page-button">10</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
@media only screen and (max-width: 600px)
    .pagination
        padding: 20px
@media only screen and (min-width: 600px)
    .pagination
        padding: 25px 35px 
        display: flex
        flex-direction: row

.pagination-container
    width: 100%
    .pagination > *
        font-family: 'Varela Round', sans-serif
    .pagination
        .page-button
            background: #DDD
            margin: 1px
            min-width: 33px
            min-height: 33px
            border: none
            color: $purple-light
            transition: all 0.15s
            font-size: 14px
        .page-button:hover
            background: $purple-light
            color: white
            cursor: pointer

</style>