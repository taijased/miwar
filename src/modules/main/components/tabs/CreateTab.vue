
<template lang="pug">
    .create-project
        .project-form
            form(autocomplete="off")
                .text-field(:class="{'not-empty': name !== '', 'errors': errors.name}") 
                    .label ProjectName
                    input(v-model="name", type="text", name="name")
            .primary-btn(@click="nextStep()")  Далее
</template>


<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            name: "",
            errors: {
                name: false,
            },
        }
    },
    watch: {
        name() {
            this.errors.name =  this.name.length > 6 ? false : true
        }
    },
    methods: {
        ...mapActions({
            createProject: "project/createProject"
        }),
        nextStep() {
            this.createProject(this.name)
        }
    }
};
</script>

<style lang="stylus" scoped>

.create-project
    width 100vw
    height 100vh
    display flex
    flex-direction column
    justify-content center 
    align-items center

.project-form
    width 500px
    height 235px
    background white
    border-radius 20px
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    form
        width 80%
        display flex
        flex-direction column 
        justify-content center
        align-items center
        margin-top 40px
        .primary-btn
            margin-top 20px
        
        .text-field
            width 100%
            &:hover
                .label
                    bottom -10px
                    left 0
                    color black
                    transition all .25s
                input
                    border-bottom 2px solid black


            .label
                display inline-block
                h4()
                position relative
                bottom -35px
                left 20px
                z-index 1
                color #B3B3B3
                transition all .25s

            input
                width 100%
                height 50px
                border-bottom 2px solid #B3B3B3
                text-indent: 20px;
                h3()
            .eye
                display inline-block
                position relative
                top -35px
                left 90%
                opacity 1
                transition all .25s

            .show-eye
                opacity 0.3
                transition all .25s
            


        .not-empty
            .label
                bottom -10px
                left 0
                color black
                transition all .25s
            input
                border-bottom 2px solid black
                transition all .25s

        .errors
            .label
                color #FF0000 !important
                transition all .25s
            input
                color #FF0000
                border-bottom 2px solid #FF0000 !important
                transition all .25s

    .politic-privacy
        margin-top 20px
        h6()
        text-align center
        a 
            // color $primary-color 
            &:hover
                cursor pointers
                opacity 0.8
    .primary-btn
        width 80%
        height 50px
        h4()
        color: #FFFFFF;
        margin-top 40px
        margin-bottom 10px


</style>
