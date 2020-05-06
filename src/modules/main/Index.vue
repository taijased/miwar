

<template lang="pug">
    .main
        .main-tabs
            .main-tabs__header
                .main-tabs__logo
                    img(src="./assets/logo.svg", alt="alt")
                .main-tabs__item 
                    router-link(to="/project/test") Project Name
                        .main-tabs__item-underline
                .main-tabs__item 
                    router-link(to="/") Project List
                        .main-tabs__item-underline
                .main-tabs__item 
                    router-link(to="/analytics") Analytics
                        .main-tabs__item-underline

                .main-tabs__account
                    .account-btn
                        img(src="./assets/search.svg", alt="search")
                    .account-btn
                        img(src="./assets/notification.svg", alt="notification")
                    .account
                        .account__avatar
                            img(src="https://cdn.nlotv.com/i/image_1140x561/uploads/nlo/news/5e15a12b4a94c_thumb_1920_79588.jpeg", alt="avatar")
                        div
                            .account__name Austin Robertson
                            .account__position Marketing Administrator
                        .account__expand

        .main-tabs__content
                transition(name="fade", mode="out-in", :css="true")
                    router-view
        //- Footer
</template>



<script>
import Footer from './components/Footer';

export default {

    methods: {
        logOutAction() {
            this.$fire({
                title: 'Are you sure?',
                text: "Будет пиздец будь осторожней",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Хочешь пиздец?'
            }).then((result) => {
                if (result.value) {
                    this.$fire({
                        title: 'Это он!',
                        text: "Пиздец пришел, быстро, жестко и беспощадно",
                        type: 'success',
                    })
                    this.$router.push("/signin")
                }
            })
        }
    },
    components: {
        Footer
    }
};
</script>

<style lang="stylus" scoped>

.main
    min-width 1000px
    width 100vw
    // min-height 100vh
    display flex
    flex-direction column
    align-items center

    .main-tabs
        height 100%
        width 100%
        .main-tabs__logo
            position fixed
            left 25px
            img 
                width 28px
                height 28px
        .logout-btn
            h2()
            opacity 0.3
            transition all .25s
            &:hover 
                opacity 1
                cursor pointer
                transition all .25s
        &__header
            position fixed
            top 0
            right 0
            left 0
            background white
            padding 2.5vh 0

            box-shadow: inset 0px -1px 0px #E2E2EA;

            display flex
            flex-direction row
            justify-content center
            align-items center
        &__item
            height 100%
            margin-right 30px
            // &:last-child
            //     margin-right 0
            h3()
            color: #171725;
            font-weight bold
            a
                transition opacity .25s
                text-decoration none
                color inherit
            
            .main-tabs__item-underline
                visibility: hidden 
                position relative
                top 2.5vh
                width 100%
                height 3px
                border-top-left-radius 3px
                border-top-right-radius 3px
                background: #0062FF;
            .router-link-exact-active 
                color: #0062FF; 
                transition color .25s
                margin-top 20px
                .main-tabs__item-underline
                    visibility: visible 



        &__content
            display flex
            flex-direction row
            align-items center
            justify-content center
            width 100%


        &__account
            position fixed
            right 25px
            display flex
            flex-direction row
            .account-btn
                display flex
                flex-direction row
                justify-content center
                align-items center
                margin-right 33px
                img
                    width 20px
                    height 20px
            .account
                height 100%
                display flex
                flex-direction row
                justify-content center
                align-items flex-start
                &__avatar
                    display flex
                    flex-direction row
                    justify-content center
                    align-items center
                    margin-right 10px
                    img 
                        border-radius 50%
                        width 32px
                        height 32px
                &__name
                    h4()
                    color #171725
                    font-weight bold
                    font-size 14px
                &__position 
                    margin-top 2px
                    h4()
                    color #92929D
                    font-size 14px

</style>
