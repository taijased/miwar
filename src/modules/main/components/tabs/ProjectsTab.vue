

<template lang="pug">
    .projects
        .project-card
            .project-card__img
                img(src="../../assets/plus.svg", alt="alt", class="create-project")
            .project-card__title Add Project
            .project-card__content Born and raised in Pennsylvania, Swift moved to Nashville, Tennessee.

        .project-card(v-for="item in 2", :key="`key-project-card-${item}`", @click="openProject()")
            .project-card__img
                img(:src="geeImagePath(1)")
            .project-card__title {{  "Test project name" }}
            .project-card__content {{  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, ut labore et dolore magna aliqua." }}
</template>


<script>
export default {
    methods: {
        geeImagePath(index) {
            return require("../../assets/hotpng.png")
        },
        openProject() {
            this.$router.push("/project/test")
        }
    }
};
</script>

<style lang="stylus" scoped>

.projects
    width 60%
    @media screen and (max-width: 1400px) 
        width 80%
    display: grid;
    padding-top 100px
    padding-bottom 200px
    grid-row-gap: 5%; 
    grid-column-gap: 5%; 
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: ". . ." ". . ." ". . .";

.project-card
    user-select none
    // min-height 180px
    // width 200px
    min-width 200px
    background: #FFFFFF;
    border-radius: 20px;
    display flex
    flex-direction column
    justify-content flex-start
    padding 30px
    &__img
        display flex
        flex-direction row
        justify-content flex-start
        align-items flex-start
        img
            width 40px 
            height 40px
    &__title
        margin-top 17px
        h3()
        font-weight: bold;
        text-align left
        color: #44444F;
    &__content
        h5()
        margin-top 10px
        text-align left
        color #44444F


.create-project
    margin-left 15px

</style>
