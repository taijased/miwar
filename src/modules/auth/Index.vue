<template lang="pug">
    .auth
        .auth-tabs
            .auth-tabs__header
                .auth-tabs__item 
                    router-link(to="/signup") {{$t("auth.signup.title")}}
                .auth-tabs__item 
                    router-link(to="/signin") {{$t("auth.signin.title")}}
            .auth-tabs__content
                transition(name="fade", mode="out-in", :css="true")
                    router-view

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

.auth
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    z-index 0
    background white
    display flex
    flex-direction row
    justify-content flex-start
    align-items center
    user-select none
    .auth-tabs
        margin-left 10vw
        &__header
            width @width
            display flex
            flex-direction row
            justify-content flex-start
            align-items center
        &__item
            h2()
            a
                opacity 0.3
                transition opacity .25s
                text-decoration none
                color inherit
            &:nth-child(1)
                margin-right 30px

            .router-link-exact-active 
                opacity 1
                transition opacity .25s
            .router-link-active
                opacity 1
                transition opacity .25s
        &__content
            width 350px
            height 500px



</style>
