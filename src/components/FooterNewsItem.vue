<template>
    <div class="footer-item">
        <div class="footer-item-content varela">
            <div class="footer-item-date">
                <span>August 26, 2013</span>
                <span>5</span>
            </div>
            <h3>Palestinians call of peace talks after clash</h3>
        </div>
        <img src="../assets/footer-item.png" alt="">
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
.footer-item:nth-of-type(3)
    border-bottom: none
.footer-item
    display: flex
    flex-direction: row
    color: #ccc
    padding: 20px 0 40px 0
    border-bottom: 1px solid #333
    .footer-item-date
        color: #666
        display: flex
        justify-content: space-between
        width: 90%
    h3
        max-width: 90%
    img
        border: 2px solid #fff

</style>