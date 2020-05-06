

<template lang="pug">
    .mobile-view
        .mobile-page(class="output ql-snow")
            .ql-editor(v-html="getContent")
        .generate-btn(@click="createProject()")
            img(src="../assets/generatemark.svg", alt="alt")
            span Generate Mark

</template>


<script>


import { mapGetters, mapActions } from 'vuex';


export default {
    methods: {
        ...mapActions({
            generateMark: "project/generateMark",
            updateProject: "project/updateProject"
        }),
        createProject() {
            window.href = "https://google.com"
            let payload = {
                id: this.$route.params.guid,
                content: this.getContent
            }
            this.updateProject(payload)

            setTimeout(() => {
                this.generateMark(payload.id)
            }, 1500);
        }
    },
    computed: {
        ...mapGetters({
            getContent: "project/getContent"
        })
    },

};
</script>

<style lang="stylus" scoped>
.mobile-view
    width 380px
    height 70%
    display flex
    flex-direction column
    justify-content space-between 
    align-items center

    .mobile-page
        width 100%
        height 90%
        background white
        border-radius 20px 

    .generate-btn 
        background #0062FF
        border-radius 20px
        display flex
        flex-direction row
        justify-content center
        align-items center
        width 160px
        height 40px
        img 
            width 16px
            height 20px
        span 
            margin-left 12px
            h5()
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            color: #FAFAFB;
        &:hover
            cursor pointer
            opacity 0.7
            transition all .25s




</style>

<style lang="stylus" scoped>
.ql-editor
    overflow hidden

</style>
