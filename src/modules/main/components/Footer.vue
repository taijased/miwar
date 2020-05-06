

<template lang="pug">
    .footer
        .footer__block
            .footer__item
                .footer__item-info Russia, Kazan<br/>Spartakovskaya 2b, 57 office
            .footer__item
                .footer__item-info 
                    span Inst, Telegram<br/>
                    | @arq_family
            .footer__item
                a(href="mailto:hello@arq.su")
                    .footer__item-info 
                    span Mail<br/>
                    | hello@arq.su


        .footer__item
            .footer__item-info © 2020 ARQ, LLC<br/>ALL RIGHTS RESERVED

        
        

</template>



<script>
export default {
    data() {
        return {
            counter: 0
        }
    }
};
</script>

<style lang="stylus" scoped>

.footer
    position fixed
    bottom 0
    left 0
    right 0
    height 50px
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    padding 0 5vh
    background white
    box-shadow: 0px -10px 5px rgba(255, 255, 255, 0.9);
    &__block
        display flex
        flex-direction row
        justify-content space-between
        align-items center

    &__item
        h5()
        font-weight: bold;
        margin-right 60px;
        a
            text-decoration inherit
            color inherit
        &:last-child
            margin 0
        span 
            font-style: italic;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;



</style>
