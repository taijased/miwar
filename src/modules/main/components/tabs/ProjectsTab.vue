

<template lang="pug">
    .projects
        .project-card(@click="createProject()")
            .project-card__img
                img(src="../../assets/plus.svg", alt="alt", class="create-project")
            .project-card__title Add Project
            .project-card__content Born and raised in Pennsylvania, Swift moved to Nashville, Tennessee.

        .project-card(v-for="(item, index) in getProjects", :key="`key-project-card-${index}`")
            .project-card__img(@click="openProject(item.id)")
                img(:src="geeImagePath(1)")
            .project-card__title(@click="openProject(item.id)") {{  item.name }}
            .project-card__content(@click="openProject(item.id)") {{  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, ut labore et dolore magna aliqua." }}
            .project-card__delete(@click="removeProject(item.id)")
                div Удалить
          
</template>


<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            getProjects: "project/getProjects"
        })
    },
    methods: {
        ...mapActions({
            fetchProjects: "project/fetchProjects",
            removeProject: "project/removeProject"
        }),
        geeImagePath(index) {
            return require("../../assets/hotpng.png")
        },
        openProject(guid) {
            this.$router.push("/project/" + guid)
        },
        createProject() {
            this.$router.push("/create-project")
        },
    },
    created() {
        this.fetchProjects()
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
    &__delete
        width 100%
        display flex
        flex-direction row
        justify-content flex-end
        margin-top 10px
        margin-bottom -10px
        div 
            h5()
            width 90px
            height 20px
            background red
            display flex
            flex-direction row
            justify-content center
            align-items center
            border-radius 5px
            color white
            transition all .25s
            &:hover
                cursor pointer
                opacity 0.7
                transition all .25s



.create-project
    margin-left 15px

</style>
